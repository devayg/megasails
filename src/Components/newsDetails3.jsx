import React from "react";
//import my_logo from "../Images/my-logo-white.png";
import NavBar from "../Components/Navbar";
import hcb from "../Images/thewharf.jpeg";
import hcb1 from "../Images/53edit1.jpeg";
import { Helmet } from "react-helmet";

const NewsDetails3 = () => {
  return (
    <div>
      <Helmet>
        <title>Announces Grand Opening of New Office- MegaSails</title>
        <meta
          name="description"
          content="Celebrate our new office opening! Meet our expert team, enjoy exclusive events, and explore luxury yachts. Stay tuned for special offers!"
        />
        <meta
          name="keywords"
          content="opening of new office, Megasails, exclusive events, expert team, luxury yachts, expanded range, latest updates, special offers, new location, yacht brokerage, luxury yacht showroom, grand opening, yacht office launch, premium yacht services, yacht sales office, expanded yacht portfolio, exclusive yacht offerings, upscale yacht brokerage, new office announcement, yacht market expansion, luxury marine events"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Megasails Announces Grand Opening of New Office"
        />
        <meta
          property="og:description"
          content="Celebrate our new office opening! Meet our expert team, enjoy exclusive events, and explore luxury yachts. Stay tuned for special offers!"
        />
        <meta
          property="og:url"
          content="https://www.megasails.com/news-details/opening-of-new-office"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://megasails.s3.us-east-2.amazonaws.com/Opening+of+New+Office+-+Megasails.jpeg"
        />
        <meta property="og:site_name" content="Megasails" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
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
                  HCB Yachts & American Yacht Group set sights on grand opening
                  of new office
                </h2>
                <p className="mb-0">
                  <i className="fa-solid fa-pen-nib" /> Hunter Lajiness
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={hcb} alt="..." className="img-fluid mt-3" />
            </div>
          </div>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            American Yacht Group and HCB Yachts, proudly announce the grand
            opening of its new office at The Wharf in Orange Beach, Alabama.
            This expansion marks a significant milestone for our company and
            reflects our commitment to providing unparalleled services and
            luxury yachting experiences in the Gulf Coast region.
          </p>
          <p style={{ textAlign: "justify" }} className="text-primary-emphasis">
            Strategically located at The Wharf, a premier destination known for
            its vibrant atmosphere and world-class amenities, the new American
            Yacht Group/HCB Yachts office will serve as a hub for boating,
            fishing, and luxury enthusiasts alike. The office will offer a
            seamless experience for individuals seeking to explore the ultimate
            in yachting lifestyle.
          </p>
          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis fw-bold"
          >
            “We are thrilled to unveil our new office at The Wharf, further
            solidifying our presence in the Orange Beach community,” said Matt
            McAfee, GM of American Yacht Group
          </p>
          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis"
          ></p>
          <div className="row mb-5">
            <div className="col-12 col-md-6">
              <img src={hcb1} alt="..." className="img-fluid mt-3" />
            </div>
            <div className="col-12 col-md-6">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                HCB Yachts is known for its relentless pursuit of innovation,
                blending cutting-edge technology with elegant design to create
                yachts that offer unmatched performance, comfort, and luxury on
                the water. The company’s commitment to innovation has resulted
                in a range of groundbreaking features and advancements, setting
                new standards for the industry.
              </p>
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                HCB Yachts is a leading manufacturer of luxury center console
                yachts, renowned for their innovative designs, superior
                performance, and uncompromising quality. With a passion for
                pushing boundaries and reimagining the boating experience, HCB
                Yachts is committed to delivering unparalleled craftsmanship and
                luxury on the water.
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

export default NewsDetails3;
