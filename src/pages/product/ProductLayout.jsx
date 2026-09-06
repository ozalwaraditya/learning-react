import { NavLink, Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product Categories</h2>

      <div className="d-flex justify-content-center gap-3 mb-4">
        <NavLink
          to="/route-o-pedia/category"
          end
          className={({ isActive }) =>
            `btn ${isActive ? "btn-dark" : "btn-primary"}`
          }
        >
          All Products
        </NavLink>

        <NavLink
          to="/route-o-pedia/category/electronics"
          className={({ isActive }) =>
            `btn ${isActive ? "btn-dark" : "btn-success"}`
          }
        >
          Electronics
        </NavLink>

        <NavLink
          to="/route-o-pedia/category/clothing"
          className={({ isActive }) =>
            `btn ${isActive ? "btn-dark" : "btn-warning"}`
          }
        >
          Clothing
        </NavLink>

        <NavLink
          to="/route-o-pedia/category/home"
          className={({ isActive }) =>
            `btn ${isActive ? "btn-dark" : "btn-info"}`
          }
        >
          Home
        </NavLink>
      </div>

      <div className="card p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default ProductLayout;
