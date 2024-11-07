import React, { useRef, useState } from "react";
import "./CreateProperty.css";
import API_BASE_URL from "../../utilities/env";
import { getJwtToken } from "../../utilities/auth";

function CreateProperty() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const imagesRef = useRef([]);
  const postToGet = useRef(1);

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("property[property_name]", name);
    formData.append("property[location]", location)

    for(let i =0; i<imagesRef.current.files.length; i++){
        formData.append("property[images][]" ,imagesRef.current.files[i])
    }
    postData(formData)
  };

  const postData = (formData) => {
    fetch(`${API_BASE_URL}/properties`,{
        method: 'POST',
        headers: {
            "Authorization" : `Bearer ${getJwtToken()}`,
        },
        body: formData
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  return (
    <div className="property-container">
      <h3 className="title">Add a new property</h3>
      <form>
        <label htmlFor="property-name">Property Name</label>
        <input
          type="text"
          id="property-name"
          className="property-input"
          placeholder="Add property name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="property-location">Location</label>
        <input
          type="text"
          id="property-location"
          className="property-input"
          placeholder="Add location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <label htmlFor="property-price">Price</label>
        <input
          type="text"
          id="property-price"
          className="property-input"
          placeholder="Add price"
        />

        <label htmlFor="property-image">Upload Image</label>
        <input
          type="file"
          id="property-image"
          className="property-input"
          accept="image/*"
          multiple ref={imagesRef}
        />

        <button type="submit" className="submit-button" onClick={handleUpload}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateProperty;
