import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function BannerPage() {
  const banners = [
    {
      id: "#B001",
      title: "Summer Sale",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      status: "Active",
    },
    {
      id: "#B002",
      title: "Eco Collection",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      status: "Inactive",
    },
  ];

  const statusStyle = (status) =>
    status === "Active"
      ? "bg-green-100 text-[#00965f]"
      : "bg-gray-200 text-gray-600";

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="bg-white rounded-xl shadow p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Banners</h2>
          <Link to="/admin/banner-add">
          <button className="flex items-center gap-2 bg-[#00965f] text-white px-4 py-2 rounded-lg hover:opacity-90">
            <Plus size={16} /> Add Banner
          </button>
          </Link>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-5 bg-gray-100 p-3 rounded-lg text-sm font-medium text-gray-600">
          <div>Banner</div>
          <div>ID</div>
          <div>Status</div>
          <div>Preview</div>
          <div className="text-center">Action</div>
        </div>

        {/* Banner Rows */}
        <div className="mt-4 space-y-3">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center p-3 border rounded-lg"
            >
              
              {/* Banner Info */}
              <div className="flex items-center gap-3">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-16 h-10 rounded object-cover"
                />
                <p className="font-medium">{banner.title}</p>
              </div>

              <div>{banner.id}</div>

              {/* Status */}
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                    banner.status
                  )}`}
                >
                  {banner.status}
                </span>
              </div>

              {/* Preview */}
              <div>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <Eye size={16} />
                </button>
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-2">
                <Link to="/admin/banner-edit">
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