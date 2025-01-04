import "./Home.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Express_URL from "../Components/Express_URL";
import { Adsense } from "@ctrl/react-adsense";

const HomeHCB = () => {
  const [yachts, setYachts] = useState([]);
  const make = "HCB";
  const condition = "New";
  const fetchData = (start, rows) => {
    let apiUrl = `${Express_URL}/documents/?start=${start}&rows=${rows}&make=${make}&condition=${condition}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const yachtsArray = data.data.results;
        setYachts(yachtsArray);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData(0, 8);
  }, [make]);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="mob-banner d-md-none mb-4">
        <iframe
          src="https://player.vimeo.com/video/991705418?background=1"
          style={{
            position: "absolute",
            top: " 50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "177.77777778vh",
            height: "56.25vw",
            boxSizing: "border-box",
            minHeight: "100%",
            minWidth: "100%",
          }}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen=""
          data-ready="true"
          title="hcb-video"
        ></iframe>
        <div className="mob-banner-text container-fluid col-lg-11">
          <div>
            <Row className="g-2 mb-2 d-flex justify-content-center">
              <Col
                xs={6}
                md={4}
                lg={2}
                className="btn btn-light "
                type="button"
              >
                <Link
                  to={`/hcb`}
                  className="text-dark fs-5"
                  onClick={handleClick}
                >
                  Explore Models
                </Link>
              </Col>

              <Col xs={6} md={4} lg={2} className="btn btn-dark" type="button">
                <Link
                  to={`/yachts-for-sale?make=HCB`}
                  className="text-white fs-5"
                  onClick={handleClick}
                >
                  View Inventory
                </Link>
              </Col>
            </Row>
          </div>
          <p className="mb-0 fs-5 fw-bold">
            Performance. Luxury. Comfort. Athleticism.
          </p>
        </div>
      </div>

      <div className="banner d-none d-md-block">
        <div className="banner-content">
          <iframe
            src="https://player.vimeo.com/video/991705418?background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="hcb-video"
          ></iframe>
          <div className="banner-text">
            <h5 className="text-center fw-bold text-white">
              Performance. Luxury. Comfort. Athleticism.
            </h5>
            <div className="text-center row">
              <div className="col-6 text-end">
                <Link
                  to={`/hcb`}
                  className="btn btn-light me-2"
                  onClick={handleClick}
                >
                  Explore Models
                </Link>
              </div>
              <div className="col-6 text-start">
                <Link
                  to={`/yachts-for-sale?make=HCB`}
                  className="btn btn-dark"
                  onClick={handleClick}
                >
                  View Inventory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Container fluid className="col-lg-11 pt-md-4 pt-sm-4">
          <h5 className="text-dark fw-bold mb-4">
            Explore Featured HCB Collection
          </h5>
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
                            slot="6437384363"
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
            // <Alert variant="warning">No yachts found.</Alert>
            <div className="text-center">
              <Spinner animation="border" variant="warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
        </Container>
      </div>
      <Container fluid className="col-lg-11">
        <Link to={`/yachts-for-sale?make=HCB`} className=" text-white fs-5">
          <div className="mt-3 p-3 text-center text-white gradient-c1">
            <span>
              View Our Wide Collection Of New and Used HCB Yachts
              <i className="fa-solid fa-angles-right"></i>
            </span>
          </div>
        </Link>
      </Container>
    </>
  );
};

export default HomeHCB;
