import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Form,
  Card,
  Spinner,
} from "react-bootstrap";
import { makeStringNames } from "../Components/MakeStringCollection";
import { classNames } from "../Components/ClassNameCollections";
import NavBar from "../Components/Navbar";
import { Link, useLocation } from "react-router-dom";
import Express_URL from "../Components/Express_URL";
import { Adsense } from "@ctrl/react-adsense";
import { Helmet } from "react-helmet";

const extractNumber = (str) => {
  const match = str.match(/\d+/);
  return match ? match[0] : "";
};

const Advertisement1 = () => (
  <Col key="advertisement-1" xs={12} md={6} lg={4}>
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
          slot="1759471789"
          style={{
            width: 300,
            height: 300,
          }}
          format=""
        />
      </div>
    </div>
  </Col>
);

const Advertisement2 = () => (
  <Col key="advertisement-2" xs={12} md={6} lg={4}>
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
          slot="2178655050"
          style={{
            width: 300,
            height: 300,
          }}
          format=""
        />
      </div>
    </div>
  </Col>
);

const Advertisement3 = () => (
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
);
function Search() {
  const location = useLocation();
  const initialMake = new URLSearchParams(location.search).get("make") || "All";
  const [yachts, setYachts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [make, setMake] = useState(initialMake);
  const [condition, setCondition] = useState("All");
  const initialClassName =
    new URLSearchParams(location.search).get("className") || "";
  const [className, setClassName] = useState(initialClassName);

  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = (start, rows) => {
    let conditionParam = condition;
    // If 'All' is selected, include both 'New' and 'Used'
    if (condition === "All") {
      conditionParam = "New,Used";
    }

    let apiUrl = `${Express_URL}/documents/?start=${start}&rows=${rows}`;

    // Append selected parameters to the API URL
    if (make !== "All") {
      apiUrl += `&make=${make}`;
    }

    if (condition !== "All") {
      apiUrl += `&condition=${conditionParam}`;
    }

    if (className !== "All") {
      apiUrl += `&boatClass=${className}`;
    }

    if (minLength && maxLength) {
      apiUrl += `&length=${minLength}:${maxLength}|feet`;
    }

    if (minYear && maxYear) {
      apiUrl += `&year=${minYear}:${maxYear}`;
    }

    if (minPrice && maxPrice) {
      apiUrl += `&price=${minPrice}:${maxPrice}|USD`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.data.results.length === 0) {
          setError(true);
          setYachts([]);
        } else {
          const yachtsArray = data.data.results;
          setYachts(yachtsArray);
          setTotalPages(Math.ceil(data.data.numResults / rows));
          setError(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const state = location.state;
    if (state && state.chatbotMessageData) {
      const { pathParams, queryParams, response } = state.chatbotMessageData;

      setYachts(response.data.results);
      setTotalPages(Math.ceil(response.data.numResults / 24));

      if (queryParams.make) setMake(queryParams.make);

      if (queryParams.length) {
        const [minL, maxL] = queryParams.length.split(":").map(extractNumber);
        setMinLength(minL);
        setMaxLength(maxL);
      }

      if (queryParams.price) {
        const [minP, maxP] = queryParams.price.split(":");
        setMinPrice(minP);
        setMaxPrice(maxP);
      }

      if (queryParams.ModelYear) {
        const [minY, maxY] = queryParams.ModelYear.split(":");
        setMinYear(minY);
        setMaxYear(maxY);
      }

      if (queryParams.condition) setCondition(queryParams.condition);

      if (queryParams.BoatClassCode) {
        setClassName(queryParams.BoatClassCode);
      }
      setLoading(false);
    } else {
      fetchData(0, 24);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(0, 24);
    setPage(1);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * 24;
    fetchData(start, 24);
    setPage(nextPage);
    handleClick();
  };

  const handlePrevPage = () => {
    const prevPage = page - 1;
    const start = (prevPage - 1) * 24;
    fetchData(start, 24);
    setPage(prevPage);
    handleClick();
  };

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  // Display advertisement after every 6 yachts
  const adInterval = (() => {
    if (
      window.matchMedia("(min-width: 767px) and (max-width: 950px)").matches
    ) {
      return 7; // Tablet
    } else {
      return 8; // Mobile, Desktop
    }
  })();
  //const adInterval = 8;
  const advertisementCol = (
    <Col key="advertisement" xs={12}>
      <Card
        className="border-0"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <Card.Body className="p-2">
          <Card.Text>
            <div className="text-center">
              {/* Mobile: Display Image 1 */}
              <Row className="d-md-none">
                <Col>
                  <img
                    src="https://ayg.s3.us-east-2.amazonaws.com/HCB+(2).gif"
                    alt="Mobile"
                    className="img-fluid"
                  />
                </Col>
              </Row>

              {/* Tablet: Display Image 2 */}
              <Row className="d-none d-md-flex d-lg-none">
                <Col>
                  <img
                    src="https://ayg.s3.us-east-2.amazonaws.com/Explore+Travel.gif"
                    alt="Tablet"
                    className="img-fluid"
                  />
                </Col>
              </Row>

              {/* Desktop: Display Image 3 */}
              <Row className="d-none d-lg-flex">
                <Col>
                  <img
                    src="https://ayg.s3.us-east-2.amazonaws.com/Explore+Travel.gif"
                    alt="Desktop"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Helmet>
        <title>HCB Yachts for sale - MegaSails </title>
        <meta
          name="description"
          content="Find new and used HCB Yachts for sale in Florida. Trusted HCB center-console yacht dealer serving Fort Lauderdale, Miami, Palm Beach, Naples, and Stuart."
        />
        <meta
          name="keywords"
          content=" Center Console Yachts, HCB 39 Speciale, HCB 42 Siesta, HCB 53 Sueños, HCB 65 Estrella, HCB 48 Lujo,39 Speciale,42 Siesta,53 Sueños,65 Estrella,48 Lujo,39 HCB Speciale,42 HCB Siesta,53 HCB Sueños,65 HCB Estrella,48 HCB Lujo, HCB yachts for sale, buy HCB yachts, HCB yachts dealer, new HCB yachts for sale, pre-owned HCB yachts for sale, used HCB yachts, HCB center console yachts,HCB Yachts for sale in Florida, HCB fishing yachts for sale, luxury HCB yachts for sale, HCB custom yachts, HCB 39 Speciale for sale, HCB 42 Siesta for sale, HCB 53 Sueños for sale, HCB 65 Estrella for sale, HCB 48’ Lujo for sale, HCB yachts for sale in Florida, HCB yachts for sale in Fort Lauderdale, HCB yachts for sale in Miami, HCB yachts for sale in the USA, HCB yachts near me, best prices on HCB yachts, HCB yacht financing options, HCB yacht specifications and prices, HCB yachts with advanced features, where to buy HCB yachts, HCB luxury fishing yachts, custom HCB yachts for sale, HCB offshore yachts for sale, HCB 39 Speciale for sale, HCB 39 Speciale review, Best HCB Yachts dealer, Luxury center console HCB 39,High-performance HCB 39 Speciale, Offshore fishing boat HCB 39,HCB 39 Speciale specs, Customizable HCB 39,HCB Yachts 39 Speciale price, HCB 42 Siesta for sale, HCB 42 Siesta walkthrough, HCB 42 Siesta offshore boat, Luxury sport fishing yacht HCB 42,HCB 42 Siesta price, HCB 42 Siesta performance, High-performance center console HCB 42,HCB 42 Siesta review, HCB 53 Sueños for sale, HCB 53 Sueños walkthrough, Largest luxury center console HCB 53,HCB 53 Sueños specs, HCB 53 Sueños review, HCB 53 Sueños offshore fishing, HCB 53 Sueños price, High-performance HCB 53 Sueños, HCB 65 Estrella for sale, HCB 65 Estrella walkthrough, HCB 65 Estrella yacht review, World’s largest center console HCB 65,HCB 65 Estrella specs, HCB 65 Estrella luxury yacht, HCB 65 Estrella price, Ultimate offshore HCB 65 Estrella, HCB 48 Lujo for sale, HCB 48 Lujo walkthrough, HCB 48 Lujo center console, HCB 48 Lujo price, HCB 48 Lujo performance, HCB 48 Lujo specs, High-performance center console HCB 48,HCB 48 Lujo luxury yacht, 65 Estrella World’s largest HCB dealer "
        />
        <meta
          name="keywords"
          content="yachts for sale, Luxury yachts for sale, High-performance yachts,  Yachts for sale in Fort Lauderdale, Yachts for sale in Miami,  Yachts for sale in Bahamas, Exclusive yacht listings, Pre-owned luxury yachts, Custom yachts for sale, Sportfishing yachts,  Center console yachts for sale, Mega yachts for sale, Motor yachts for sale, Premium yachts for sale, Luxury center-console boats, Superyachts for sale, Yacht sales and brokerage, New yachts for sale, Luxury yacht dealers, Private yacht sales, Yacht listings online, Luxury boats for sale, Buy a luxury yacht, Luxury yacht brokers, Charter yachts for sale, High-end boats for sale, Yachts for sale in Stuart, Yachts for sale in Naples,  Yachts for sale in Florida, New yachts for sale, Used yachts for sale, Buy new yachts, Buy used yachts, Pre-owned yachts for sale, Affordable yachts for sale, Luxury used yachts for sale, New and used yachts listings, New and secondhand yachts, Yacht dealerships new and used ,New motor yachts for sale, Used motor yachts for sale, New sailboats for sale, Used sailboats for sale, New center console yachts for sale, Used center console yachts for sale, New luxury yachts for sale, Used luxury yachts for sale, New sportfishing yachts for sale, Used sportfishing yachts for sale , New yachts for sale in Fort Lauderdale,  Used yachts for sale in Fort Lauderdale, Best deals on new yachts in Fort Lauderdale,  Certified pre-owned yachts in Fort Lauderdale,  Used and new yachts in Bahamas, Florida"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="HCB Yachts for sale" />
        <meta
          property="og:description"
          content="Find new and used HCB Yachts for sale in Florida. Trusted HCB center-console yacht dealer serving Fort Lauderdale, Miami, Palm Beach, Naples, and Stuart."
        />
        <meta
          property="og:url"
          content="https://www.megasails.com/yachts-for-sale"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://megasails.s3.us-east-2.amazonaws.com/hcb+yachts+for+sale+-Megasails.jpg"
        />
        <meta property="og:site_name" content="MegaSails" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "75px",
        }}
      ></div>
      <div className="px-2 py-4" style={{ backgroundColor: "#ebf0f7" }}>
        <Container fluid>
          <Form onSubmit={handleSubmit}>
            <Row className="g-1">
              <Col xs={12} md={4} lg={2}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mb-0">Make</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    as="select"
                    value={make}
                    onChange={(e) => {
                      setMake(e.target.value);
                      setClassName("All");
                    }}
                  >
                    <option value="All">All</option>
                    {makeStringNames.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group>
                  <Form.Label className="mb-0">Condition</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    as="select"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                  >
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                    <option value="All">All</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group>
                  <Form.Label className="mb-0">Class Names</Form.Label>
                  <Form.Control
                    className="rounded-0"
                    as="select"
                    value={className}
                    onChange={(e) => {
                      setClassName(e.target.value);
                      setMake("All");
                    }}
                  >
                    <option value="All">All</option>
                    {classNames.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mb-0">Length</Form.Label>
                  <Row className="g-0">
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="min"
                        value={minLength}
                        onChange={(e) => setMinLength(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="max"
                        value={maxLength}
                        onChange={(e) => setMaxLength(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="mb-0">Year</Form.Label>
                  <Row className="g-0">
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="min"
                        value={minYear}
                        onChange={(e) => setMinYear(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="max"
                        value={maxYear}
                        onChange={(e) => setMaxYear(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label className="mb-0">Price</Form.Label>
                  <Row className="g-0">
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        className="rounded-0"
                        type="text"
                        placeholder="max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center">
              <Button
                className="btn-sm custom-contact-btn p-2 text-white"
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i> Advanced Search
              </Button>
            </div>
          </Form>
        </Container>
      </div>
      <Container fluid className="col-lg-11">
        <Row className="g-3 mt-4">
          {error && (
            <div className="text-center">
              <h2>No matches found.</h2>
              <p>
                Retry adjusting your search filters or contact us @
                broker@megasails.com
              </p>{" "}
            </div>
          )}
          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant="warning" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
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
                      src={yacht.Images[0].Uri}
                      className="card-img-top"
                      alt="..."
                      loading="lazy"
                      height={"260px"}
                    />
                    <div className="card-body p-2">
                      <div className="text-start">
                        <h5 className="fw-bold mb-1">
                          <div>
                            {truncateText(
                              `${yacht.MakeString} ${yacht.Model}`,
                              25
                            )}
                          </div>
                        </h5>
                      </div>
                      <p className="text-dark mb-0 ">
                        {/* <i className="fa-solid fa-location-dot text-secondary"></i>{" "} */}
                        {truncateText(
                          `${yacht.ModelYear} | ${yacht.BoatLocation.BoatCityName}, ${yacht.BoatLocation.BoatStateCode}, ${yacht.BoatLocation.BoatCountryID}`,
                          30
                        )}
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
              {/* First advertisement after every 9 yachts */}
              {(index + 1) % adInterval === 0 &&
                index !== yachts.length - 1 && (
                  <React.Fragment key={`advertisement-${index}`}>
                    {advertisementCol}
                  </React.Fragment>
                )}
              {index === 2 && <Advertisement1 />}
              {index === 10 && <Advertisement2 />}
              {index === 18 && <Advertisement3 />}
            </>
          ))}
        </Row>

        <div className="d-flex justify-content-center py-4">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn custom-contact-btn fw-bold p-2 fs-6"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              <i className="fa-solid fa-angles-left"></i> Prev
            </button>
            <button type="button" className="btn custom-contact-btn  p-2 fs-6">
              Page {page} of {totalPages}
            </button>
            <button
              type="button"
              className="btn custom-contact-btn fw-bold p-2 fs-6"
              onClick={handleNextPage}
              disabled={page === totalPages}
            >
              Next <i className="fa-solid fa-angles-right "></i>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Search;
