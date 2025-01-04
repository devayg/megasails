import React from "react";
import NavBar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";

const JetBoards = () => {
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
              src="https://cdn.shopify.com/videos/c/o/v/8faf6cab205d4db08cbfaa40ba2a4b2f.mp4"
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
              Jetboards
            </div>
          </div>
        </div>
        {/* Mobile  */}
        <div className="mob-banner d-md-none mb-1">
          <div className="">
            <video
              src="https://cdn.shopify.com/videos/c/o/v/8faf6cab205d4db08cbfaa40ba2a4b2f.mp4"
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
              Jetboards
            </div>
          </div>
        </div>
      </section>

      {/* Text  */}
      <section className="container py-4">
        <div className="text-center">
          <h4 className="fw-bold">Awake Jetboards</h4>
          <p className="h6">
            The RÄVIK Jetboards bring a new level of excitement and
            accessibility to water sports, combining high performance with
            innovative design. The RÄVIK 3 Jetboard is the ultimate choice for
            riders of all levels, from beginners seeking stability and ease of
            use to experienced jetboarders looking to push their limits. The
            RÄVIK S is made for advanced jetboarders who want to carve tighter
            turns and perform more dynamic moves on the water.
          </p>
        </div>
      </section>

      {/* Model  */}
      <section>
        <Row className="g-0 text-center" style={{ backgroundColor: "#f4f4f6" }}>
          <Col lg={6}>
            <video
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
            />
          </Col>
          <Col lg={6} className="d-flex align-items-center p-lg-5">
            <div>
              <h1 className="fw-bold">Awake RÄVIK 3</h1>
              <div>
                <span className="fw-bold">€10.900</span> <small>ex.</small>{" "}
                <span className="fw-bold">VAT</span>
                <p>
                  The ultimate balance between high performance, ease of use and
                  comfort, the RÄVIK 3 is made from cutting-edge marine
                  technology.
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
              <h1 className="fw-bold">Awake RÄVIK S</h1>
              <div>
                <span className="fw-bold">€12.900</span> <small>ex.</small>{" "}
                <span className="fw-bold">VAT</span>
                <p>
                  he RÄVIK S features an advanced hull with sharp water release
                  and an aggressive rocker that cuts through water with
                  razor-sharp precision, delivering fast, controlled rides that
                  will leave you breathless.
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
              src="https://awakeboards.com/cdn/shop/files/Flex_battery_gif_1x1_1_1000x.gif?v=1667472767"
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

export default JetBoards;
