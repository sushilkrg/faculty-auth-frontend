import React, { useRef, useState } from "react"; 
import Webcam from "react-webcam"; 
import axios from "axios"; 

const FaceCapture = () => { 
  const webcamRef = useRef(null); 
  const [capturedImage, setCapturedImage] = useState(null); 
  const [message, setMessage] = useState(""); 

  const captureFace = () => { 
      const imageSrc = webcamRef.current.getScreenshot(); 
      setCapturedImage(imageSrc); 
  }; 

  const handleVerifyFace = async () => { 
      const formData = new FormData(); 

      formData.append("image", dataURLtoFile(capturedImage)); 

      try { 
          const response = await axios.post("http://localhost:8000/api/authenticate/", formData); 
          setMessage(response.data.message); // Show success or failure message.
      } catch (error) { 
          setMessage("Authentication failed."); // Handle error case.
      } 
  }; 

  const dataURLtoFile = (dataUrl) => { const arr = dataUrl.split(","); const mime = arr[0].match(/:(.*?);/)[1]; const bstr = atob(arr[1]); let n = bstr.length; const u8arr = new Uint8Array(n); while (n--) { u8arr[n] = bstr.charCodeAt(n); } return new File([u8arr], "face.jpg", { type: mime }); }; 

  return ( <div> <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" width={350} /> <button onClick={captureFace}>Capture</button> {capturedImage && (<><img src={capturedImage} alt="Captured" /><button onClick={handleVerifyFace}>Authenticate</button></>)} {message && <p>{message}</p>} </div> ); }; 

export default FaceCapture;  
