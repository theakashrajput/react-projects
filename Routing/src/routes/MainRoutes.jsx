import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Products from "../components/Products";
import ProductsDetails from "../components/ProductDetails";
import ServiceDetail from "../components/ServiceDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/details/:name" element={<ProductsDetails />} />
      <Route path="/services" element={<Services />}>
        <Route path="/services/:service" element={<ServiceDetail />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default MainRoutes;
