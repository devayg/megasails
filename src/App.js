import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import YachtDetails from "./Pages/yachtDetails";
import Services from "./Pages/Services";
import Contact from "./Pages/ContactUs";
import HCB from "./Pages/HCB";
import Speciale from "./Pages/Speciale";
import Lujo from "./Pages/Lujo";
import Campeon from "./Pages/Campeon";
import Suenos from "./Pages/Suenos";
import Estrella from "./Pages/Estrella";
import IKON from "./Pages/IKON";
import NewsEvents from "./Pages/NewsEvents";
import Footer from "./Components/Footer";
import React, { useEffect, useState } from "react";
import NewsDetails from "./Pages/newsDetails";
import NewsDetails1 from "./Pages/newsDetails1";
import MarketingPolicy from "./Pages/MarketingPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
//import Advertisement from "./Pages/Advertisement";
import NewsDetails2 from "./Pages/newsDetails2";
import NewsDetails3 from "./Components/newsDetails3";
import NewsDetails4 from "./Pages/newsDetails4";
import Awake from "./Pages/Awake";
import JetBoards from "./Pages/JetBoards";
import Efoils from "./Pages/Efoils";
import VerifyEmailPage from "./Components/VerifyEmailPage";
import Cookie from "./Components/Cookie";
import MantaRacks from "./Pages/MantaRacks";
import { DataProvider } from "./dataContext";
import NewsDetails7 from "./Pages/NewsDetails7";
import NewsDetails8 from "./Pages/NewsDetails8";
import NewsDetails9 from "./Pages/newsDetails9";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      // Scroll to the top of the page whenever the route changes
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const navigate = useNavigate();
  const [dataForHome, setDataForHome] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      //console.log(event.data.source == 'chatbot')
      if (event.data.source !== "chatbot") {
        return;
      }
      if (event.data.source === "chatbot") {
        const { routePath } = event.data.data;
        navigate(routePath, { state: { chatbotMessageData: event.data.data } });
      } else if (event.data.source === "chatbot-toggle") {
        const { isToggled } = event.data.data;
        const iframe = document.getElementById("ayg-chatbot");
        if (iframe) {
          iframe.style.height = isToggled ? "180px" : "490px";
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);

  return (
    <DataProvider>
      <div className="App">
        <ScrollToTop />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/yachts-for-sale" element={<Search />} />
          <Route path="/yachtdetails/:id" element={<YachtDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/hcb" element={<HCB />} />
          <Route path="/39-speciale" element={<Speciale />} />
          <Route path="/42-lujo" element={<Lujo />} />
          <Route path="/48-campeon" element={<Campeon />} />
          <Route path="/53-suenos" element={<Suenos />} />
          <Route path="/65-estrella" element={<Estrella />} />
          <Route path="/ikon" element={<IKON />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route
            path="/news-details/preparing-for-hurricane"
            element={<NewsDetails />}
          />
          <Route
            path="/news-details/39-turns-head"
            element={<NewsDetails1 />}
          />
          <Route
            path="/news-details/campeon-innovation-award"
            element={<NewsDetails2 />}
          />
          <Route
            path="/news-details/opening-of-new-office"
            element={<NewsDetails3 />}
          />
          <Route
            path="/news-details/opening-of-new-office"
            element={<NewsDetails4 />}
          />
          <Route
            path="/news-details/brokerage-spotlight-53"
            element={<NewsDetails8 />}
          />
          <Route path="/news-details/nbs" element={<NewsDetails9 />} />
          <Route path="/news-details/flibs" element={<NewsDetails7 />} />
          <Route path="/awake" element={<Awake />} />
          <Route path="/awake-jetboards" element={<JetBoards />} />
          <Route path="/awake-efoils" element={<Efoils />} />

          <Route path="/mantaracks" element={<MantaRacks />} />

          <Route path="/marketing-policy" element={<MarketingPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* <Route path="/ads" element={<Advertisement />} /> */}
          <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
        </Routes>
        <Cookie />
        <Footer />
      </div>
    </DataProvider>
  );
}
function MainApp() {
  return (
    <Router>
      <DataProvider>
        <App />
      </DataProvider>
    </Router>
  );
}

export default MainApp;
