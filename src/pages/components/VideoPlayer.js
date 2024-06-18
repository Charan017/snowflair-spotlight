import { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, width = "100%", height = "220px" }) => {
  const [play, setPlay] = useState(false);

  return (
    <ReactPlayer
      width={width}
      height={height}
      url={url}
      controls={true}
      playing={play}
      onPlay={() => {
        setPlay(true);
      }}
    />
  );
};

export default VideoPlayer;
