import React, { useState } from "react";
import axios from "axios";

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("age", age);

        try {
            const response = await axios.post("http://localhost:8000/api/faculties/", formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Upload failed.");
        }
    };

    return (<div> <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /> <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} /> <input type="file" accept="image/*" onChange={handleImageChange} /> <button onClick={handleUpload}>Upload Image</button> {message && <p>{message}</p>} </div>);
};

export default ImageUpload; 
