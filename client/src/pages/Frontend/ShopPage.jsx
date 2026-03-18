import React from "react";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white p-6 px-[5vw] flex gap-6">
      {/* Sidebar Filters */}
      <div className="w-64 border-r pr-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          <div className="flex flex-col gap-2 text-sm">
            <label><input type="checkbox" /> Clothing</label>
            <label><input type="checkbox" /> Footwear</label>
            <label><input type="checkbox" /> Bags</label>
            <label><input type="checkbox" /> Accessories</label>
            <label><input type="checkbox" /> Beauty & Personal Care</label>
            <label><input type="checkbox" /> Home & Living</label>
            <label><input type="checkbox" /> Reusable Products</label>
            <label><input type="checkbox" /> Kitchen & Dining</label>
            <label><input type="checkbox" /> Fitness & Outdoor</label>
          </div>
        </div>

        {/* Brands */}
        <div>
          <h3 className="font-semibold mb-2">Brand</h3>
          <div className="flex flex-col gap-2 text-sm">
            <label><input type="checkbox" /> Patagonia</label>
            <label><input type="checkbox" /> Veja</label>
            <label><input type="checkbox" /> Allbirds</label>
            <label><input type="checkbox" /> Lush</label>
            <label><input type="checkbox" /> Baggu</label>
            <label><input type="checkbox" /> Tentree</label>
            <label><input type="checkbox" /> Pangaia</label>
            <label><input type="checkbox" /> Reformation</label>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Eco Shop</h1>

          {/* Sort Dropdown */}
          <select className="border px-3 py-2 rounded-md text-sm">
            <option>Sort By</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Title: A - Z</option>
            <option>Title: Z - A</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Organic Cotton T-Shirt</h3>
              <p className="text-sm text-gray-500">Pangaia</p>
              <p className="text-green-600 font-bold">₹1,499</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Eco Sneakers</h3>
              <p className="text-sm text-gray-500">Veja</p>
              <p className="text-green-600 font-bold">₹6,999</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&q=80"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Reusable Tote Bag</h3>
              <p className="text-sm text-gray-500">Baggu</p>
              <p className="text-green-600 font-bold">₹999</p>
            </div>
          </div>

          {/* Product 4 */}
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Natural Face Wash</h3>
              <p className="text-sm text-gray-500">Lush</p>
              <p className="text-green-600 font-bold">₹799</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
