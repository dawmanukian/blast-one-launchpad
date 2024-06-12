import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import Header from "./components/header-desktop/Header";
import LaunchPad from "./pages/launchpad-page/LaunchPad";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
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
