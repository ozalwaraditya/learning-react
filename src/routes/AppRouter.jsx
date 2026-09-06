import { Route, Routes } from "react-router-dom";
import Counter from "../Counter";
import Contact from "../Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Routing from "../Routing";
import ProductDetails from "../pages/product/ProductDetails";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/count-o-pedia" element={<Counter />} />
      <Route path="/contact-o-pedia" element={<Contact />} />
      <Route path="/route-o-pedia" element={<Routing />} />
      <Route path="/route-o-pedia/item/:id" element={<ProductDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
