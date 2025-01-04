import { Adsense } from "@ctrl/react-adsense";
import React from "react";

const Ads = () => {
  return (
    <div>
      {" "}
      <div className="text-center">
        <Adsense
          client="ca-pub-6409212221098617"
          slot="1759471789"
          style={{
            width: 300,
            height: 300,
            float: "center",
          }}
          format=""
        />
      </div>
    </div>
  );
};

export default Ads;
