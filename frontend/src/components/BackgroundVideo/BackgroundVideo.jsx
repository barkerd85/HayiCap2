import React from "react";
import weddingStock from "../Assets/weddingStock.mp4";
import EmbeddedVideos from "../EmbeddedVideos/EmbeddedVideos";

const BackgroundVideo = () => {
  return (
    <div className="bg">
      <div className="overlay"></div>
      <video src={weddingStock} autoPlay loop muted />
      <br />
      <br />
      {<EmbeddedVideos />}
      <div className="content"></div>
    </div>
  );
};

export default BackgroundVideo;

















