import React from "react";
// import my_logo from "../Images/my-logo-white.png";
import NavBar from "../Components/Navbar";
import { Link } from "react-router-dom";
// import hcb from "../Images/thewharf.jpeg";
// import hcb1 from "../Images/53edit1.jpeg";
// import prof from "../Images/ayg-icon.jpg";
import SimilarYacht from "../Components/SimilarYacht";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

const NewsDetails7 = () => {
  return (
    <div>
      <NavBar />
      <Helmet>
        <title>Fort Lauderdale International Boat Show</title>
        <meta
          name="description"
          content="Discover the 2024 Fort Lauderdale International Boat Show (FLIBS) with HCB Yachts & Boats. Get event details, tickets, schedules, and explore luxury yachts!"
        />
        <meta
          name="keywords"
          content="Fort Lauderdale International Boat Show 2024, FLIBS 2024, Fort Lauderdale boat show tickets, FLIBS events, Biggest boat shows in the US, FLIBS 2024 schedule, Luxury yachts FLIBS 2024, FLIBS 2024 tickets, Boat show USA 2024, Fort Lauderdale International Boat Show events, FLIBS maps and boats, MegaSails, HCB Yachts , hcb yachts boat show, 2024, HCB Yachts Boat Show FLIBS"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Fort Lauderdale International Boat Show | FLIBS "
        />
        <meta
          property="og:description"
          content="Discover the 2024 Fort Lauderdale International Boat Show (FLIBS) with HCB Yachts & Boats. Get event details, tickets, schedules, and explore luxury yachts!"
        />
        <meta
          property="og:url"
          content="https://www.megasails.com/news-details/flibs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://megasails.s3.us-east-2.amazonaws.com/56+poster+print+.jpeg"
        />
        <meta property="og:site_name" content="MegaSails" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>
      <section className="news-details mt-5 mb-2">
        <div className="container p-5 bg-body-tertiary">
          <div className="row mb-5">
            <div className="col-12 col-md-6 d-flex align-items-center text-primary-emphasis">
              <div>
                <p className="mb-1 fw-bold">Oct 30 - Nov 03, 2024</p>
                <h2 className="fw-bold text-uppercase">
                  Get Ready for the 2024 Fort Lauderdale International Boat Show
                </h2>

                <p className="mb-0">
                  <i className="fa-solid fa-pen-nib" /> Hunter Lajiness
                </p>
                {/* <Link
                  to="https://www.americanyachtgroup.com/yachtdetails/9414896"
                  variant=""
                  className="btn gradient-c1 text-white"
                >
                  View Full Details <i class="fa-solid fa-angles-right"></i>
                </Link> */}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src="https://hcbyachts.com/wp-content/uploads/2024/08/DSC08445-scaled.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md-12 ">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis fw-bold"
              >
                HCB Yachts is setting a new standard in the world of large
                center consoles. At FLIBS 2024, we proudly unveil the highly
                anticipated 56’Sueños GIX, the latest and most groundbreaking
                model in our fleet. This incredible vessel will make its
                official public debut, and it’s destined to leave an indelible
                mark on the marine industry.
              </p>
              <p>
                HCB has long been the leader in pushing boundaries, and the 56’
                Sueños GIX is no exception. With its unrivaled size,
                cutting-edge features, and impeccable design, this yacht
                exemplifies our commitment to creating the largest, most capable
                center console yachts on the market. It’s not just a boat; it’s
                an experience—one that’s meticulously crafted to deliver the
                ultimate on-water adventure for our owners.
              </p>
            </div>
          </div>

          <p
            style={{ textAlign: "justify" }}
            className="text-primary-emphasis"
          ></p>
          <div className="row mb-5">
            <div className="col-12 col-md-6">
              <img
                src="https://hcbyachts.com/wp-content/uploads/2024/08/DJI_0095-Enhanced-NR-4-scaled.jpg"
                alt="..."
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center">
              <p
                style={{ textAlign: "justify" }}
                className="text-primary-emphasis"
              >
                The anticipation for this new model has been off the charts, and
                for good reason. HCB has been working tirelessly behind the
                scenes to develop something the industry has never seen before.
                The 56’Sueños GIX builds on the legacy of the 53’Sueños,
                bringing even more innovation, power, and luxury to our
                discerning clients. Following our success at the Miami
                International Boat Show, where the 48’ Campeón won the
                Innovation Award, many competitors speculated that HCB would
                take a step back. But that’s not how we operate. Just when the
                industry thought we couldn’t go any bigger or better, we quietly
                hinted at what was coming next—the 56’ Sueños GIX, the ultimate
                big brother to our already legendary 53’ Sueños
              </p>
            </div>
            <p
              style={{ textAlign: "justify" }}
              className="text-primary-emphasis pt-2"
            >
              Now, that vision is a reality, and we can’t wait for you to
              experience it in person at FLIBS 2024. The 56’Sueños GIX is more
              than just the next step for HCB—it’s a game-changer for the entire
              marine industry. Join us at the show and witness the future of
              yachting.
            </p>
            <p
              style={{ textAlign: "justify" }}
              className="text-primary-emphasis"
            >
              G-Dock, Slips 701-707
            </p>
          </div>
        </div>
      </section>
      {/*Similar Yachts For Sale */}
      <section className="mb-4">
        <Container fluid className="col-lg-11">
          <h4 className="fw-bold text-primary-emphasis">
            Other HCB Yachts For Sale
          </h4>
          <hr />
          <SimilarYacht />
        </Container>
      </section>
    </div>
  );
};

export default NewsDetails7;
