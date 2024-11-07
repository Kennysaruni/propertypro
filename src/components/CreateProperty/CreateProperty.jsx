import React from 'react';
import './CreateProperty.css';

function CreateProperty() {
  return (
    <div className="property-container">
      <h3 className="title">Add a new property</h3>
      <form>
        <label htmlFor="property-name">Property Name</label>
        <input type="text" id="property-name" className="property-input" placeholder='Add property name' />

        <label htmlFor="property-location">Location</label>
        <input type="text" id="property-location" className="property-input" placeholder='Add location' />

        <label htmlFor="property-price">Price</label>
        <input type="text" id="property-price" className="property-input" placeholder='Add price'/>

        <label htmlFor="property-image">Upload Image</label>
        <input type="file" id="property-image" className="property-input" accept="image/*" />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default CreateProperty;
