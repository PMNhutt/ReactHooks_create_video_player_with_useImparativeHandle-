import download from "./Videos/download.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(prop, ref) {
  const videoRef = useRef();

  //return ra đối số thứ 2 là object sẽ đc gán cho cái videoRef bên App.js
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    }
  }));

  return <video ref={videoRef} src={download} width={250}></video>;
}

export default forwardRef(Video);
