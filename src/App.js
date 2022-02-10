import "./styles.css";
import Video from "./Video";
import { useRef } from "react";

export default function App() {
  const videoRef = useRef();

  // console.log(videoRef.current);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div className="App">
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
