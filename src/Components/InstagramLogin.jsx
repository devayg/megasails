import React, { useState } from "react";
import axios from "axios";

const InstagramLogin = () => {
  const [authCode, setAuthCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [userMedia, setUserMedia] = useState(null);

  const CLIENT_ID = "1044118127184848";
  const CLIENT_SECRET = "...";
  const REDIRECT_URI = "...";

  // Step 1: Redirect user to Instagram Login
  const handleLogin = () => {
    const authURL = `https://api.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
    window.location.href = authURL;
  };

  // Step 2: Handle authorization code (via URL query parameter)
  React.useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");
    if (code) {
      setAuthCode(code);
      exchangeCodeForToken(code);
    }
  }, []);

  // Step 3: Exchange Authorization Code for Access Token
  const exchangeCodeForToken = async (code) => {
    try {
      const response = await axios.post(
        "https://api.instagram.com/oauth/access_token",
        new URLSearchParams({
          client_id: "1886512981855982",
          client_secret: "91462596a87e81d00324b2d9698682a7",
          grant_type: "authorization_code",
          redirect_uri: REDIRECT_URI,
          code: code,
        })
      );
      setAccessToken(response.data.access_token);
      fetchUserMedia(response.data.access_token);
    } catch (error) {
      console.error("Error exchanging code for token:", error);
    }
  };

  // Step 4: Fetch User Media
  const fetchUserMedia = async (token) => {
    try {
      const response = await axios.get(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token=${token}`
      );
      setUserMedia(response.data.data);
    } catch (error) {
      console.error("Error fetching user media:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Instagram Login</h1>
      {!authCode && !accessToken && (
        <button onClick={handleLogin}>Login with Instagram</button>
      )}
      {userMedia && (
        <div>
          <h2>Your Instagram Media</h2>
          {userMedia.map((media) => (
            <div key={media.id} style={{ margin: "20px" }}>
              {media.media_type === "IMAGE" && (
                <img src={media.media_url} alt={media.caption} width="300" />
              )}
              <p>{media.caption}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstagramLogin;
