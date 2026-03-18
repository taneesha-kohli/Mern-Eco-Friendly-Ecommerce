import { ArrowLeft, Star } from "lucide-react";

export default function AddFeaturedProduct() {
  const products = [
    {
      id: "#P101",
      name: "Eco Cotton T-Shirt",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: "#P102",
      name: "Reusable Bottle",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    },
    {
      id: "#P103",
      name: "Eco Bag",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1593032465171-8c9dfb7db6c4",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-[50%]">
      
      <div className="bg-white rounded-xl shadow p-6">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <ArrowLeft size={18} />
          </button>
          <h2 className="text-xl font-semibold">Add Featured Products</h2>
        </div>

        {/* Product List */}
        <div className="space-y-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-[#00965f]"
            >
              
              {/* Left */}
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 rounded-lg object-cover"
                />

                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">₹{product.price}</p>
                </div>
              </div>

              {/* Right */}
              <div>
                <Star
                  size={20}
                  className="text-gray-300"
                />
              </div>

            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="px-5 py-2 border rounded-lg hover:bg-gray-100">
            Cancel
          </button>

          <button className="px-5 py-2 bg-[#00965f] text-white rounded-lg hover:opacity-90">
            Add Selected
          </button>
        </div>

      </div>
    </div>
  );
}