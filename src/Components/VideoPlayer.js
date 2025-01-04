import React, { useState, useEffect } from "react";
import flvjs from "flv.js";
import videojs from "video.js";

const VideoPlayer = ({ videoUrl, videoType }) => {
  const [player, setPlayer] = useState(null);
  const [videoElement, setVideoElement] = useState(null);

  useEffect(() => {
    if (videoType === "mp4") {
      const videoElement = document.getElementById("video-element");
      setVideoElement(videoElement);
      const player = videojs(videoElement, {
        techOrder: ["html5"],
        sources: [
          {
            src: videoUrl,
            type: "video/mp4",
          },
        ],
      });
      setPlayer(player);
    } else if (videoType === "flv") {
      const flvPlayer = flvjs.createPlayer({
        type: "flv",
        url: videoUrl,
      });
      flvPlayer.attachMediaElement(document.getElementById("video-element"));
      setPlayer(flvPlayer);
    }
  }, [videoUrl, videoType]);

  return (
    <div>
      <video id="video-element" width="100" height="50" controls />
    </div>
  );
};

export default VideoPlayer;
