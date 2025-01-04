import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import NavBar from "../Components/Navbar";
import SimilarYacht from "../Components/SimilarYacht";
import YachtDetailsContact from "../Components/YachtDetailsContact";
import Express_URL from "../Components/Express_URL";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Img_URL4 } from "../Components/Ads_URL";
import { Helmet } from "react-helmet";
const YachtDetails = () => {
  const { id } = useParams();
  const contactRef = useRef(null);
  const [fullScreenView, setFullScreenView] = useState(false);
  const [embeddedVideoPresent, setEmbeddedVideoPresent] = useState(false);
  // Fetch details based on the document ID (id)
  const [yachts, setYachts] = useState([]);

  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  // Function to filter YouTube videos
  const getYouTubeVideos = (videoUrls) => {
    return videoUrls.filter(
      (url) => url.includes("youtube.com") || url.includes("youtu.be")
    );
  };
  // console.log(yachts);
  const fetchData = () => {
    let apiUrl = `${Express_URL}/documents/?DocumentID=${id}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const yachtsArray = data.data.results;
        setYachts(yachtsArray);
        if (yachtsArray.length > 0) {
          setEmbeddedVideoPresent(yachtsArray[0].EmbeddedVideoPresent);
        }
        // Extract and filter YouTube videos
        const videoUrls = yachtsArray[0]?.EmbeddedVideo || [];
        const filteredVideos = getYouTubeVideos(videoUrls);
        setYoutubeVideos(filteredVideos);

        // Log the YouTube video links to the console
        //console.log("YouTube Video Links:", filteredVideos);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData(0, 24);
  });

  const openFullScreenView = () => {
    setFullScreenView(true);
  };

  const closeFullScreenView = () => {
    setFullScreenView(false);
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      const yOffset = -100; // Adjust this value based on your fixed header height or desired offset
      const y =
        contactRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const openVideoModal = (videoUrl) => {
    // Extract video ID from URL
    const videoId = videoUrl
      .split("|")[0]
      .split(/v=|youtu.be\//)[1]
      .split(/&|$/)[0];
    setSelectedVideoId(videoId);
    setShowVideo(true);
  };

  const closeVideoModal = () => {
    setShowVideo(false);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div style={{ minHeight: "800px" }}>
      <Helmet>
        <title>Yacht Details | Megasails</title>
        <meta
          name="description"
          content="Explore premium yachts at American Yacht Group with detailed specs, high-quality images, and unique features. Our expert team helps you make informed decisions."
        />
        <meta
          name="keywords"
          content="yacht details, American Yacht Group, premium yachts, yacht specifications, high-quality images, unique features, yacht listings, expert assistance, luxury yachts, yacht information, yacht sales, high-performance yachts, center console yachts, marine luxury, yacht features, yacht pricing, luxury boating, yacht brokers, detailed yacht information, yacht buying guide, exclusive yachts, top yacht listings, yacht marketplace, luxury marine equipment"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Yacht Details | American Yacht Group"
        />
        <meta
          property="og:description"
          content="Explore premium yachts at American Yacht Group with detailed specs, high-quality images, and unique features. Our expert team helps you make informed decisions."
        />
        <meta
          property="og:url"
          content="https://www.americanyachtgroup.com/yachts-for-sale"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ayg.s3.us-east-2.amazonaws.com/39+Photo.jpg"
        />
        <meta property="og:site_name" content="American Yacht Group" />
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
      <NavBar />
      {/* <Img /> */}
      {yachts.map((yacht) => (
        <div key={yacht.DocumentID}>
          {/* Displaying images and first data */}
          <section
            style={{ backgroundColor: "#eeeeee" }}
            className="py-4 details-banner"
          >
            <Container fluid className="col-lg-11">
              <Row>
                <Col xs={12} lg={7} className="pb-3">
                  <div className="d-flex flex-row">
                    <div>
                      <h1
                        className="mb-1 hero-h fw-bold"
                        style={{ fontFamily: "Roboto", fontSize: "26px" }}
                      >
                        {yacht.ModelYear} {yacht.MakeString} {yacht.Model}
                      </h1>
                    </div>
                  </div>
                  <div className="d-flex flex-row flex-wrap">
                    <div>
                      <p className="fs-5 fw-bold mb-1 text-nowrap">
                        <i
                          class="fa-solid fa-location-dot "
                          style={{ color: "#F38D2D" }}
                        ></i>{" "}
                        {yacht.BoatLocation.BoatCityName},{" "}
                        {yacht.BoatLocation.BoatStateCode},{" "}
                        {yacht.BoatLocation.BoatCountryID} &nbsp;&nbsp;&nbsp;
                      </p>
                    </div>

                    <div>
                      <p className="fs-5 fw-bold mb-1 text-nowrap">
                        <span
                          className="fw-bold fs-5 p-0 m-0"
                          style={{ color: "#F38D2D" }}
                        >
                          $
                        </span>{" "}
                        {yacht.Price ? `${yacht.Price}` : "Call For Price"}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={5} className="pb-3">
                  <div className="d-flex align-items-center flex-row">
                    <button
                      type="button"
                      className="btn btn-sm text-white gradient-c1 me-2"
                      onClick={() => {
                        // console.log("Button clicked!");
                        const modal = document.getElementById("exampleModal");
                        modal.classList.add("show");
                        modal.style.display = "block";
                      }}
                    >
                      <i className="fa-solid fa-image"></i> Images
                    </button>
                    <div
                      className="modal"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content bg-dark text-white ">
                          <div className="modal-header d-flex justify-content-center border-0">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              {yacht.ModelYear} {yacht.MakeString} {yacht.Model}
                            </h1>
                            <button
                              type="button"
                              className="btn-close bg-white me-3"
                              onClick={() => {
                                const modal = document.getElementById(
                                  "exampleModal"
                                );
                                modal.classList.remove("show");
                                modal.style.display = "none";
                              }}
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body d-flex justify-content-center align-items-center">
                            <Swiper
                              spaceBetween={10}
                              slidesPerView={1}
                              pagination={{
                                type: "fraction",
                              }}
                              navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                              }}
                              modules={[Navigation, Pagination]}
                              className="mySwiper details-popup1"
                            >
                              {yachts[0].Images.map((image, index) => (
                                <SwiperSlide
                                  key={index}
                                  className="text-center"
                                >
                                  <img
                                    src={image.Uri}
                                    alt={"..."}
                                    className="detailed-swiper-popup1"
                                  />
                                </SwiperSlide>
                              ))}
                              <div
                                className="swiper-button-next fw-bold px-3"
                                style={{ color: "#E4A11B" }}
                              ></div>
                              <div
                                className="swiper-button-prev fw-bold px-2"
                                style={{ color: "#E4A11B" }}
                              ></div>
                              <div
                                className="swiper-pagination  fw-bold text-warning"
                                style={{ color: "#E4A11B" }}
                              ></div>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                    {youtubeVideos.length > 0 && (
                      <button
                        type="button"
                        className="btn btn-sm text-white gradient-c1 me-2"
                        onClick={() => openVideoModal(youtubeVideos[0])}
                      >
                        <i className="fa-solid fa-video"></i> Videos
                      </button>
                    )}
                    <button
                      type="button"
                      className="btn btn-sm text-white gradient-c1 me-2"
                      onClick={scrollToContact}
                    >
                      <i className="fa-solid fa-user"></i> Contact Us
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
            <Modal
              open={showVideo}
              fullscreen={true}
              onClose={closeVideoModal}
              modal={true}
            >
              {selectedVideoId && (
                <div className="video-box">
                  <p>
                    {" "}
                    {yacht.ModelYear} {yacht.MakeString} {yacht.Model}
                  </p>
                  <div className="ratio ratio-4x3">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideoId}?rel=0`}
                      title="YouTube video"
                      allowFullScreen
                      style={{ display: "block" }}
                      className=""
                    ></iframe>
                  </div>
                </div>
              )}
            </Modal>
            <Container fluid>
              <Row>
                <Col xs={12} lg={12}>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                  >
                    {yacht.Images.map((image, index) => (
                      <SwiperSlide
                        className="detailed-swiper-slide"
                        key={index}
                      >
                        <img src={image.Uri} alt={"..."} />
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
                </Col>
              </Row>
            </Container>
          </section>

          {/* Displaying spec and contact */}
          <section className="my-4">
            <Container fluid className="col-lg-11">
              <Row className="spec">
                <Col xs={12} lg={6}>
                  <h4 className="fw-bold text-primary-emphasis">
                    Specification Overview
                  </h4>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <ul>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Year :{" "}
                          </span>
                          {yacht.ModelYear}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Make :{" "}
                          </span>
                          {yacht.MakeString}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            LOA :{" "}
                          </span>
                          {yacht.LengthOverall}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Model :{" "}
                          </span>
                          {yacht.Model}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Name :{" "}
                          </span>
                          {yacht.BoatName}
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <ul>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Condition :{" "}
                          </span>
                          {yacht.SaleClassCode}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Price :{" "}
                          </span>
                          {yacht.Price ? `$${yacht.Price}` : "Call For Price"}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Engines :{" "}
                          </span>
                          {yacht.NumberOfEngines}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            HP :{" "}
                          </span>
                          {yacht.TotalEnginePowerQuantity}
                        </li>
                        <li>
                          <span class="text-primary-emphasis fs-5 fw-bold">
                            Location :{" "}
                          </span>
                          {yacht.BoatLocation.BoatCityName},{" "}
                          {yacht.BoatLocation.BoatStateCode},{" "}
                          {yacht.BoatLocation.BoatCountryID}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col xs={12} lg={6} ref={contactRef}>
                  <h4
                    className="fw-bold text-primary-emphasis"
                    ref={contactRef}
                  >
                    {" "}
                    Contact Us
                    {/* <div class=" d-none d-md-block d-lg-block">
                      Contact Info -<i class="fa-solid fa-phone"></i> ( 954 )
                      802-7474
                    </div>
                    <div class=" d-md-none d-lg-none">
                      <a
                        href="tel:954-802-7474"
                        className="text-primary-emphasis"
                      >
                        Contact Info -<i class="fa-solid fa-phone"></i> ( 954 )
                        802-7474
                      </a>
                    </div> */}
                  </h4>
                  <hr />
                  <YachtDetailsContact yachtId={yacht.DocumentID} />
                </Col>
              </Row>
            </Container>
          </section>

          {/* Displaying Description */}
          <section className="my-4">
            <Container fluid className="col-lg-11">
              <h4 className="fw-bold text-primary-emphasis">
                General Description
              </h4>
              <hr />
              <Row className="border-bottom border-1">
                <Col xs={12} md={12} lg={8}>
                  <div className="Featured-scroll-container">
                    {/* Rendering HTML content */}
                    <div
                      className="boat-description"
                      dangerouslySetInnerHTML={{
                        __html: yacht.GeneralBoatDescription,
                      }}
                    />
                    {/* <hr /> */}
                    <div
                      className="boat-description"
                      dangerouslySetInnerHTML={{
                        __html: yacht.AdditionalDetailDescription,
                      }}
                    />
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={12}
                  lg={4}
                  style={{ backgroundColor: "#eeeeee" }}
                  className="py-5"
                >
                  <div className="text-center">
                    {/* Mobile: Display Image 1 */}
                    <Row className="d-md-none">
                      <Col>
                        <img
                          src="https://ayg.s3.us-east-2.amazonaws.com/ad2.gif"
                          alt="Mobile"
                          className="img-fluid"
                        />
                      </Col>
                    </Row>

                    {/* Tablet: Display Image 2 */}
                    <Row className="d-none d-md-flex d-lg-none">
                      <Col>
                        <img
                          src="https://ayg.s3.us-east-2.amazonaws.com/ad2.gif"
                          alt="Tablet"
                          className="img-fluid"
                        />
                      </Col>
                    </Row>

                    {/* Desktop: Display Image 3 */}
                    <Row className="d-none d-lg-flex">
                      <Col>
                        <img
                          src={Img_URL4}
                          alt="Desktop"
                          style={{ height: "600px" }}
                          className="img-fluid"
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          {/*Disclaimer */}
          <section className="my-5">
            <Container fluid className="col-lg-11">
              <h4 className="fw-bold text-primary-emphasis">Disclaimer</h4>
              <hr />
              <p className="">
                The Company offers the details of this vessel in good faith but
                cannot guarantee or warrant the accuracy of this information nor
                warrant the condition of the vessel. A buyer should instruct his
                agents, or his surveyors, to investigate such details as the
                buyer desires validated. This vessel is offered subject to prior
                sale, price change, or withdrawal without notice.
              </p>
            </Container>
          </section>

          {/*Similar Yachts For Sale */}
          <section className="my-4">
            <Container fluid className="col-lg-11">
              <h4 className="fw-bold text-primary-emphasis">
                Similar Yachts For Sale
              </h4>
              <hr />
              <SimilarYacht />
            </Container>
          </section>
        </div>
      ))}
    </div>
  );
};

export default YachtDetails;
