import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const InstagramVideos = () => {
  const [videos, setVideos] = useState([]);
  const accessToken =
    "IGQWRNWUo2NThqTmc3ZA1N6cGM0NlZAOdDh3ZA0RvVTAtbWRZAV3JrVS1rYlNfVFlaQ3lfQkZAMeWZA0Sm5Fc1pwc2h1ZAE92RG1lM0d6ZAmhkZAkJkc05KXzVUY3VOSHlrc1NWMVUyM01pTHltaEZApNmNDaVhGQlFMcFJhZA3MZD";
  const userId = "60520996949";

  useEffect(() => {
    axios
      .get(
        `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`
      )
      .then((response) => {
        const media = response.data.data;
        setVideos(media);
      })
      .catch((error) => {
        console.error("Error fetching Instagram media:", error);
        console.log("Error response:", error.response);
        console.log("Error config:", error.config);
      });
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <ReactPlayer
            url={video.media_url}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      ))}
    </div>
  );
};

export default InstagramVideos;
