import App from "../../App";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <App />
      <Footer />
    </div>
  );
}

export default MainLayout;
