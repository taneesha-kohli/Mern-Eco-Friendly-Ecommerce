import React from "react";

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Item 1 */}
        <div className="border rounded-xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Organic Cotton T-Shirt</h3>
            <p className="text-sm text-gray-500">Pangaia</p>
            <p className="text-green-600 font-bold">₹1,499</p>

            <div className="flex gap-2 mt-3">
              <button className="flex-1 bg-green-600 text-white py-2 rounded-md">
                Add to Cart
              </button>
              <button className="flex-1 border py-2 rounded-md bg-red-600 text-white">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="border rounded-xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Eco Sneakers</h3>
            <p className="text-sm text-gray-500">Veja</p>
            <p className="text-green-600 font-bold">₹6,999</p>

            <div className="flex gap-2 mt-3">
              <button className="flex-1 bg-green-600 text-white py-2 rounded-md">
                Add to Cart
              </button>
              <button className="flex-1 border py-2 rounded-md bg-red-600 text-white">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="border rounded-xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&q=80"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Reusable Tote Bag</h3>
            <p className="text-sm text-gray-500">Baggu</p>
            <p className="text-green-600 font-bold">₹999</p>

            <div className="flex gap-2 mt-3">
              <button className="flex-1 bg-green-600 text-white py-2 rounded-md">
                Add to Cart
              </button>
              <button className="flex-1 border py-2 rounded-md bg-red-600 text-white">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="border rounded-xl overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Natural Face Wash</h3>
            <p className="text-sm text-gray-500">Lush</p>
            <p className="text-green-600 font-bold">₹799</p>

            <div className="flex gap-2 mt-3">
              <button className="flex-1 bg-green-600 text-white py-2 rounded-md">
                Add to Cart
              </button>
              <button className="flex-1 border py-2 rounded-md bg-red-600 text-white">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
