import React, { useRef, useState } from "react";
import {
  Button,
  Col,
  Card,
  Container,
  Carousel,
  Form,
  Row,
} from "react-bootstrap";
import Navbar from "../Components/Navbar";
import my_img from "../Images/banner_hcb.png";
import { ref, push } from "firebase/database";
import { database } from "../firebase";
import axios from "axios";
import img1 from "../Images/ikon.png";
import Express_URL from "../Components/Express_URL";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";

const IKON = () => {
  const formRef = useRef();
  const [captchaValue, setCaptchaValue] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); // State to track CAPTCHA verification

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setIsCaptchaVerified(true); // Set the state to true when CAPTCHA is verified
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const formatPhoneNumber = (input) => {
    // Remove non-digit characters
    const phoneNumber = input.replace(/\D/g, "");

    // Apply the desired format
    const formattedPhoneNumber = phoneNumber.replace(
      /^(\d{3})(\d{3})(\d{4})$/,
      "($1) $2-$3"
    );

    return formattedPhoneNumber;
  };

  const [formData, setFormData] = useState({
    NM_firstName: "",
    NM_lastName: "",
    ID_email: "",
    NO_phoneNumber: "",
    CD_city: "",
    CD_state: "",
    CD_country: "",
    CA_category: "",
    DS_comments1: "",
    DS_comments2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "NO_phoneNumber") {
      // Remove non-digit characters
      const phoneNumber = value.replace(/\D/g, "");

      // Limit to 10 digits
      if (phoneNumber.length <= 10) {
        // Apply the desired format
        const formattedValue = formatPhoneNumber(phoneNumber);
        setFormData({ ...formData, [name]: formattedValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      // If CAPTCHA is not verified, prevent form submission
      console.error("CAPTCHA not completed!");
      return;
    }
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Set to true for 12-hour clock format
    });
    try {
      // Push the form data to the "inquiries" collection in Firebase
      const inquiriesRef = ref(database, "inquiries");
      await push(inquiriesRef, {
        ...formData,
        submitDateTime: formattedDateTime,
      });
      // Show success alert
      alert("Form submitted successfully!");
      // Send email
      await axios.post(`${Express_URL}/send-email-contact`, {
        ...formData,
        recipientEmail: formData.ID_email,
        subject: "Lead email",
        message: formData,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setFormData({
      NM_firstName: "",
      NM_lastName: "",
      ID_email: "",
      NO_phoneNumber: "",
      CD_city: "",
      CD_state: "",
      CD_country: "",
      CA_category: "",
      DS_comments1: "",
      DS_comments2: "",
    });
  };
  return (
    <>
      <Helmet>
        <title>iKon Boats - MegaSails </title>
        <meta
          name="description"
          content="Explore iKon Boats 2025 at Megasails. Discover luxury and high-performance yachts with cutting-edge design and features. Find your perfect boat today!"
        />
        <meta
          name="keywords"
          content="iKon Boats 2025, MegaSails iKon Yachts, Luxury High-Performance Yachts, iKon Boats Features,2025 iKon Yachts, MegaSails Yacht Sales, Cutting-Edge Yachts, High-Performance Boats, iKon Yacht Design, Premium iKon Boats"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="iKon Boats 2025 | Luxury High-Performance Yacht"
        />
        <meta
          property="og:description"
          content="Explore iKon Boats 2025 at Megasails. Discover luxury and high-performance yachts with cutting-edge design and features. Find your perfect boat today!"
        />
        <meta property="og:url" content="https://www.megasails.com/ikon" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://megasails.s3.us-east-2.amazonaws.com/iKon+Boats+-+Megasails.webp"
        />
        <meta property="og:site_name" content="MegaSails" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <Navbar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>

      <div className="mob-banner d-md-none mb-4">
        <iframe
          src="https://player.vimeo.com/video/806813966?background=1"
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
          <p className="mb-0 fs-5 fw-bold">
            Performance. Luxury. Comfort. Athleticism.
          </p>
        </div>
      </div>

      <div className="banner d-none d-md-block">
        <div className="banner-content">
          <iframe
            src="https://player.vimeo.com/video/806813966?background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="hcb-video"
          ></iframe>
          <div className="banner-text">
            <h5 className="text-center fw-bold text-danger">
              Test the Waters. Find Your iKon Today.
            </h5>
          </div>
        </div>
      </div>

      <Container fluid>
        <Row className="d-flex justify-content-center text-center">
          <Col xs={7}>
            <img
              src="https://ikonboats.com/wp-content/uploads/2023/03/6D8dkL5A-1.png"
              alt="IKON BASS BOATS"
              className="img-fluid py-4"
            />
          </Col>
        </Row>
        <Row className="bg-body-tertiary mb-3">
          <Col xs={12} className="text-center">
            <div>
              <img
                src="https://ikonboats.com/wp-content/uploads/2023/03/LX21-Logo-website-V7.png"
                alt="lx21"
                height={"100px"}
                style={{
                  filter: "brightness(70%) contrast(130%) grayscale(20%)",
                }}
              />
              <h5>Fast getting up on pad with practically no bow tipping.</h5>
            </div>
          </Col>
          <Col lg={6} className="px-3">
            <Carousel
              prevIcon={
                <span style={{ color: "red", fontSize: "50px" }}>❮</span>
              }
              nextIcon={
                <span style={{ color: "red", fontSize: "50px" }}>❯</span>
              }
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ikonboats.com/wp-content/uploads/2023/02/gallery4.jpg"
                  alt="First slide"
                  style={{ mixBlendMode: "multiply" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ikonboats.com/wp-content/uploads/2023/02/gallery7.jpg"
                  alt="Second slide"
                  style={{ mixBlendMode: "multiply" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ikonboats.com/wp-content/uploads/2023/02/gallery1.jpg"
                  alt="Third slide"
                  style={{ mixBlendMode: "multiply" }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <table class="mt-3 table  table-hover fw-bold">
                <tbody>
                  <tr>
                    <th scope="row" class="t-header">
                      Length
                    </th>
                    <td>21’10”</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Beam
                    </th>
                    <td>98”</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Fuel Capacity
                    </th>
                    <td>50 Gallons</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Livewell Capacity
                    </th>
                    <td>35 Gallons</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Rod Box Length
                    </th>
                    <td>9’8”</td>
                  </tr>
                </tbody>
              </table>
              <Button
                variant="btn btn-dark"
                className="me-2"
                size="sm"
                onClick={scrollToForm}
              >
                Enquire Now
              </Button>
              {/* <Button variant="btn btn-dark" size="sm">
                Block level button
              </Button> */}
            </div>
          </Col>
        </Row>
        <Row className="bg-body-tertiary mb-3">
          <Col xs={12} className="text-center">
            <div>
              <img
                src="https://ikonboats.com/wp-content/uploads/2023/03/LX20-Logo-website-V7.png"
                alt="lx20"
                height={"100px"}
                style={{
                  filter: "brightness(70%) contrast(130%) grayscale(20%)",
                }}
              />
              <h5>Massive Fishing Tackle Storage. Massive Machine Room.</h5>
            </div>
          </Col>
          <Col lg={6} className="px-3">
            <Carousel
              prevIcon={
                <span style={{ color: "red", fontSize: "50px" }}>❮</span>
              }
              nextIcon={
                <span style={{ color: "red", fontSize: "50px" }}>❯</span>
              }
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ikonboats.com/wp-content/uploads/2023/02/gallery1.jpg"
                  alt="First slide"
                  style={{ mixBlendMode: "multiply" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ikonboats.com/wp-content/uploads/2023/02/gallery4.jpg"
                  alt="Second slide"
                  style={{ mixBlendMode: "multiply" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ikonboats.com/wp-content/uploads/2023/02/gallery7.jpg"
                  alt="Third slide"
                  style={{ mixBlendMode: "multiply" }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <table class="mt-3 table  table-hover fw-bold">
                <tbody>
                  <tr>
                    <th scope="row" class="t-header">
                      Length
                    </th>
                    <td>20’10”</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Beam
                    </th>
                    <td>98”</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Fuel Capacity
                    </th>
                    <td>50 Gallons</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Livewell Capacity
                    </th>
                    <td>35 Gallons</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Rod Box Length
                    </th>
                    <td>9’8”</td>
                  </tr>
                </tbody>
              </table>
              <Button
                variant="btn btn-dark"
                className="me-2"
                size="sm"
                onClick={scrollToForm}
              >
                Enquire Now
              </Button>
              {/* <Button variant="btn btn-dark" size="sm">
                Block level button
              </Button> */}
            </div>
          </Col>
        </Row>
        <Row className="bg-body-tertiary mb-3">
          <Col xs={12} className="text-center">
            <div>
              <img
                src="https://ikonboats.com/wp-content/uploads/2024/03/VLX21-Logo-website-V7.png"
                alt="vlx21"
                height={"100px"}
                style={{
                  filter: "brightness(70%) contrast(130%) grayscale(20%)",
                }}
              />
              <h5>The VLX21 is everything you expect in a bass boat.</h5>
            </div>
          </Col>
          <Col lg={6} className="px-3">
            <Carousel
              prevIcon={
                <span style={{ color: "red", fontSize: "50px" }}>❮</span>
              }
              nextIcon={
                <span style={{ color: "red", fontSize: "50px" }}>❯</span>
              }
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ikonboats.com/wp-content/uploads/2023/02/gall2.jpg"
                  alt="First slide"
                  style={{ mixBlendMode: "multiply" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ikonboats.com/wp-content/uploads/2023/02/gallery5.jpg"
                  alt="Second slide"
                  style={{ mixBlendMode: "multiply" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://ikonboats.com/wp-content/uploads/2023/02/gallery6.jpg"
                  alt="Third slide"
                  style={{ mixBlendMode: "multiply" }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <table class="mt-3 table  table-hover fw-bold">
                <tbody>
                  <tr>
                    <th scope="row" class="t-header">
                      Length
                    </th>
                    <td>21’</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Beam
                    </th>
                    <td>98”</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Fuel Capacity
                    </th>
                    <td>50 Gallons</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Livewell Capacity
                    </th>
                    <td>35 Gallons</td>
                  </tr>
                  <tr>
                    <th scope="row" class="t-header">
                      Rod Box Length
                    </th>
                    <td>8’6”</td>
                  </tr>
                </tbody>
              </table>
              <Button
                variant="btn btn-dark"
                className="me-2"
                size="sm"
                onClick={scrollToForm}
              >
                Enquire Now
              </Button>
              {/* <Button variant="btn btn-dark" size="sm">
                Block level button
              </Button> */}
            </div>
          </Col>
        </Row>
      </Container>

      <div>
        <section
          className="c-contact-us"
          style={{ backgroundColor: "#ebf0f7" }}
        >
          <Container fluid className="col-lg-11 py-3">
            <div class="text-center">
              <h4 class="py-2 c-heading">Let's Get In Touch</h4>
              <hr class="hr-1" />
              <p>
                <small>
                  Send us a messages and we will get back to you as soon as
                  possible!
                </small>
              </p>
            </div>
            <Row>
              <Col md={12} lg={6} ref={formRef}>
                <Form onSubmit={handleSubmit}>
                  <Row className="g-2">
                    <Col lg={6}>
                      <Form.Group controlId="firstName">
                        <Form.Control
                          className="mb-2"
                          type="text"
                          placeholder="First Name"
                          name="NM_firstName"
                          value={formData.NM_firstName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group controlId="lastName">
                        <Form.Control
                          className="mb-2"
                          type="text"
                          name="NM_lastName"
                          placeholder="Last Name"
                          value={formData.NM_lastName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-2">
                    <Col lg={6}>
                      <Form.Group controlId="email">
                        <Form.Control
                          className="mb-2"
                          type="email"
                          placeholder="Email"
                          name="ID_email"
                          value={formData.ID_email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group controlId="phoneNumber">
                        <Form.Control
                          className="mb-2"
                          type="tel"
                          name="NO_phoneNumber"
                          placeholder="Phone (123) 456-7890"
                          value={formData.NO_phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-2">
                    <Col lg={4}>
                      <Form.Group controlId="city">
                        <Form.Control
                          className="mb-2"
                          type="text"
                          name="CD_city"
                          placeholder="City"
                          value={formData.CD_city}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group controlId="state">
                        <Form.Control
                          className="mb-2"
                          type="text"
                          placeholder="State"
                          name="CD_state"
                          value={formData.CD_state}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group controlId="country">
                        {/* Change controlId to "country" */}
                        <Form.Control
                          className="mb-2"
                          type="text"
                          name="CD_country"
                          value={formData.CD_country}
                          placeholder="Country"
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="selectService">
                    <Form.Control
                      className="mb-2"
                      as="select"
                      required
                      value={formData.CA_category}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          CA_category: e.target.value,
                        });
                      }}
                    >
                      <option value="">Inquire About</option>
                      <option value="I want to build my own">
                        I want to build my own
                      </option>
                      <option value="Request Information">
                        Request Information
                      </option>
                      <option value="Inquire about Pricing and Inventory">
                        Inquire about Pricing and Inventory
                      </option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="comments">
                    <Form.Control
                      className="mb-2"
                      as="textarea"
                      placeholder="Leave your comments"
                      rows={3}
                      name="DS_comments1"
                      value={formData.DS_comments1}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="comments2">
                    <Form.Control
                      className="mb-2"
                      as="textarea"
                      rows={3}
                      name="DS_comments2"
                      placeholder="Do you currently own a boat? If so, what kind?"
                      value={formData.DS_comments2}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <ReCAPTCHA
                      sitekey="6LexayQmAAAAALel3ynctYSG1JZNWb2X_alLoagM"
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      className="btn custom-contact-btn text-uppercase"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </Col>
              <Col xs={12} md={12} lg={6} className="">
                <img src={my_img} alt="" className="img-fluid" />
                {/* src="https://hcbyachts.com/wp-content/uploads/2023/11/HCB-48-Rendering_White_StarboardStern-Transparetn-Website-1536x675.png" */}
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default IKON;
