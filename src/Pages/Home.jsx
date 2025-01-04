import React from "react";
import Navbar from "../Components/Navbar";
import HomeHCB from "../Components/HomeHCB";
//import HomeIKON from "../Components/HomeIKON";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Popup from "../Components/PopUP";
import { Helmet } from "react-helmet";
import InstagramVideos from "../Components/InstagramVideos.jsx";
import InstagramLogin from "../Components/InstagramLogin.jsx";
import InstagramFeed from "../Components/InstagramFeeds.jsx";
import EventsFeed from "../Components/EventsFeed.jsx";

const Home = () => {
  const accessToken =
    "IGQWRPTDgzTGZATVnliM0xzTDE3RldyTG5FbU94Y1FBak5Vc2N2NGRwMVBzRUI4SXRaUWc4S3dWWV9wbUtYWnM5UTduSVpOQjBYN3JBUTM3YlZAyc05nbTZAxVEluZA2R3elptc0NiMXhsYmxKQ2Y0d0x6eDNaVzFBYncZD"; // Replace with your access token
  const limit = 15; // Number of posts to fetch
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Helmet>
        <title>Yachts & Sails Boats for Sale - MegaSails </title>
        <meta
          name="description"
          content="MegaSails specializes in new and used yacht brokerage. We list center consoles, superyachts, motor yachts, catamarans, sailboats, and more using MLS"
        />
        <meta
          name="keywords"
          content=" Megasails, yacht brokers Florida, boats for sale, Fort Lauderdale yacht brokers, Fort Lauderdale yacht sales, yachts for sale, HCB yachts, HCB boats, American yachts, used HCB yachts for sale, American Yacht, American sells boats, used HCB boats for sale, yacht broker Naples, yacht broker Ft Lauderdale, yacht brokerage Florida, Fort Lauderdale yacht broker, yacht brokers in Florida, Ft Lauderdale yacht sales, American yacht sales, yacht group, who owns HCB yachts, yacht broker Palm Beach, yacht group, HCB boat for sale, USA yacht sales, Palm Beach yacht sales, yacht brokers Ft Lauderdale, yacht brokers Fort Lauderdale, yachts for sale Palm Beach Florida, yacht broker Fort Lauderdale "
        />
        <meta
          name="keywords"
          content="HCB Yachts for sale, Boats for sale in Florida, Sail boats for sale, Boats for sale, Power boats for sale, Center Console Yachts, HCB 39 Speciale, HCB 42 Siesta, HCB 53 Sueños, HCB 65 Estrella, HCB 48 Lujo, HCB 39 Speciale for sale, HCB 42 Siesta for sale, HCB 53 Sueños for sale, HCB 65 Estrella for sale, HCB 48’, Lujo for sale,39 Speciale,42 Siesta,53 Sueños,65 Estrella,48 Lujo,39 HCB Speciale,42 HCB Siesta,53 HCB Sueños,65 HCB Estrella,48 HCB Lujo, HCB yachts for sale in Florida, HCB Yachts for sale in Florida, HCB yachts for sale in Fort Lauderdale, HCB yachts for sale in Miami, HCB yachts for sale in the USA, HCB yachts near me, best prices on HCB yachts, HCB yacht financing options, HCB yacht specifications and prices, HCB yachts with advanced features, where to buy HCB yachts, HCB luxury fishing yachts, custom HCB yachts for sale, HCB offshore yachts for sale, fishing boats for sale in Hawaii, saltwater fishing boats for sale in Hawaii, HCB 39 Speciale for sale, HCB 39 Speciale review, Luxury center console HCB 39,High-performance HCB 39 Speciale, Offshore fishing boat HCB 39,HCB 39 Speciale specs, Customizable HCB 39,HCB Yachts 39 Speciale price, HCB 42 Siesta for sale, HCB 42 Siesta walkthrough, HCB 42 Siesta offshore boat, Luxury sport fishing yacht HCB 42,HCB 42 Siesta price, HCB 42 Siesta performance, High-performance center console HCB 42,HCB 42 Siesta review, HCB 53 Sueños for sale, HCB 53 Sueños walkthrough, Largest luxury center console HCB 53,HCB 53 Sueños specs, HCB 53 Sueños review, HCB 53 Sueños offshore fishing, HCB 53 Sueños price, High-performance HCB 53 Sueños, HCB 65 Estrella for sale, HCB 65 Estrella walkthrough, HCB 65 Estrella yacht review, World’s largest center console HCB 65,HCB 65 Estrella specs, HCB 65 Estrella luxury yacht, HCB 65 Estrella price, Ultimate offshore HCB 65 Estrella, HCB 48 Lujo for sale, HCB 48 Lujo walkthrough, HCB 48 Lujo center console, HCB 48 Lujo price, HCB 48 Lujo performance, HCB 48 Lujo specs, High-performance center console HCB 48,HCB 48 Lujo luxury yacht, Best HCB Yachts dealer in the world, 65 Estrella World’s largest HCB dealer , HCB Dealer  "
        />
        <meta
          name="keywords"
          content="yachts for sale, Luxury yachts for sale, High-performance yachts, Yachts for sale in Fort Lauderdale, Yachts for sale in Miami, Yachts for sale in Bahamas, Exclusive yacht listings, Pre-owned luxury yachts, Custom yachts for sale, Sportfishing yachts, Center console yachts for sale, Mega yachts for sale, Motor yachts for sale, Premium yachts for sale, Luxury center-console boats, Superyachts for sale, Yacht sales and brokerage, New yachts for sale, Luxury yacht dealers, Private yacht sales, Yacht listings online, Luxury boats for sale, Buy a luxury yacht, Luxury yacht brokers, Charter yachts for sale, High-end boats for sale, Yachts for sale in Stuart, Yachts for sale in Naples, Yachts for sale in Florida, New yachts for sale, Used yachts for sale, Buy new yachts, Buy used yachts, Pre-owned yachts for sale, Affordable yachts for sale, Luxury used yachts for sale, New and used yachts listings, New and secondhand yachts,  Yacht dealerships new and used ,New motor yachts for sale,  Used motor yachts for sale,  New sailboats for sale, Used sailboats for sale, New center console yachts for sale, Used center console yachts for sale, New luxury yachts for sale, Used luxury yachts for sale, New sportfishing yachts for sale,  Used sportfishing yachts for sale , New yachts for sale in Fort Lauderdale, Used yachts for sale in Fort Lauderdale,  Best deals on new yachts in Fort Lauderdale,  Certified pre-owned yachts in Fort Lauderdale,  Used and new yachts in Bahamas, Florida"
        />
        <meta
          name="keywords"
          content="Sail Boats for Sale, Luxury Sail Boats, Performance Sail Boats, Sailing Yachts, Used Sail Boats, Sailing Catamarans, Ocean Cruising Sail Boats, Racing Sail Boats, Bluewater Sailboats, Sail Boats Dealers, Small Sail Boats, Offshore Sail Boats, Modern Sail Boats, Classic Sail Boats, Affordable Sail Boats, Motor Yachts for Sale, Luxury Motor Yachts, High-Performance Motor Yachts, Used Motor Yachts, Motor Yachts with Flybridge, Superyachts, Long-Range Motor Yachts, Custom Motor Yachts, Modern Motor Yachts, Affordable Motor Yachts, Motor Yacht Brokers, Motor Yachts for Charter, Classic Motor Yachts, Mega Motor Yachts,  Motor Yacht Dealers"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Yachts & Sail Boats for Sale | MegaSails"
        />
        <meta
          property="og:description"
          content="MegaSails specializes in new and used yacht brokerage. We list center consoles, superyachts, motor yachts, catamarans, sailboats, and more using MLS"
        />
        <meta property="og:url" content="https://www.megasails.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://megasails.s3.us-east-2.amazonaws.com/homepage-image-Megasails.webp"
        />
        <meta property="og:site_name" content="MegaSails" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <Navbar />
      <Popup />
      <div>
        {/* HCB Content  */}
        <HomeHCB />
        {/* IKON Content  */}
        {/* <HomeIKON /> */}
      </div>

      <div className="container-fluid col-lg-11 pt-5 text-center">
        <header>
          <h3 className="text-dark fw-bold ">
            Welcome to Megasails - Premier Yacht Broker
          </h3>
        </header>
        <main>
          <section>
            <h6 style={{ textAlign: "justify" }}>
              At Megasails, we set the standard in maritime excellence,
              redefining yachting across South Florida, including Naples, Miami,
              Fort Lauderdale, Palm Beach, Stuart, the Bahamas, and beyond. As a
              leading yacht brokerage, we specialize in providing smooth and
              seamless experiences for buying and selling boats, motor yachts,
              cruising vessels, and center-consoles. Our comprehensive services
              include expert yacht{" "}
              <a href="/services" target="_blank" rel="noopener noreferrer">
                Brokerage
              </a>
              , tailored{" "}
              <a href="/services" target="_blank" rel="noopener noreferrer">
                Financing
              </a>{" "}
              solutions, comprehensive{" "}
              <a href="/services" target="_blank" rel="noopener noreferrer">
                Insurance
              </a>{" "}
              options, secure yacht{" "}
              <a href="/services" target="_blank" rel="noopener noreferrer">
                Storage
              </a>{" "}
              facilities, reliable yacht{" "}
              <a href="/services" target="_blank" rel="noopener noreferrer">
                Transportation
              </a>{" "}
              , luxury yacht{" "}
              <a href="/services" target="_blank" rel="noopener noreferrer">
                Charters
              </a>{" "}
              , and hassle-free{" "}
              <a href="/services" target="_blank" rel="noopener noreferrer">
                Trade-In
              </a>{" "}
              options for upgrading your yacht.
            </h6>
          </section>
          <section>
            <h6 style={{ textAlign: "justify" }}>
              In honor of the original Hydra-Sports bass boats that have graced
              the waters for nearly half a century,{" "}
              <a href="/hcb" target="_blank" rel="noopener noreferrer">
                HCB
              </a>{" "}
              Yachts proudly presents the new{" "}
              <a href="/ikon" target="_blank" rel="noopener noreferrer">
                IKON{" "}
              </a>
              boat brand. Explore the latest innovations with the iKon{" "}
              <a href="/ikon" target="_blank" rel="noopener noreferrer">
                LX21
              </a>{" "}
              and{" "}
              <a href="/ikon" target="_blank" rel="noopener noreferrer">
                LX20
              </a>{" "}
              editions, embodying cutting-edge design and performance.
              Additionally, experience the thrill of{" "}
              <a href="/awake" target="_blank" rel="noopener noreferrer">
                Awake
              </a>{" "}
              Electric Surfboards, pushing the boundaries of water sports with
              advanced electric propulsion technology.
            </h6>
          </section>
        </main>
      </div>

      {/* <div className="container-fluid col-lg-11 pt-5 text-center">
        <InstagramVideos />
      </div> */}

      <section>
        <Container fluid className="col-lg-11 py-4">
          <Row className="g-0">
            <Col xs={12} md={4}>
              <div className="effect-1">
                <div className="effect-img">
                  <img
                    src="https://ikonboats.com/wp-content/uploads/2023/03/iKon-X-Hydra-sports-V2-scaled.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div className="effect-text">
                  <Link to={`/ikon`} className="text-white fs-5">
                    <h2>FISHING BOATS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="effect-1">
                <div className="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/75/56/8617556_20231114143456262_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div className="effect-text">
                  <Link
                    to={`/yachts-for-sale?className=Catamaran`}
                    className="text-white fs-5"
                  >
                    <h2>CATAMARANS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="effect-1">
                <div className="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/4/52/9090452_20231116171616857_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div className="effect-text">
                  <Link
                    to={`/yachts-for-sale?make=HCB`}
                    className="text-white fs-5"
                  >
                    <h2>HCB YACHTS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="effect-1">
                <div className="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/40/72/9134072_20231130084733155_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div className="effect-text">
                  <Link
                    to={`/yachts-for-sale?className=Center Consoles`}
                    className="text-white fs-5"
                  >
                    <h2>CENTER CONSOLE</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="effect-1">
                <div className="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/81/99/9018199_950373073_0_280820230947_0.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div className="effect-text">
                  <Link
                    to={`/yachts-for-sale?className=Motor Yachts`}
                    className="text-white fs-5"
                  >
                    <h2>MOTOR YACHTS</h2>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="effect-1">
                <div className="effect-img">
                  <img
                    src="https://images.boatsgroup.com/images/1/7/33/8660733_20230120054239615_1_XLARGE.jpg"
                    alt="group"
                    height={"260px"}
                  />
                </div>
                <div className="effect-text">
                  <Link
                    to={`/yachts-for-sale?make=Sailfish`}
                    className="text-white fs-5"
                  >
                    <h2>SAILFISH</h2>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <EventsFeed />
      </section>
      <section>
        {/* <InstagramLogin /> */}
        <InstagramFeed token={accessToken} limit={limit} />
      </section>

      <section className="container-fluid col-lg-11 py-5">
        <div className="col-lg-12 hr-line">
          <div className="d-flex justify-content-start">
            <h5 className="text-dark fw-bold ">Our Yacht Services</h5>
          </div>
        </div>
        <div className="row mt-3 g-2">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="border rounded-3 p-3">
              <h5 className="text-primary-emphasis fw-bold">
                <i className="fas fa-handshake"></i> Brokerage
              </h5>
              <p className="mb-1">
                With Megasails: Experience Your premier yacht brokerage for
                seamless buying and selling.
              </p>
              <button type="button" className="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="border rounded-3 p-3">
              <h5 className="text-primary-emphasis fw-bold">
                <i className="fas fa-money-bill"></i> Financing
              </h5>
              <p className="mb-1">
                Megasails secures flexible yacht financing through premier
                financial partnerships for you.
              </p>
              <button type="button" className="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="border rounded-3 p-3">
              <h5 className="text-primary-emphasis fw-bold">
                <i className="fas fa-shield-alt"></i> Insurance
              </h5>
              <p className="mb-1">
                Insure your yacht seamlessly with tailored marine insurance from
                Megasails Broker service.
              </p>
              <button type="button" className="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="border rounded-3 p-3">
              <h5 className="text-primary-emphasis fw-bold">
                <i className="fas fa-truck"></i> Transportation
              </h5>
              <p className="mb-1">
                We offers expert Yacht Transportation: land or water, your
                choice.
              </p>
              <button type="button" className="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="border rounded-3 p-3">
              <h5 className="text-primary-emphasis fw-bold">
                <i className="fas fa-wind"></i> Hurricane Storage
              </h5>
              <p className="mb-1">
                Secure yacht hurricane storage available at Megasails. Reserve
                your space!
              </p>
              <button type="button" className="btn custom-contact-btn btn-sm">
                <Link to={`/services`} className=" text-white fw-bold">
                  View More{"  "}
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="border rounded-3 p-3">
              <h5 className="text-primary-emphasis fw-bold">
                <i className="fas fa-exchange-alt"></i> Trade-In
              </h5>
              <p className="mb-1">
                We Offer effortless yacht upgrade: trade-in your boat for a
                better vessel.
              </p>
              <button type="button" className="btn custom-contact-btn btn-sm">
                <Link to={`/services#trade-in`} className=" text-white fw-bold">
                  View More{"  "}
                  <i className="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
