import { Link } from "react-router-dom";
import { getAllProducts } from "../../data/products";

function ProductListByCategory({ title, description, category }) {
  const products = getAllProducts();

  const filteredProducts =
    category.toLowerCase() === "all"
      ? getAllProducts()
      : products.filter(
          (product) =>
            product.category.toLowerCase() === category.toLowerCase(),
        );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-2">{title}</h2>

      <p className="text-center text-muted">{description}</p>

      <div className="row pt-4">
        {filteredProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card bg-dark text-white h-100">
              <div className="card-body">
                <h4 className="card-title">{product.name}</h4>

                <p className="card-text">Category: {product.category}</p>

                <p className="card-text">Price: ₹{product.price}</p>

                <Link
                  to={`/route-o-pedia/item/${product.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="text-center">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductListByCategory;
