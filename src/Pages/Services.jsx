import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import financing_banner from "../Images/financing_banner.png";
import insurance_banner from "../Images/insurance_banner.png";
import hurricane_banner from "../Images/hurricane_banner.png";
import tranaportation_banner from "../Images/transportation_banner.png";
import charter_banner from "../Images/charter_banner.png";
import Navbar from "../Components/Navbar";
import { ref, push } from "firebase/database";
import { database } from "../firebase";
import axios from "axios";
import Express_URL from "../Components/Express_URL";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";

const Services = () => {
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
  const [selectedService, setSelectedService] = useState("");

  const handleButtonClick = (service) => {
    setSelectedService(service);
    setFormData({
      ...formData,
      CA_category: service,
    });
    scrollToForm();
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
    // Validate and limit the length for the phoneNumber field
    if (name === "NO_phoneNumber") {
      const phoneNumber = value.replace(/\D/g, ""); // Remove non-digit characters
      if (phoneNumber.length <= 10) {
        // Limit to 10 digits
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
      console.error("CAPTCHA not completed!");
      return;
    }

    // Get current date and time
    const currentDate = new Date();
    // Format date to MySQL DATETIME format (YYYY-MM-DD HH:MM:SS)
    const formattedDateTime = currentDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    // Prepare formData with the timestamp
    const formDataWithTimestamp = {
      ...formData,
      submitDateTime: formattedDateTime,
    };

    // Reset form fields and show success alert immediately
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

    alert("Form submitted successfully!");

    // Use Promise.all to handle form submission and email sending in parallel
    try {
      await Promise.all([
        axios.post(`${Express_URL}/submit-form`, formDataWithTimestamp),
        axios.post(`${Express_URL}/send-email-service`, {
          ...formData,
          recipientEmail: formData.ID_email,
          subject: "Lead email",
          message: formData,
        }),
      ]);
    } catch (error) {
      console.error("Error processing requests:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Services - MegaSails</title>
        <meta
          name="description"
          content="At MegaSails, we focus on more than just selling boats—we aim to build lasting relationships with our clients, founded on trust, integrity, and respect."
        />
        <meta
          name="keywords"
          content="yacht services, yacht brokerage, yacht maintenance, yacht financing, yacht insurance, yacht hurricane storage, yacht transportation, yacht charter, yacht trade-in, luxury yachts, yacht concierge services, boat services, American Yacht Group, yacht repair, yacht management, yacht repair, yacht detailing, luxury yacht management, yacht brokerage services, yacht charter services, yacht refit and restoration , marine services, yacht captain services, yacht concierge services, yacht financing, yacht survey services, yacht electronics installation, yacht customization, yacht transport services, yacht warranty services,"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Yacht Services & Maintenance – Expert Care for Your Yacht"
        />
        <meta
          property="og:description"
          content="At MegaSails, we focus on more than just selling boats—we aim to build lasting relationships with our clients, founded on trust, integrity, and respect."
        />
        <meta property="og:url" content="https://www.megasails.com/services" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://megasails.s3.us-east-2.amazonaws.com/Megasails+Yacht+Services.jpg"
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

      <section style={{ backgroundColor: "" }}>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Brokerage </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                our team of professional, expert yacht brokers can assist you in
                purchasing the right yacht for your needs, help you in selling
                your current vessel, or work on your behalf with any shipyard to
                ensure the best outcome.
              </p>

              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Brokerage")}
                >
                  Reuest Service <i class="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={financing_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#f4f4f4" }}>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={financing_banner} alt="" className="img-fluid" />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Financing </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                Experience the thrill of yacht ownership without the financial
                burden. Our yacht financing options provide you with the means
                to acquire your dream vessel, combining convenience, expertise,
                and favorable terms.
              </p>

              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Finance")}
                >
                  Reuest Service <i class="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Insurance</h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                MegaSails collaborates with leading marine insurers to provide
                comprehensive, tailored marine insurance for yacht owners. Our
                dedicated team ensures a seamless, worry-free yacht buying
                process, offering peace of mind as you embark on your journey.
                With transparency, personalized service, and commitment to
                excellence, trust MegaSails for optimal coverage and protection.
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Insurance")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={insurance_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#f4f4f4" }}>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={hurricane_banner} alt="" className="img-fluid" />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Hurricane Storage</h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                MegaSails proudly presents our Yacht Hurricane Storage services,
                providing peace of mind during the hurricane season. Our
                comprehensive protection program ensures your yacht's safety,
                with careful hauling and secure storage in our boat yard. Due to
                limited space and high demand, we recommend advance sign-ups for
                guaranteed placement. Trust MegaSails for professional hurricane
                storage.
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Hurricane Storage")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center"
            >
              <h1 className="mb-3">The Yacht Transportation </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                MegaSails proudly presents our premier Yacht Transportation
                Services, featuring a dedicated team of specialists and our own
                fleet for reliable land or water transportation. Your cherished
                yacht is handled with utmost care, ensuring a seamless and
                stress-free journey. Trust MegaSails for a commitment to
                excellence, guaranteeing the safe and timely arrival of your
                vessel to its destination.
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Transportation")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={tranaportation_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#f4f4f4" }}>
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={charter_banner} alt="" className="img-fluid" />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Charter </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                Megasails is excited to present our unmatched Yacht Charter
                Services. Immerse yourself in luxury and adventure with our
                curated selection of exquisite yachts and professional crews,
                guaranteeing an unforgettable experience. Whether for relaxation
                or exploration, our services promise cherished memories and
                cater to your desires. Trust Megasails as your go-to yacht
                co-broker for the ultimate voyage of opulence and tranquility.
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Charter")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "" }} id="trade-in">
        <Container>
          <Row className="py-5 g-3">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="mb-3">The Yacht Trade-In </h1>
              <p
                style={{
                  lineHeight: "28px",
                  textAlign: "justify",
                  fontSize: "18px",
                }}
              >
                Simplifying the yacht trading experience, the trade-in process
                efficiently removes the hassle and risk associated with
                upgrading to a different vessel. This appealing plan eradicates
                the concern of being stuck with two boats during the selling
                period
              </p>
              <div>
                <button
                  type="button"
                  className="btn custom-contact-btn text-uppercase "
                  onClick={() => handleButtonClick("Trade-In")}
                >
                  Reuest Service
                </button>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center "
            >
              <img src={charter_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="c-contact-us" style={{ backgroundColor: "#ebf0f7" }}>
        <Container fluid className="col-lg-11 py-3">
          <div class="text-center">
            <h4 class="py-2 c-heading">
              Get In Touch for Full-Circle Yacht Ownership Experience
            </h4>
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
                    value={selectedService}
                    required
                    onChange={(e) => {
                      setSelectedService(e.target.value);
                      // manually selects a service
                      setFormData({
                        ...formData,
                        CA_category: e.target.value,
                      });
                    }}
                  >
                    <option value="">Select service...</option>
                    <option value="Brokerage">Brokerage</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Finance">Finance</option>
                    <option value="Hurricane Storage">Hurricane Storage</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Charter">Charter</option>
                    <option value="Trade-In">Trade-In</option>
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
                    placeholder="Do you currently own a boat? If so, what kind?"
                    name="DS_comments2"
                    onChange={handleChange}
                    value={formData.DS_comments2}
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
              <img
                src="https://hcbyachts.com/wp-content/uploads/2023/11/HCB-48-Rendering_White_StarboardStern-Transparetn-Website-1536x675.png"
                alt=""
                className="img-fluid"
              />
              {/* src={my_img} */}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
