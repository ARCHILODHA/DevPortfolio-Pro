import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

import ScrollToTop from "./components/common/ScrollToTop";
function App() {

  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>

      <ScrollToTop />

      <Navbar />

      <AppRoutes />

      <Footer />

    </div>
  );
}

export default App;