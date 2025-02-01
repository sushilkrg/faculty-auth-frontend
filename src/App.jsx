import './App.css'
import ImageUpload from './components/ImageUpload'
import FaceCapture from './components/FaceCapture'

function App() {
  return (
    <>
      <div>
        <h1>Faculty Authentication System</h1>
        <h2>Upload Image</h2>
        <ImageUpload />
        <h2>Capture and Authenticate</h2>
        <FaceCapture />
      </div>
    </>
  )
}

export default App
