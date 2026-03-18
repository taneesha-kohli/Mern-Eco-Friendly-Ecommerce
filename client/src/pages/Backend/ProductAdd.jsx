import { ArrowLeft, Upload } from "lucide-react";

export default function AddProductPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center w-full">
      
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-full">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <ArrowLeft size={18} />
          </button>
          <h2 className="text-xl font-semibold">Add Product</h2>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Product Name */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Price */}
          <div>
            <label className="text-sm font-medium">Price (₹)</label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="text-sm font-medium">Stock Quantity</label>
            <input
              type="number"
              placeholder="Enter stock"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium">Category</label>
            <select className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]">
              <option>Select category</option>
              <option>Clothing</option>
              <option>Footwear</option>
              <option>Bags</option>
              <option>Accessories</option>
              <option>Beauty & Personal Care</option>
            </select>
          </div>

          {/* Brand */}
          <div>
            <label className="text-sm font-medium">Brand</label>
            <input
              type="text"
              placeholder="Enter brand name"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Description</label>
            <textarea
              rows="4"
              placeholder="Enter product description..."
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Product Image</label>

            <div className="mt-2 border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-[#00965f]">
              <Upload size={28} />
              <p className="mt-2 text-sm">
                Click or drag image to upload
              </p>
              <input type="file" className="hidden" />
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium">Status</label>
            <select className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

        </form>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="px-5 py-2 border rounded-lg hover:bg-gray-100">
            Cancel
          </button>

          <button className="px-5 py-2 bg-[#00965f] text-white rounded-lg hover:opacity-90">
            Add Product
          </button>
        </div>

      </div>
    </div>
  );
}