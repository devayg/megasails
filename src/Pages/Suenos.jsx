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

const Suenos = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const [yachts, setYachts] = useState([]);
  const make = "HCB";
  const condition = "All";
  const minLength = "52";
  const maxLength = "54";
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
      <Helmet>
        <title>HCB 53 Sueños Yachts for Sale - MegaSails</title>
        <meta
          name="description"
          content="Discover Sueños: a luxurious, versatile center console yacht perfect for day trips and extended stays. Experience unmatched speed and comfort."
        />
        <meta
          name="keywords"
          content="53 Sueños, 53 HCB, HCB 53 Sueños, HCB 53 , 53 HCB Sueños , Sueños 53 HCB,Megasails, center console yacht, luxury yacht, speed, comfort, dual-purpose bow, air-conditioned cabin, day trips, extended stays, HCB Yachts, Quad Mercury engines, Seakeeper equipped, agility, versatility, luxury boating, marine technology, fishing amenities, overnight trips, custom painted hull, advanced navigation"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="HCB 53 Sueños Yachts for Sale" />
        <meta
          property="og:description"
          content="Discover Sueños: a luxurious, versatile center console yacht perfect for day trips and extended stays. Experience unmatched speed and comfort."
        />
        <meta property="og:url" content="https://www.megasails.com/53-suenos" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://megasails.s3.us-east-2.amazonaws.com/53+Sue%C3%B1os+-Megasails.jpg"
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
          src="https://ayg.s3.us-east-2.amazonaws.com/53.jpg"
          alt="suenos"
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
            <h4 className="mb-3 fw-bold">53 SUENOS</h4>
            <hr />
          </div>
          <Row className="g-4">
            <Col lg={6} className="d-flex flex-column justify-content-center ">
              <img
                src="https://hcbyachts.com/wp-content/uploads/2022/02/DJI_0016.jpg"
                alt=""
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
              <div class="row">
                <div class="col-6">
                  <h6 class="text-primary-emphasis fw-bold">Length</h6>
                  <p class="fw-bold">52' 11"</p>
                  <hr />
                </div>
                <div class="col-6">
                  <h6 class="text-primary-emphasis fw-bold">Beam</h6>
                  <p class="fw-bold">13' 0"</p>
                  <hr />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <h6 class="text-primary-emphasis fw-bold">Weight</h6>
                  <p class="fw-bold">33,000 lbs</p>
                  <hr />
                </div>
                <div class="col-6">
                  <h6 class="text-primary-emphasis fw-bold">Fuel Capacity</h6>
                  <p class="fw-bold">1000 Gallons</p>
                  <hr />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <h6 class="text-primary-emphasis fw-bold">
                    Livewell Capacity
                  </h6>
                  <p class="fw-bold">2 @ 60 Gallons</p>
                  <hr />
                </div>
                <div class="col-6">
                  <h6 class="text-primary-emphasis fw-bold">
                    Freshwater Capacity
                  </h6>
                  <p class="fw-bold">58 Gallons</p>
                  <hr />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <h6 class="text-primary-emphasis fw-bold">Engine</h6>
                  <p class="fw-bold">
                    Quint 450 Mercury, Quad 600 Mercury, or Quad 425 Yamaha
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
          <h5 class="fw-bold fs-4 lh-sm py-3">MEDIA GALLERY</h5>
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
              "https://hcbyachts.com/wp-content/uploads/2021/12/03-2018-HydraSport-1053.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2021/12/53-A1Z-19_Running-Shots29.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2021/12/DSC_3318-Edit-e1569004001129.jpeg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/DJI_0024.jpg",
              "https://hcbyachts.com/wp-content/uploads/2021/08/suenos.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/DSC_6133.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/1DX24443.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/sethdortch_20210322_0012.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/DSC_6154.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/sethdortch_20210322_0070.jpg",
              "https://hcbyachts.com/wp-content/uploads/2022/02/DSC_6140.jpg",
            ].map((imageSrc, index) => (
              <SwiperSlide key={index} className="detailed-swiper-slide">
                <img src={imageSrc} alt="suenos" />
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
              <h4 className="fw-bold">FOR THE UNCOMPROMISING</h4>
              <p className="fs-18px ">
                Experience the Sueños, a large center console yacht that
                flawlessly combines speed, ride, comfort, and luxury. Its
                dual-purpose bow area accommodates guests with a forward-facing
                lounger and convertible seats. The luxuriously functional cabin
                ensures air-conditioned comfort, making the Sueños perfect for
                both day trips and extended stays. Uncompromising in every way,
                it fulfills diverse experiences, venturing where few Center
                Console Yachts dare to dream.
              </p>
              {/* <div>
                <button
                  className="btn custom-contact-btn fs-18px text-white"
                  type="submit"
                >
                  <i class="fa-solid fa-image"></i> Gallery
                </button>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: "#f4f4f4" }}>
        <Container fluid className="col-lg-11 py-4">
          <h4 className="fw-bold py-3">53 SUENOS INVENTORY</h4>
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
                            slot="6699709798"
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
              <Link onClick={handleClick} to={`/42-lujo`}>
                <img
                  className="img-fluid"
                  src="https://hcbyachts.com/wp-content/uploads/2021/12/siesta3.jpeg"
                  alt="39"
                />
                <p className="fw-bold py-2 text-primary-emphasis">42 LUJO</p>
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
              <Link onClick={handleClick} to={`/39-speciale`}>
                <img
                  className="img-fluid"
                  src="https://hcbyachts.com/wp-content/uploads/2022/02/DJI_0075.jpg"
                  alt="53"
                />
                <p className="fw-bold py-2 text-primary-emphasis">
                  39 SPECIALE
                </p>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Link onClick={handleClick} to={`/65-estrella`}>
                <img
                  class="img-fluid"
                  src="https://hcbyachts.com/wp-content/uploads/2021/12/6500001-scaled-1.jpeg"
                  alt="65"
                />
                <p class="fw-bold py-2 text-primary-emphasis">65 ESTRELLA</p>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Suenos;
