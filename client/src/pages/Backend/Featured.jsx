import { Star, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturedProductsPage() {
  const featuredProducts = [
    {
      id: "#P101",
      name: "Eco Cotton T-Shirt",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: "#P102",
      name: "Reusable Water Bottle",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="bg-white rounded-xl shadow p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Featured Products</h2>

          <Link to="/admin/featured-add">
          <button className="flex items-center gap-2 bg-[#00965f] text-white px-4 py-2 rounded-lg hover:opacity-90">
            <Plus size={16} /> Add Product
          </button>
          </Link>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-5 bg-gray-100 p-3 rounded-lg text-sm font-medium text-gray-600">
          <div>Product</div>
          <div>ID</div>
          <div>Price</div>
          <div>Status</div>
          <div className="text-center">Action</div>
        </div>

        {/* Product Rows */}
        <div className="mt-4 space-y-3">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center p-3 border rounded-lg"
            >
              
              {/* Product Info */}
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <p className="font-medium">{product.name}</p>
              </div>

              <div>{product.id}</div>

              <div>₹{product.price}</div>

              {/* Featured Status */}
              <div>
                <span className="flex items-center gap-1 text-[#00965f] text-sm font-medium">
                  <Star size={16} fill="#00965f" /> Featured
                </span>
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-2">
                
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