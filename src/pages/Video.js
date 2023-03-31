import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        src="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        // controls
        loop
      ></video>
      {/* Sidebar */}
      <VideoFooter />
    </div>
  );
}

export default Video;
