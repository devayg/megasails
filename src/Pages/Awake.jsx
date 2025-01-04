import React from "react";
import NavBar from "../Components/Navbar";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Awake = () => {
  return (
    <div>
      {/* hero */}
      <section style={{ position: "relative" }}>
        <NavBar />
        <div
          style={{
            background:
              "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
            height: "75px",
          }}
        ></div>
        <div style={{ position: "relative" }}>
          <img
            src="https://awakeboards.com/cdn/shop/files/Home_page_banner-RV3_Price_change-Desktop_1.jpg?v=1709312322"
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
              bottom: "50px",
              transform: "translateX(-50%)",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button className="btn btn-light " style={{ marginRight: "10px" }}>
              ORDER NOW
            </button>
            <NavLink as={Link} to="/awake-jetboards" className="btn btn-light">
              EXPLORE NOW
            </NavLink>
          </div>
        </div>
      </section>

      {/* Text  */}
      <section className="container py-4">
        <div className="text-center">
          <h4 className="fw-bold">Awake Electric Surfboards</h4>
          <p className="">
            Awake's lineup of electric surfboards includes both the RÄVIK
            Jetboards and the VINGA eFoils. The RÄVIK Jetboards are designed for
            riders who want to surf on the water’s surface. The RÄVIK 3 makes it
            easy for beginners to adventure, while the RÄVIK S offers extreme
            performance for advanced riders. The Awake VINGA eFoils allow riders
            to fly above the water's surface. The VINGA 3 eFoil is crafted to
            ensure an easy and stable ride while the VINGA S model is the best
            choice for riders looking for peak control and maneuverability.
          </p>
        </div>
      </section>
      {/* Model gif 
      <section>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={4}>
              <img
                src="https://awakeboards.com/cdn/shop/files/Click_to_ride_2000px_1000x.gif?v=1691586067"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col md={4}>
              <img
                src="https://awakeboards.com/cdn/shop/products/Boardlandscapes_Rityta1.jpg?v=1615236357"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col md={4}>
              <img
                src="https://awakeboards.com/cdn/shop/files/Flex_Battery_gif_2000px_3_1500x.gif?v=1691590343"
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Models  */}
      <section>
        <Row className="g-0">
          <Col xs={12} md={6}>
            <div style={{ position: "relative" }}>
              <img
                src="https://awakeboards.com/cdn/shop/files/Awake_electric_surfboards-RAVIK_S_Yacht_jump-1x1-2.jpg?v=1710260097"
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
                  left: "40%",
                  bottom: "30px",
                  transform: "translateX(-50%)",
                  display: "flex",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <div>
                  <h1 className="me-3 fw-bolder text-white">Awake Jetboards</h1>

                  <NavLink
                    as={Link}
                    to="/awake-jetboards"
                    className="btn btn-light btn-sm"
                  >
                    EXPLORE NOW
                  </NavLink>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ position: "relative" }}>
              <img
                src="https://awakeboards.com/cdn/shop/files/Awake_efoil-VINGA_3-Thailand-1x1-1_2e79b9a5-bb0f-4372-a3db-78930044e642.jpg?v=1709234500"
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
                  left: "40%",
                  bottom: "30px",
                  transform: "translateX(-50%)",
                  display: "flex",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <div>
                  <h1 className="me-3 fw-bolder text-white">Awake eFoils</h1>
                  <NavLink
                    as={Link}
                    to="/awake-efoils"
                    className="btn btn-light btn-sm"
                  >
                    EXPLORE NOW
                  </NavLink>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* HCB Attachments  */}
      <section style={{ backgroundColor: "#f4f4f6" }}>
        <Container className="py-5">
          <Carousel fade interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://awakeboards.com/cdn/shop/files/Awake_Electric_surfboards_Awake_Efoils_Yacht_toys_2.jpg?v=1697637708"
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
                src="https://ayg.s3.us-east-2.amazonaws.com/42+Photo.jpg"
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
                src="https://hcbyachts.com/wp-content/uploads/2021/12/53-A1Z-19_Running-Shots29.jpeg"
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
            <h4 className="fw-bold">Accessories</h4>
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
                src="https://awakeboards.com/cdn/shop/products/Wallmountfront.jpg?v=1615212329"
                alt=""
                className="img-fluid"
              />
              <p className="mb-1">
                <small className="fw-bold">Awake RÄVIK Wall Mount</small>
              </p>
              <small>
                <span className="fw-bold h6">€900</span>{" "}
                <span style={{ fontSize: "10px" }}>ex.</span>VAT
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
                src="https://awakeboards.com/cdn/shop/products/ChargerisoEU_600x.jpg?v=1615211382"
                alt=""
                className="img-fluid"
              />
              <p className="mb-1">
                <small className="fw-bold">Awake Flex Battery Charger</small>
              </p>
              <small>
                <span className="fw-bold h6">€900</span>{" "}
                <span style={{ fontSize: "10px" }}>ex.</span>VAT
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
                src="https://awakeboards.com/cdn/shop/products/Awake_Hand_controller_303cff2f-de6c-4298-a457-48500dfafcb0.jpg?v=1667315376"
                alt=""
                className="img-fluid"
              />
              <p className="mb-1">
                <small className="fw-bold">Awake Flex Hand Controller</small>
              </p>
              <small>
                <span className="fw-bold h6">€590</span>{" "}
                <span style={{ fontSize: "10px" }}>ex.</span>VAT
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
                src="https://awakeboards.com/cdn/shop/products/Boardbagopenwithboard_600x.jpg?v=1665496686"
                alt=""
                className="img-fluid"
              />
              <p className="mb-1">
                <small className="fw-bold">Awake VINGA Board Bag Kit</small>
              </p>
              <small>
                <span className="fw-bold h6">€590</span>{" "}
                <span style={{ fontSize: "10px" }}>ex.</span>VAT
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
                src="https://awakeboards.com/cdn/shop/products/PKLiso_600x.jpg?v=1615212293"
                alt=""
                className="img-fluid"
              />
              <p className="mb-1">
                <small className="fw-bold">Awake Power Key Leash</small>
              </p>
              <small>
                <span className="fw-bold h6">€190</span>{" "}
                <span style={{ fontSize: "10px" }}>ex.</span>VAT
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
  );
};

export default Awake;
