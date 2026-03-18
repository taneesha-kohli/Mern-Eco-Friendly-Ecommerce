import { Plus, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  const products = [
    {
      id: "#P1001",
      name: "Eco Cotton T-Shirt",
      price: "₹799",
      stock: 25,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: "#P1002",
      name: "Reusable Water Bottle",
      price: "₹499",
      stock: 40,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    },
    {
      id: "#P1003",
      name: "Bamboo Toothbrush",
      price: "₹199",
      stock: 100,
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="bg-white rounded-xl shadow p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Products</h2>
          <Link to="/admin/product-add">
          <button className="flex items-center gap-2 bg-[#00965f] text-white px-4 py-2 rounded-lg hover:opacity-90">
            <Plus size={16} /> Add Product
          </button>
          </Link>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/3 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
          />
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-6 bg-gray-100 p-3 rounded-lg text-sm font-medium text-gray-600">
          <div>Product</div>
          <div>ID</div>
          <div>Price</div>
          <div>Stock</div>
          <div>Status</div>
          <div className="text-center">Action</div>
        </div>

        {/* Product Rows */}
        <div className="mt-4 space-y-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center p-3 border rounded-lg"
            >
              
              {/* Product Info */}
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <p className="font-medium">{product.name}</p>
              </div>

              <div>{product.id}</div>

              <div className="font-medium text-[#00965f]">
                {product.price}
              </div>

              <div>{product.stock}</div>

              {/* Status */}
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    product.stock > 0
                      ? "bg-green-100 text-[#00965f]"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-2">
                <Link to="/admin/product-edit">
                <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:scale-105">
                  <Pencil size={16} />
                </button>
                </Link>
                <button className="p-2 bg-red-100 text-red-500 rounded-full hover:scale-105">
                  <Trash2 size={16} />
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}