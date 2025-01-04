import React from "react";
import NavBar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";

const Efoils = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>
      {/* Banner  */}
      <section>
        {/* Desktop  */}
        <div className="banner d-none d-md-block">
          <div className="">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/01be17a39a044c6383deb187094ba4ca.mp4"
              playsInline
              muted
              autoPlay
              loop
              type="video/mp4"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <div
              className="banner-text fw-bold"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
                fontSize: "7vw",
              }}
            >
              eFoils
            </div>
          </div>
        </div>
        {/* Mobile  */}
        <div className="mob-banner d-md-none mb-1">
          <div className="">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/01be17a39a044c6383deb187094ba4ca.mp4"
              playsInline
              muted
              autoPlay
              loop
              type="video/mp4"
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
            />
            <div
              className="banner-text fw-bold"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
                fontSize: "7vw",
              }}
            >
              eFoils
            </div>
          </div>
        </div>
      </section>

      {/* Text  */}
      <section className="container py-4">
        <div className="text-center">
          <h4 className="fw-bold">Awake eFoils</h4>
          <p className="h6">
            The Awake VINGA premium eFoils are designed for water sports
            enthusiasts who crave speed, agility, and the sensation of flying
            above the water. The VINGA 3 eFoil ensures stability and
            responsiveness for beginners to get comfortable and advanced riders
            to develop their skills on. The VINGA S offers more control and
            maneuverability for advanced eFoilers.
          </p>
        </div>
      </section>

      {/* Model  */}
      <section>
        <Row className="g-0 text-center" style={{ backgroundColor: "#f4f4f6" }}>
          <Col lg={6}>
            {/* <video
              src="https://cdn.shopify.com/videos/c/o/v/983fe58b257a48168415d19dd7c4e909.mp4"
              playsInline
              muted
              autoPlay
              loop
              type="video/mp4"
              style={{
                width: "100%",
                height: "auto",
              }}
            /> */}
            <Image
              src="https://awakeboards.com/cdn/shop/files/Awake_VINGA_3_Flex_battery_1500x.jpg?v=1691055785"
              alt=""
              className="img-fluid"
            />
          </Col>
          <Col lg={6} className="d-flex align-items-center p-lg-5">
            <div>
              <h1 className="fw-bold">Awake VINGA 3</h1>
              <div>
                <span className="fw-bold">€12.900</span> <small>ex.</small>{" "}
                <span className="fw-bold">VAT</span>
                <p>
                  Designed for both beginners and riders looking to advance
                  their skills, this electric hydrofoil is the ultimate
                  companion for your water sports adventures.
                </p>
                <button
                  className="btn btn-dark btn-sm py-0"
                  style={{ height: "40px" }}
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </Col>

          <Col lg={6} className="d-flex align-items-center p-lg-5">
            <div>
              <h1 className="fw-bold">Awake VINGA S</h1>
              <div>
                <span className="fw-bold">€13.900</span> <small>ex.</small>{" "}
                <span className="fw-bold">VAT</span>
                <p>
                  Compact, reactive and powerful, the VINGA S allows experienced
                  eFoilers to break the boundaries of eFoiling. Pursuing the
                  pinnacle of streamlined performance and increased
                  maneuverability has been the guiding principle behind this
                  board’s development.
                </p>
                <button
                  className="btn btn-dark btn-sm py-0"
                  style={{ height: "40px" }}
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            {/* <video
          src="https://cdn.shopify.com/videos/c/o/v/983fe58b257a48168415d19dd7c4e909.mp4"
          playsInline
          muted
          autoPlay
          loop
          type="video/mp4"
          style={{
            width: "100%",
            height: "auto",
          }}
        /> */}
            <Image
              src="https://awakeboards.com/cdn/shop/files/VINGA_S_Flex_battery_on_beach_1500x.jpg?v=1692279113"
              alt=""
              className="img-fluid"
            />
          </Col>
        </Row>
      </section>

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
    </>
  );
};

export default Efoils;
