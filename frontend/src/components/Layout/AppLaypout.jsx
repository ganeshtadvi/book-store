import { Navbar } from "../UI/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { Footer } from "../UI/Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
