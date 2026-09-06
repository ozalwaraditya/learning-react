import { Route, Routes } from "react-router-dom";
import Counter from "../Counter";
import Contact from "../Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Routing from "../Routing";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/count-o-pedia" element={<Counter />} />
      <Route path="/contact-o-pedia" element={<Contact />} />
      <Route path="/routing" element={<Routing />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
