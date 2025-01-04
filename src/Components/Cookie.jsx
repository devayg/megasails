import { useEffect, useState } from "react";

const Cookie = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    // Check if the flag for showing the popup is stored in a cookie
    const cookieShown = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("cookiePopupShown="));

    // If the popup hasn't been shown before, set a cookie to indicate it has been shown
    if (!cookieShown) {
      setShowOffcanvas(true);
      document.cookie = "cookiePopupShown=true; max-age=86400;"; // Set the cookie to expire in 1 day
    }

    // Clean up function to remove timers and prevent memory leaks
    return () => {
      // No need to clear timers here as they are not used in this implementation
    };
  }, []);

  // Function to hide the popup when the close button is clicked
  const handleClose = () => {
    setShowOffcanvas(false);
  };

  return (
    <div className={`offcanvas  ${showOffcanvas ? "show" : ""}`}>
      <button className="close-btn" onClick={handleClose}>
        &times;
      </button>
      <div className="offcanvas-content">
        <div className="offcanvas-body">
          We collect cookies to enhance your browsing experience. By using our
          website, you agree to our use of cookies.
        </div>
      </div>
    </div>
  );
};

export default Cookie;
