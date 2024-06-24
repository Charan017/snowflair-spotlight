import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import CustomImage from "./CustomImage";
import React from "react";

const VideoPlayer = ({ url, width = "100%", height = "220px" }) => {
  const playerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const handleShowControls = (e) => {
    setShowControls(!showControls);
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const handleEnded = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };

  // const toggleFullscreen = () => {
  //   if (!document.fullscreenElement) {
  //     if (playerRef.current.wrapper) {
  //       playerRef.current.wrapper.requestFullscreen();
  //       setIsFullscreen(true);
  //     }
  //   } else if (document.fullscreenElement) {
  //     document.exitFullscreen();
  //     setIsFullscreen(false);
  //   }
  // };

  // useEffect(() => {
  //   const handleClick = () => {
  //     toggleFullscreen();
  //   };

  //   const videoElement = playerRef.current.getInternalPlayer();
  //   videoElement.addEventListener("click", handleClick);

  //   return () => {
  //     videoElement.removeEventListener("click", handleClick);
  //   };
  // }, [isFullscreen]);

  return (
    <div
      className="relative"
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={playerRef}
        width={width}
        height={height}
        url={url}
        playing
        loop
        muted={isMuted}
        onEnded={handleEnded}
      />
      {showControls && (
        <div className="absolute right-2 bottom-1 flex justify-end">
          {isMuted ? (
            <div
              className="flex items-center justify-center"
              onClick={(e) => {
                setIsMuted(false);
              }}
            >
              <CustomImage src={"/mute.svg"} width={20} height={20} />
            </div>
          ) : (
            <div
              style={{ color: "white" }}
              className="flex items-center justify-center"
              onClick={(e) => {
                setIsMuted(true);
              }}
            >
              <CustomImage src={"/unMute.svg"} width={20} height={20} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
