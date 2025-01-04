import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ref, push } from "firebase/database";
import { database } from "../firebase";
import axios from "axios";
import Express_URL from "./Express_URL";
import ReCAPTCHA from "react-google-recaptcha";

const YachtDetailsContact = ({ yachtId }) => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); // State to track CAPTCHA verification

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setIsCaptchaVerified(true); // Set the state to true when CAPTCHA is verified
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
  // State variables for form data
  const [formData, setFormData] = useState({
    NM_firstName: "",
    NM_lastName: "",
    ID_email: "",
    NO_phoneNumber: "",
    CD_city: "",
    CD_state: "",
    CD_country: "",
    CA_category: "Request more information",
    DS_comments1: "",
    DS_comments2: "",
    NM_docId: yachtId,
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

  // Handle form submission
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

    // Prepare the formData with the timestamp
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
      CA_category: "Request more information",
      DS_comments1: "",
      NM_docId: yachtId,
    });

    alert("Form submitted successfully!");

    // Use Promise.all to send form data and email in parallel
    try {
      await Promise.all([
        axios.post(`${Express_URL}/submit-form`, formDataWithTimestamp),
        // Uncomment to send the email in the background
        axios.post(`${Express_URL}/send-email-yachtdetails`, {
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
    <div className="p-3 shadow" style={{ backgroundColor: "#eeee" }}>
      <Form onSubmit={handleSubmit}>
        <Row className="g-0">
          <Col md={6} className="border">
            <Form.Group controlId="firstName">
              <Form.Control
                type="text"
                placeholder="First Name"
                size=""
                className="rounded-0 border-0"
                name="NM_firstName"
                value={formData.NM_firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} className="border">
            <Form.Group controlId="lastName">
              <Form.Control
                type="text"
                placeholder="Last Name"
                size=""
                className="rounded-0 border-0"
                name="NM_lastName"
                value={formData.NM_lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} className="border">
            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Email"
                size=""
                name="ID_email"
                className="rounded-0 border-0"
                value={formData.ID_email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6} className="border">
            <Form.Group controlId="phoneNumber">
              <Form.Control
                type="tel"
                placeholder="Phone number"
                size=""
                className="rounded-0 border-0"
                name="NO_phoneNumber"
                value={formData.NO_phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={12} className="border">
            <Form.Group controlId="inquiry">
              <Form.Select
                size=""
                className="rounded-0 border-0"
                name="CA_category"
                value={formData.CA_category}
                required
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    CA_category: e.target.value,
                  });
                }}
              >
                <option value="Request more information">
                  Request more information
                </option>
                <option value="Schedule a Tour">Schedule a Tour</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={12} className="border">
            <Form.Group controlId="comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "50px" }}
                className="rounded-0 border-0"
                name="DS_comments1"
                value={formData.DS_comments1}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <ReCAPTCHA
            sitekey="6LexayQmAAAAALel3ynctYSG1JZNWb2X_alLoagM"
            onChange={handleCaptchaChange}
          />
        </div>
        <div className="d-grid gap-2 my-2">
          <Button type="submit" variant="warning" size="sm">
            Submit Inquiry
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default YachtDetailsContact;
