import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import Header from "./components/header-desktop/Header";
import LaunchPad from "./pages/launchpad-page/LaunchPad";
import Footer from "./components/footer/Footer";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import { useState } from "react";

function App() {

  const [showMobileMenu, setShowMobileMenu] = useState(false)

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
