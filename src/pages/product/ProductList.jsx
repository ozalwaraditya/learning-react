import { Link } from "react-router-dom";
import { getAllProducts } from "../../data/products";

function ProductList() {
  const products = getAllProducts();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card bg-dark text-white h-100">
              <div className="card-body">
                <h4 className="card-title">{product.name}</h4>

                <p className="card-text">Category: {product.category}</p>

                <p className="card-text">Price: ₹{product.price}</p>

                <Link
                  to={"/route-o-pedia/item/" + product.id}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
