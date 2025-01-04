import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InstagramFeed = ({ token, limit }) => {
  const [media, setMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${token}&limit=${limit}`
        );
        // Filter for videos only and limit to 6 items
        const videos = response.data.data
          .filter((item) => item.media_type === "VIDEO")
          .slice(0, 6);
        setMedia(videos);
      } catch (err) {
        setError(err);
      }
    };

    fetchMedia();
  }, [token, limit]);

  if (error) {
    return <div>Error fetching media: {error.message}</div>;
  }

  const handleVideoClick = (mediaItem) => {
    setSelectedMedia(mediaItem);
  };

  const handleClose = () => {
    setSelectedMedia(null);
  };

  return (
    <>
      <Container fluid className="col-lg-11 my-4">
        <div className="col-lg-12 hr-line">
          <div className="d-flex justify-content-between pt-3 pb-2">
            <h5 className="text-dark fw-bold">
              <i className="fa-brands fa-instagram fw-bold"></i>
              {"  "}Follow Us On Instagram
            </h5>
            <button
              type="button"
              className="btn custom-contact-btn py-1 btn-sm"
            >
              <Link
                to="https://www.instagram.com/megasails/"
                className=" text-white fw-bold p-0"
              >
                Follow Us{"  "}
                <i className="fa-solid fa-angles-right"></i>
              </Link>
            </button>
          </div>
        </div>
        <Row className="g-1">
          {media.map((item) => (
            <Col
              key={item.id}
              xs={6}
              sm={6}
              md={4}
              lg={2}
              className="instagram-item"
              onClick={() => handleVideoClick(item)}
            >
              <div className="instagram-content rounded shadow-sm">
                <video controls src={item.media_url} className="w-100" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedMedia && (
        <Modal show={true} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Video Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <video
                  controls
                  src={selectedMedia.media_url}
                  className="w-100"
                />
              </Col>
              <Col md={6}>
                <div>
                  {selectedMedia.caption && (
                    <p className="text-secondary">{selectedMedia.caption}</p>
                  )}
                  <div className="mt-4">
                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={() =>
                        navigator.share({
                          title: "Check out this video!",
                          url: selectedMedia.media_url,
                        })
                      }
                    >
                      Share
                    </Button>
                    <Button
                      variant="outline-secondary"
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/megasails/",
                          "_blank"
                        )
                      }
                    >
                      Visit Instagram Page
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default InstagramFeed;
