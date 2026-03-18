import { ArrowLeft, Upload } from "lucide-react";

export default function EditBannerPage() {
  const banner = {
    title: "Summer Sale",
    link: "/sale",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
    status: "Active",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center w-[50%]">
      
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-2xl">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <ArrowLeft size={18} />
          </button>
          <h2 className="text-xl font-semibold">Edit Banner</h2>
        </div>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Title */}
          <div>
            <label className="text-sm font-medium">Banner Title</label>
            <input
              type="text"
              defaultValue={banner.title}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Redirect Link */}
          <div>
            <label className="text-sm font-medium">Redirect Link</label>
            <input
              type="text"
              defaultValue={banner.link}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Image Preview + Upload */}
          <div>
            <label className="text-sm font-medium">Banner Image</label>

            <div className="mt-2 flex items-center gap-4">
              
              {/* Preview */}
              <img
                src={banner.image}
                alt="banner"
                className="w-32 h-20 rounded-lg object-cover border"
              />

              {/* Upload */}
              <div className="border-2 border-dashed rounded-lg p-4 flex items-center gap-2 text-gray-500 cursor-pointer hover:border-[#00965f]">
                <Upload size={20} />
                <span className="text-sm">Change Image</span>
                <input type="file" className="hidden" />
              </div>

            </div>
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium">Status</label>
            <select
              defaultValue={banner.status}
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            >
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
            Update Banner
          </button>
        </div>

      </div>
    </div>
  );
}