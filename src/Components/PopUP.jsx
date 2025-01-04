import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import spe39 from "../Images/39PopUp_1.jpg";
import i48 from "../Images/48.png";

const Popup = () => {
  useEffect(() => {
    //3 seconds ON
    const showPopup = setTimeout(() => {
      document.getElementById("popup-container").style.display = "block";
    }, 6000);

    //7 seconds OFF
    const closePopup = setTimeout(() => {
      document.getElementById("popup-container").style.display = "none";
    }, 12000);

    return () => {
      clearTimeout(showPopup);
      clearTimeout(closePopup);
    };
  }, []);

  return (
    <div id="popup-container">
      <span
        id="close-btn"
        onClick={() => {
          document.getElementById("popup-container").style.display = "none";
        }}
      >
        <i className="fa-solid fa-circle-xmark text-secondary"></i>
      </span>
      <Link to={`/news-details/nbs`}>
        <img
          src="https://ayg.s3.us-east-2.amazonaws.com/Megasails_NBS.jpeg"
          alt="hcbyachts@AYG"
          className="img-fluid"
        />
      </Link>

      {/* <div
        class="card m-0 border-0 bg-transparent"
        style={{ maxWidth: "840px" }}
      >
        <div class="row g-0 p-2">
          <div class="col-lg-6">
            <img
              src="https://aimbaseimage.blob.core.windows.net/hcbyachts/Images/DJI_0079.jpg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-lg-6">
            <div class="card-body">
              <small class="text-primary">
                <span>The King of Center Consoles</span>
              </small>
              <h5 class="card-title">
                THE HCB 65' WORLDS LARGEST CENTER CONSOLE YACHTS.
              </h5>

              <p class="card-text ">
                HCB Yachts boasts the FIRST ever Mega Center Console Yacht.
              </p>
              <p class="card-text">
                <Link
                  to={`/65-estrella`}
                  className=" text-white btn btn-sm custom-contact-btn"
                >
                  Explore NOW{"  "}
                  <i class="fa-solid fa-angles-right"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Popup;
