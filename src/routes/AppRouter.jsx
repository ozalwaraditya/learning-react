import { Route, Routes } from "react-router-dom";
import Counter from "../Counter";
import Contact from "../Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Routing from "../Routing";
import ProductDetails from "../pages/product/ProductDetails";
import AllProducts from "../pages/product/category/AllProducts";
import ProductLayout from "../pages/product/ProductLayout";
import HomeCategory from "../pages/product/category/HomeCategory";
import ClothingCategory from "../pages/product/category/ClothingCategory";
import ElectronicCategory from "../pages/product/category/ElectronicCategory";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/count-o-pedia" element={<Counter />} />
      <Route path="/contact-o-pedia" element={<Contact />} />
      <Route path="/route-o-pedia" element={<Routing />} />
      <Route path="/route-o-pedia/category" element={<ProductLayout />}>
        <Route index element={<AllProducts />} />
        <Route path="electronics" element={<ElectronicCategory />} />
        <Route path="home" element={<HomeCategory />} />
        <Route path="clothing" element={<ClothingCategory />} />
      </Route>
      <Route path="/route-o-pedia/item/:id" element={<ProductDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
