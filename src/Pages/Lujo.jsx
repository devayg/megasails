import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Express_URL from "../Components/Express_URL";
import { Adsense } from "@ctrl/react-adsense";
import Navbar from "../Components/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Helmet } from "react-helmet";

const Lujo = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const [yachts, setYachts] = useState([]);
  const make = "HCB";
  const condition = "All";
  const minLength = "40";
  const maxLength = "43";
  const fetchData = (start, rows) => {
    let conditionParam = condition;
    // If 'All' is selected, include both 'New' and 'Used'
    if (condition === "All") {
      conditionParam = "New,Used";
    }

    let apiUrl = `${Express_URL}/documents/?{start}&rows=${rows}&make=${make}&condition=${conditionParam}&length=${minLength}:${maxLength}|feet`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const yachtsArray = data.data.results;
        setYachts(yachtsArray);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData(0, 5);
  }, [make]);
  return (
    <div style={{ backgroundColor: "#ebf0f7" }}>
      |
      <Helmet>
        <title>HCB 42 Lujo Yachts for Sale - MegaSails</title>
        <meta
          name="description"
          content="The 42’ Lujo offers powerful, sophisticated offshore performance with industry-leading helm, Sueños-inspired seating, and numerous topside features for extended runs."
        />
        <meta
          name="keywords"
          content="42 Lujo, 42 HCB, 42 Lujo HCB ,HCB 42 , HCB 42 Lujo ,Lujo 42 HCB, Megasails, center console yacht, luxury yacht, offshore performance, smooth ride, Sueños seating, helm station, topside features, bow, cockpit, increased fuel capacity, high-performance yachts, premium center console, luxury boating, advanced helm, offshore adventures, extended runs, yacht features, performance yachts, yacht comfort, stylish center console, luxury marine equipment, yacht seating options, premium offshore yacht"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="HCB 42 Lujo Yachts for Sale" />
        <meta
          property="og:description"
          content="The 42’ Lujo offers powerful, sophisticated offshore performance with industry-leading helm, Sueños-inspired seating, and numerous topside features for extended runs."
        />
        <meta property="og:url" content="https://www.megasails.com/42-lujo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://megasails.s3.us-east-2.amazonaws.com/HCB+42+Lujo-Megasails.jpg"
        />
        <meta property="og:site_name" content="MegaSails" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      {/* #f4f4f4 */}
      <Navbar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>
      <div>
        <img
          src="https://ayg.s3.us-east-2.amazonaws.com/42+Photo.jpg"
          alt="lujo"
          className="img-fluid"
          style={{
            maxHeight: "600px",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <Container fluid className="col-lg-11 py-5">
          <div className="text-center">
            <h4 className="mb-3 fw-bold">42 LUJO</h4>
            <hr />
          </div>
          <Row className="g-4">
            <Col lg={6} className="d-flex flex-column justify-content-center ">
              <img
                src="https://hcbyachts.com/wp-content/uploads/2022/02/2-2-1.jpg"
                alt="lujo"
                className="img-fluid"
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <div className="row">
                <div className="col-6">
                  <h6 className="text-primary-emphasis fw-bold">Length</h6>
                  <p className="fw-bold">41' 7"</p>
                  <hr />
                </div>
                <div className="col-6">
                  <h6 className="text-primary-emphasis fw-bold">Beam</h6>
                  <p className="fw-bold">12' 2"</p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h6 className="text-primary-emphasis fw-bold">Weight</h6>
                  <p className="fw-bold">24,000 lbs</p>
                  <hr />
                </div>
                <div className="col-6">
                  <h6 className="text-primary-emphasis fw-bold">
                    Fuel Capacity
                  </h6>
                  <p className="fw-bold">614 Gallons</p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h6 className="text-primary-emphasis fw-bold">
                    Livewell Capacity
                  </h6>
                  <p className="fw-bold">2 @ 45 Gallons</p>
                  <hr />
                </div>
                <div className="col-6">
                  <h6 className="text-primary-emphasis fw-bold">
                    Freshwater Capacity
                  </h6>
                  <p className="fw-bold">40 Gallons</p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h6 className="text-primary-emphasis fw-bold">Engine</h6>
                  <p className="fw-bold">
                    Triple 600 Mercury, Quad 450 Mercury, or Triple 425 Yamaha,
                    Quad 425 Yamaha
                  </p>
                  <hr />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-4" style={{ backgroundColor: "white" }}>
        {/* #ebf0f7 */}
        <Container fluid className="col-lg-11  details-banner">
          <h5 className="fw-bold fs-4 lh-sm py-3">MEDIA GALLERY</h5>
          <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            {[
              "https://hcbyachts.com/wp-content/uploads/2022/02/1XdAF98E-1.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/1DX26222-2-1.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/1DX27413-1.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/NhUBSAwk-1.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/wgM4DKjw-1.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/1DX26491-2-1.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/1DX26377-1.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/1DX27414-1.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/1DX27413-1.jpg",
              "https://hcbyachts.com/wp-content/uploads/2021/12/siesta_new2.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2021/12/03-2018-HydraSport-1634.jpeg",
            ].map((imageSrc, index) => (
              <SwiperSlide key={index} className="detailed-swiper-slide">
                <img src={imageSrc} alt="lujo" />
              </SwiperSlide>
            ))}
            <div
              className="swiper-button-next"
              style={{ color: "#E4A11B" }}
            ></div>
            <div
              className="swiper-button-prev"
              style={{ color: "#E4A11B" }}
            ></div>
            <div
              className="swiper-pagination"
              style={{ backgroundColor: "#E4A11B" }}
            ></div>
          </Swiper>
        </Container>
      </div>
      <div className="py-4" style={{ backgroundColor: "white" }}>
        <Container fluid className="col-lg-11 py-4">
          <Row className="g-3">
            {/* <Col
              xs={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <img
                src="https://hcbyachts.com/wp-content/uploads/2023/05/39A4Z23456-scaled.jpg"
                alt=""
                className="img-fluid"
              />
            </Col> */}
            <Col
              xs={12}
              md={12}
              lg={12}
              className="d-flex flex-column justify-content-center "
            >
              <h4 className="fw-bold">EFFORTLESS CONFIDENCE</h4>
              <p className="fs-18px ">
                The 42’ Lujo seamlessly combines power and sophistication,
                delivering sustained offshore performance and a smooth ride.
                Redesigned for Sueños seating comfort, the helm station leads
                the industry. Countless topside features grace the bow and
                cockpit, with optional increased fuel capacity for extended
                runs. Three captains chairs provide the ultimate command center.
              </p>
              {/* <div>
                <button
                  className="btn custom-contact-btn fs-18px text-white"
                  type="submit"
                >
                  <i className="fa-solid fa-image"></i> Gallery
                </button>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <Container fluid className="col-lg-11 py-4">
          <h4 className="fw-bold py-3">42 LUJO INVENTORY</h4>
          <Row className="g-3">
            {yachts.map((yacht, index) => (
              <>
                <Col xs={12} md={6} lg={4}>
                  <Link to={`/yachtdetails/${yacht.DocumentID}`}>
                    <div
                      className="card border-0"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      }}
                    >
                      <img
                        // deepcode ignore DOMXSS: <please specify a reason of ignoring this>
                        src={yacht.Images[0].Uri}
                        className="card-img-top"
                        alt="..."
                        loading="lazy"
                        height={"260px"}
                      />
                      <div className="card-body p-2">
                        <div className="text-start">
                          <h5 className="fw-bold mb-1">
                            {yacht.MakeString}{" "}
                            <span className="text-dark">{yacht.Model}</span>
                          </h5>
                        </div>
                        <p className="text-dark mb-0 ">
                          {/* <i className="fa-solid fa-location-dot text-secondary"></i>{" "} */}
                          {yacht.ModelYear} | {yacht.BoatLocation.BoatCityName},{" "}
                          {yacht.BoatLocation.BoatStateCode},{" "}
                          {yacht.BoatLocation.BoatCountryID}
                        </p>
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="mb-0 fw-bold">
                              {yacht.Price
                                ? `${yacht.Price}`
                                : "$ Call For Price"}
                            </p>
                          </div>
                          <div className="text-dark fw-bold">
                            View Details{"  "}
                            <i className="fa-solid fa-angles-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
                {/* Display advertisement after the 3rd card */}
                {index === 2 && (
                  <>
                    <Col key="advertisement-3" xs={12} md={6} lg={4}>
                      <div
                        className="border-0 rounded-2 bg-white "
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                        }}
                      >
                        <small
                          className="text-start"
                          style={{ paddingLeft: "32px", fontSize: "12px" }}
                        >
                          Advertisement
                        </small>
                        <div
                          className="d-flex flex-column justify-content-center align-items-center"
                          style={{ height: "330px" }}
                        >
                          <Adsense
                            client="ca-pub-6409212221098617"
                            slot="4454213038"
                            style={{
                              width: 300,
                              height: 300,
                            }}
                            format=""
                          />
                        </div>
                      </div>
                    </Col>
                  </>
                )}
              </>
            ))}
          </Row>
          {yachts.length === 0 && (
            <Alert variant="warning">No yachts found.</Alert>
          )}
        </Container>
      </div>
      <div>
        <Container fluid>
          <h5 className="fw-bold fs-4 lh-sm py-3">EXPLORE OTHER HCB MODELS</h5>
          <Row className="g-3">
            <Col xs={12} md={6} lg={3}>
              <Link onClick={handleClick} to={`/39-speciale`}>
                <img
                  className="img-fluid"
                  src="https://hcbyachts.com/wp-content/uploads/2021/12/siesta3.jpeg"
                  alt="39"
                />
                <p className="fw-bold py-2 text-primary-emphasis">
                  39 SPECIALE
                </p>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Link onClick={handleClick} to={`/48-campeon`}>
                <img
                  className="img-fluid"
                  src="https://hcbyachts.com/wp-content/uploads/2022/02/s-QfSWeg.jpg"
                  alt="48"
                />
                <p className="fw-bold py-2 text-primary-emphasis">48 CAMPEON</p>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Link onClick={handleClick} to={`/53-suenos`}>
                <img
                  className="img-fluid"
                  src="https://hcbyachts.com/wp-content/uploads/2022/02/DJI_0075.jpg"
                  alt="53"
                />
                <p className="fw-bold py-2 text-primary-emphasis">53 SUENOS</p>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Link onClick={handleClick} to={`/65-estrella`}>
                <img
                  className="img-fluid"
                  src="https://hcbyachts.com/wp-content/uploads/2021/12/6500001-scaled-1.jpeg"
                  alt="65"
                />
                <p className="fw-bold py-2 text-primary-emphasis">
                  65 ESTRELLA
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Lujo;
