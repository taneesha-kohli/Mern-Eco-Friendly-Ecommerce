import { ArrowLeft, Upload } from "lucide-react";
import { Link } from "react-router-dom";

export default function AddBannerPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center w-[50%]">
      
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-6xl">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <ArrowLeft size={18} />
          </button>
          <h2 className="text-xl font-semibold"> Add Banner </h2>
        </div>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Title */}
          <div>
            <label className="text-sm font-medium">Banner Title</label>
            <input
              type="text"
              placeholder="Enter banner title"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Redirect Link */}
          <div>
            <label className="text-sm font-medium">Redirect Link</label>
            <input
              type="text"
              placeholder="Enter redirect URL (optional)"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Banner Image Upload */}
          <div>
            <label className="text-sm font-medium">Banner Image</label>

            <div className="mt-2 border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-[#00965f]">
              <Upload size={28} />
              <p className="mt-2 text-sm">
                Click or drag image to upload
              </p>
              <span className="text-xs text-gray-400 mt-1">
                Recommended size: 1200 x 400 px
              </span>
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
            Add Banner
          </button>
        </div>

      </div>
    </div>
  );
}