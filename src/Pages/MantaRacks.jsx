import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import NavBar from "../Components/Navbar";

const MantaRacks = () => {
  return (
    <>
      <div>
        <NavBar />
        <div
          style={{
            background:
              "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
            height: "75px",
          }}
        ></div>
        {/* hero */}
        <section style={{ position: "relative" }}>
          <div style={{ position: "relative" }}>
            <img
              src="https://www.mantaracks.com/wp-content/uploads/2023/01/New-Hero-TAKE-YOUR-BOARDS-KAYAKS-AND-GO-FURTHEw-scaled.jpg?id=9809"
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
              }}
              className="img-fluid"
            />
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "50px",
                transform: "translateX(-50%)",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                className="btn btn-light "
                style={{ marginRight: "10px" }}
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </section>

        <section className="container py-4">
          <div className="text-center">
            <h4 className="fw-bold">Experience Manta Racks with HCB yachts</h4>
            <p className="">
              Our innovative rack systems ensure your boards are securely stored
              and easily accessible, without the need for complicated
              installation. Enhance your yacht's functionality and keep your
              water sports gear neatly organized while maximizing onboard space
              for passengers to enjoy a clutter-free environment. Experience the
              ultimate in convenience and peace of mind with Manta Racks,
              tailored for your HCB yacht.
            </p>
          </div>
        </section>

        {/* Models  */}
        <section>
          <Row className="g-0">
            <Col xs={12} md={6}>
              <div style={{ position: "relative" }}>
                <img
                  src="https://www.mantaracks.com/wp-content/uploads/2022/01/Manta-Racks-S2-Sep-22-6-28-09-PM.jpeg"
                  alt=""
                  style={{
                    height: "500px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  className="img-fluid"
                />
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "30px",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h1 className="me-3 fw-bolder text-white">Rack Systems</h1>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div style={{ position: "relative" }}>
                <img
                  src="https://www.mantaracks.com/wp-content/uploads/2022/01/Costa-Kayak.jpg"
                  alt=""
                  style={{
                    height: "500px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  className="img-fluid"
                />
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "30px",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <h1 className="me-3 fw-bolder text-white">Accessories</h1>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section style={{ backgroundColor: "#f4f4f6" }}>
          <Container className="py-5">
            <Carousel fade interval={3000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.boatsgroup.com/images/1/44/82/2024-hcb-42-lujo-power-9424482-20240627101903309-1_XLARGE.jpg"
                  alt="slide"
                  style={{
                    height: "350px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.boatsgroup.com/images/1/44/82/2024-hcb-42-lujo-power-9424482-20240627101905788-1_XLARGE.jpg"
                  alt="slide"
                  style={{
                    height: "350px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.boatsgroup.com/images/1/44/82/2024-hcb-42-lujo-power-9424482-20240627101905788-1_XLARGE.jpg"
                  alt="slide"
                  style={{
                    height: "350px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>
          </Container>
        </section>
        {/* https://ayg.s3.us-east-2.amazonaws.com/42+Photo.jpg */}

        {/* Accessories  */}
        <section>
          <Container>
            <div className="text-center pt-4">
              <h4 className="fw-bold">Rack systems</h4>
            </div>
            <Row className="d-flex justify-content-center pb-4 ">
              <Col
                xs={12}
                md={2}
                className="text-center p-3 m-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                <img
                  src="https://www.mantaracks.com/wp-content/uploads/2016/04/s1-racks-gallery-3-300x300.webp"
                  alt=""
                  className="img-fluid"
                />
                <p className="mb-1">
                  <small className="fw-bold">
                    Manta Racks S1 – Paddleboard Storage Rack for Boats
                  </small>
                </p>
                <small>
                  <span className="fw-bold h6">$599.00</span>{" "}
                  <span style={{ fontSize: "10px" }}></span>
                </small>
                <div>
                  <button type="button" className="btn btn-dark btn-sm mt-1">
                    BUY NOW
                  </button>
                </div>
              </Col>
              <Col
                xs={12}
                md={2}
                className="text-center p-3 m-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                <img
                  src="https://www.mantaracks.com/wp-content/uploads/2022/01/Dual-Paddleboard-Rack-300x300.webp"
                  alt=""
                  className="img-fluid"
                />
                <p className="mb-1">
                  <small className="fw-bold">
                    Manta Racks S2 – Paddleboard Storage Rack for Boats
                  </small>
                </p>
                <small>
                  <span className="fw-bold h6">$899</span>{" "}
                  <span style={{ fontSize: "10px" }}></span>
                </small>
                <div>
                  <button type="button" className="btn btn-dark btn-sm mt-1">
                    BUY NOW
                  </button>
                </div>
              </Col>
              <Col
                xs={12}
                md={2}
                className="text-center p-3 m-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                <img
                  src="https://www.mantaracks.com/wp-content/uploads/2022/01/Kayak-Rack-300x300.webp"
                  alt=""
                  className="img-fluid"
                />
                <p className="mb-1">
                  <small className="fw-bold">
                    Manta Racks L2K – Kayak Storage Rack for Boats
                  </small>
                </p>
                <small>
                  <span className="fw-bold h6">$699</span>{" "}
                  <span style={{ fontSize: "10px" }}></span>
                </small>
                <div>
                  <button type="button" className="btn btn-dark btn-sm mt-1">
                    BUY NOW
                  </button>
                </div>
              </Col>
              <Col
                xs={12}
                md={2}
                className="text-center p-3 m-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                <img
                  src="https://www.mantaracks.com/wp-content/uploads/2022/01/Floating-Mat-Rack-300x300.webp"
                  alt=""
                  className="img-fluid"
                />
                <p className="mb-1">
                  <small className="fw-bold">
                    Manta Racks FM – Floating Mat Storage Rack For Boats
                  </small>
                </p>
                <small>
                  <span className="fw-bold h6">$599</span>{" "}
                  <span style={{ fontSize: "10px" }}></span>
                </small>
                <div>
                  <button type="button" className="btn btn-dark btn-sm mt-1">
                    BUY NOW
                  </button>
                </div>
              </Col>
              <Col
                xs={12}
                md={2}
                className="text-center p-3 m-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                <img
                  src="https://www.mantaracks.com/wp-content/uploads/2022/01/Wakeboard-Rack-300x300.webp"
                  alt=""
                  className="img-fluid"
                />
                <p className="mb-1">
                  <small className="fw-bold">
                    Manta Racks B2 – Wakeboard & Waterski Storage Rack for Boats
                  </small>
                </p>
                <small>
                  <span className="fw-bold h6">$539</span>{" "}
                  <span style={{ fontSize: "10px" }}></span>
                </small>
                <div>
                  <button type="button" className="btn btn-dark btn-sm mt-1">
                    BUY NOW
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default MantaRacks;
