import {
  ref,
  get,
  query,
  orderByChild,
  equalTo,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase";
import { Spinner } from "react-bootstrap";
import NavBar from "./Navbar";

const VerifyEmailPage = () => {
  const { token } = useParams(); // Extract token from URL
  const [verificationToken, setVerificationToken] = useState(token);
  const [subscribersData, setSubscribersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Get a reference to the "subscribers" collection in Firebase
        const subscribersRef = ref(database, "subscribers");

        // Create a query to fetch subscribers with matching verificationToken
        const subscribersQuery = query(
          subscribersRef,
          orderByChild("verificationToken"),
          equalTo(token)
        );

        // Fetch data based on the query
        const snapshot = await get(subscribersQuery);

        if (snapshot.exists()) {
          // Convert snapshot data to an array
          const subscribersArray = [];
          snapshot.forEach((childSnapshot) => {
            // Get the ID of the data and add it to the object
            const id = childSnapshot.key;
            const dataWithId = { id, ...childSnapshot.val() };
            subscribersArray.push(dataWithId);
          });
          setSubscribersData(subscribersArray);
          setVerificationSuccess(true);

          // Update verification status to "Successful" for each matched subscriber
          subscribersArray.forEach((subscriber) => {
            update(ref(database, `subscribers/${subscriber.id}`), {
              verification: "Successful",
            });
          });
        } else {
          // Token doesn't exist or doesn't match
          console.log("Verification token is invalid.");
        }
      } catch (error) {
        // Handle errors
        console.error("Error checking verification token:", error);
      } finally {
        // Set loading state to false after fetching data
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token]); // Dependency array to re-run effect when token changes

  return (
    <>
      <NavBar />
      <div
        style={{
          background:
            "radial-gradient(ellipse at 50% -50%, #6c94ff 0, #000 100%)",
          height: "95px",
        }}
      ></div>
      <div className="container col-lg-8 bg-light my-lg-5 p-5 vh-100">
        <div className="d-flex justify-content-center align-items-center ">
          <div className="text-center">
            <p>
              Thank you for subscribing to American Yacht Group's newsletter.
              You will now receive regular updates and news about our services
              and offers.
            </p>
            {verificationSuccess ? (
              <h1>
                Email Verification{" "}
                <span className="text-success">Successful</span>
              </h1>
            ) : (
              <h1>Verifying Your Email</h1>
            )}
            <p>
              <span className="fw-bold">Verification Token : </span>
              {verificationToken}
            </p>
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div>{/* Display subscribersData here */}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmailPage;
