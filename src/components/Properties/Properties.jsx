import React, { useEffect, useState } from "react";
import "./Properties.css";
import { getJwtToken } from "../../utilities/auth";

function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${getJwtToken()}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();

        // Map the properties and include the units and leases data
        const propertiesWithDetails = data.owner.properties.map(property => {
          const units = data.owner.units.filter(unit => unit.property_id === property.id);
          const leases = data.owner.leases.filter(lease => lease.property_id === property.id);

          // Calculate total rent collected for leased units
          const rentCollected = leases.reduce((total, lease) => {
            const unit = units.find(u => u.id === lease.unit_id);
            return unit ? total + parseFloat(unit.rent_amount) : total;
          }, 0);

          return {
            ...property,
            unitCount: units.length,
            leaseCount: leases.length,
            rentCollected: rentCollected || 0 // Default to 0 if rentCollected is undefined or NaN
          };
        });

        setProperties(propertiesWithDetails);
      } catch (error) {
        console.error('Error fetching profile data', error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="properties-container">
      <h1 className="all-properties">All properties</h1>
      <div className="filter-dropdowns">
        <select name="property-type" className="property-type">
          <option value="" disabled selected>
            Property type
          </option>
          <option value="">Apartment</option>
          <option value="">House</option>
          <option value="">Bungalow</option>
        </select>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Status</th>
              <th>Unit count</th>
              <th>Lease count</th>
              <th>Rent Collected</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id}>
                <td>{property.property_name}</td>
                <td>Active</td> {/* Assuming all properties are active, you can adjust status if needed */}
                <td>{property.unitCount}</td>
                <td>{property.leaseCount}</td>
                <td>KES {property.rentCollected}</td> {/* Safely using toFixed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Properties;
