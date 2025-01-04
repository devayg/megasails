import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const EventsFeed = () => {
  // Hardcoded JSON data
  const events = [
    {
      id: 1,
      title: "Naples Boat Show",
      date: "Jan 23-26, 2025",
      location: "Naples, FL",
      description: "Join us for a day of insightful talks and networking.",
      image: "https://ayg.s3.us-east-2.amazonaws.com/Megasails_NBS.jpeg",
    },
    {
      id: 2,
      title: "Miami International Boat Show",
      date: " Feb 12-16 2025",
      location: "Miami, FL, USA",
      image:
        "https://ayg.s3.us-east-2.amazonaws.com/HCB+VIP+Miami+International+Boat+Show+2025.jpg",
    },
    {
      id: 3,
      title: "Dubai International Boat Show",
      date: " Feb 19-23 2025",
      location: "Dubai Harbour",
      image: "https://ayg.s3.us-east-2.amazonaws.com/dubai-marina-display.webp",
    },
  ];

  return (
    <Container fluid className="col-lg-11 py-5">
      <h5 className="text-dark fw-bold ">Upcoming Events</h5>
      <Row className="">
        {events.map((event) => (
          <Col key={event.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="rounded-0 border-0 bg-transparent">
              <Card.Img
                variant="top"
                className="rounded-0"
                src={event.image}
                alt={event.title}
              />
              <Card.Body className="p-0">
                <h5 className="mt-2 mb-0 fw-bold text-primary-emphasis">
                  {event.title} - {event.date}
                </h5>

                <small className="fw-bold mb-1">{event.location}</small>
                {/* <p className="mb-1">{event.description}</p> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventsFeed;
