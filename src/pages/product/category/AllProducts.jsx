import ProductListByCategory from "../ProductListByCategory";

function AllProducts() {
  return (
    <ProductListByCategory
      title="All Products"
      description="Browse all available products across every category."
      category="all"
    />
  );
}

export default AllProducts;