const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    category: "Electronics",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 799,
    category: "Clothing",
  },
  {
    id: 4,
    name: "Jeans",
    price: 1499,
    category: "Clothing",
  },
  {
    id: 5,
    name: "Coffee Mug",
    price: 299,
    category: "Home",
  },
  {
    id: 6,
    name: "Table Lamp",
    price: 1299,
    category: "Home",
  },
];

// Get all products
function getAllProducts() {
  return products;
}

// Get product by ID
function getProductById(id) {
  return products.find((product) => product.id === id);
}

// Get products by category
function getProductsByCategory(category) {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase(),
  );
}

// Get all unique categories
function getAllCategories() {
  return [...new Set(products.map((product) => product.category))];
}

export {
  products,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getAllCategories,
};
