import { useRef } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, width = "100%", height = "220px" }) => {
  const playerRef = useRef(null);

  const handleEnded = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
    }
  };

  return (
    <ReactPlayer
      ref={playerRef}
      width={width}
      height={height}
      url={url}
      playing
      loop
      muted
      onEnded={handleEnded}
      controls
      config={{ file: { attributes: { controlsList: "nodownload" } } }}
    />
  );
};

export default VideoPlayer;
