import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import Header from "./components/header-desktop/Header";
import LaunchPad from "./pages/launchpad-page/LaunchPad";
import Footer from "./components/footer/Footer";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  useEffect(() => {
    const preventHorizontalScroll = (e) => {
      if (e.touches && e.touches.length === 1) {
        const touch = e.touches[0];
        if (touch.clientX < 10 || touch.clientX > window.innerWidth - 10) {
          e.preventDefault();
        }
      }
    };

    // Adding event listener to prevent default horizontal touchmove behavior
    document.body.addEventListener('touchmove', preventHorizontalScroll, { passive: false });

    return () => {
      // Cleanup event listener on component unmount
      document.body.removeEventListener('touchmove', preventHorizontalScroll);
    };
  }, []);

  return (
    <>
      <Router>
        <Header isMenuOpen={showMobileMenu} onOpenMenu={() => setShowMobileMenu(!showMobileMenu)}/>
        {showMobileMenu && <MobileMenu />}
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/launchpad" element={<LaunchPad />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
