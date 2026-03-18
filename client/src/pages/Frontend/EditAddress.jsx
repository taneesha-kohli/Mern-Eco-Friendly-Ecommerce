import { ArrowLeft } from "lucide-react";

export default function EditAddressPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center w-full">
      
      <div className="bg-white rounded-xl shadow p-6 w-full max-w-full">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <ArrowLeft size={18} />
          </button>
          <h2 className="text-xl font-semibold">Edit Address</h2>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Name */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              defaultValue="Shivani"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="text"
              defaultValue="+918218890148"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* City */}
          <div>
            <label className="text-sm font-medium">City</label>
            <input
              type="text"
              defaultValue="New Delhi"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Zip */}
          <div>
            <label className="text-sm font-medium">Zip Code</label>
            <input
              type="text"
              defaultValue="110001"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium">Full Address</label>
            <textarea
              rows="3"
              defaultValue="Connaught Place, New Delhi, India"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Country */}
          <div>
            <label className="text-sm font-medium">Country</label>
            <input
              type="text"
              defaultValue="India"
              className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
            />
          </div>

          {/* Address Type */}
          <div>
            <label className="text-sm font-medium">Address Type</label>
            <select className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]">
              <option>Home</option>
              <option>Work</option>
              <option selected>Permanent</option>
            </select>
          </div>

        </form>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="px-5 py-2 border rounded-lg hover:bg-gray-100">
            Cancel
          </button>

          <button className="px-5 py-2 bg-[#00965f] text-white rounded-lg hover:opacity-90">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}