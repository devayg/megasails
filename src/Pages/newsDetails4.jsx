import React from "react";
// import my_logo from "../Images/my-logo-white.png";
import NavBar from "../Components/Navbar";
// import hcb from "../Images/thewharf.jpeg";
// import hcb1 from "../Images/53edit1.jpeg";

const NewsDetails4 = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "100px",
        }}
      ></div>
      <section className="news-details my-5">
        <div className="container p-5 bg-body-tertiary">
          <div className="row mb-5">
            <div className="col-12 col-md-6 d-flex align-items-center text-primary-emphasis">
              <div>
                {/* <img
                  src={my_logo}
                  alt="..."
                  height="50px"
                  style={{ filter: "brightness(100) invert(1)", color: "#000" }}
                /> */}
                <p className="mb-1 fw-bold">March, 2024</p>
                <h2 className="fw-bold text-uppercase">
                  The HCB 39' Speciale best under the 40' sector.
                </h2>
                {/* <p className="mb-0">
                  <i className="fa-solid fa-pen-nib" /> Hunter Lajiness
                </p> */}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://aimbaseimage.blob.core.windows.net/hcbyachts/Images/39%20Z%20Running.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
          </div>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            The Speciale is arguably the best value when shopping for center
            consoles under the 40' sector. This family-friendly center console
            yacht is a comparison shoppers dream, with the all of the desired
            standard features and comfort you expect from HCB.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            As you step on board, you'll quickly spot the roomy aft layout and
            the rear-facing lounge seat that transforms effortlessly into a
            tackle station with a simple seat back fold-down. For those who love
            cooking at the sandbar, the Speciale also provides rear-facing
            summer kitchen option.
          </p>

          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis"
          ></p>
          <div className="row mb-5">
            <div className="col-12 col-md-6">
              <img
                src="https://hcbyachts.com/wp-content/uploads/2022/03/A1Z-Hull-19_Profiles13.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-12 col-md-6">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis fw-bold pt-3"
              >
                This family-friendly center console yacht is a comparison
                shoppers dream, with the all of the desired standard features
                and comfort you expect from HCB.
              </p>
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                Stepping aboard you will immediately notice the spacious aft
                layout and rear facing lounge seat that easily converts to a
                tackle station by simply folding down the seat back.
              </p>
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                The unintimidating helm, like all of the Speciale’s big sisters,
                boasts a terrific panoramic view with the cross-curved™
                non-glaring glass, clean automotive inspired helm station, 3 of
                the largest displays in it’s class, and three comfortable helm
                seats.
              </p>
            </div>
          </div>
          {/* <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis fw-bold"
          >
            From the luxurious interiors to the carefully designed layout, every
            element can be tailored to your unique preferences, ensuring that
            your yacht truly reflects your individual style.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            For the bold, the Campeon is a statement of your boldness, a vessel
            of innovation, a performer on the water, a masterpiece of custom
            craftsmanship, and a beacon of quality.
          </p> */}
          {/* <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Close, But No Trophy As the tournament drew to a close, and although
            they did not win, the HCB Yacht had made its mark on the northern
            Gulf fishing community. With its seamless blend of luxury,
            innovation, and power, it stood as a testament to HCB Yachts’
            commitment to excellence. Beyond this tournament’s stage, the HCB
            Speciale will continue to inspire and empower anglers to embark on
            their own adventures, cherishing the beauty of the seas while
            safeguarding its inhabitants. With their eyes on future tournaments,
            the AYG crew and their HCB Yacht will remain an emblem of
            excellence, a symbol of responsible sportfishing, and a beacon of
            hope for the preservation of our marine treasures.
          </p> */}
        </div>
      </section>
    </div>
  );
};

export default NewsDetails4;
