import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllProducts } from "../../data/products";

function ProductDetails() {
  const { id } = useParams();

  const products = getAllProducts();
  const navigate = useNavigate();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h2>Product Not Found</h2>

        <p className="text-muted">
          The product you are looking for does not exist.
        </p>

        <button
          className="btn btn-secondary mb-4"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <button
        className="btn btn-secondary mb-4"
        onClick={() => window.history.back()}
      >
        ← Back
      </button>

      <div className="card bg-dark text-white">
        <div className="card-body">
          <h1>{product.name}</h1>

          <p>Category: {product.category}</p>

          <p>Price: ₹{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
