import { MapPin, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function AddressPage() {
  const address = {
    type: "Permanent",
    name: "Shivani",
    phone: "+918218890148",
    city: "New Delhi",
    zip: "110001",
    address: "Connaught Place, New Delhi, India",
    country: "India",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-full">
      
      <div className="bg-white rounded-xl shadow p-6 w-full">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">My Address</h2>

       <Link to="/profile/address-add">
          <button className="flex items-center gap-2 bg-[#00965f] text-white px-4 py-2 rounded-lg hover:opacity-90">
            <MapPin size={16} /> Add Address
          </button>
          </Link>
        </div>

        {/* Address Card */}
        <div className="border rounded-xl overflow-hidden w-full md:w-[500px]">
          
          {/* Top Bar */}
          <div className="flex justify-between items-center bg-gray-100 px-4 py-3">
            <p className="font-medium">
              {address.type}{" "}
              <span className="text-sm text-gray-500">
                ( Shipping address )
              </span>
            </p>

            <div className="flex gap-3">
              <Link to="/profile/address-edit">
              <button className="text-blue-600 hover:scale-110 transition">
                <Pencil size={18} />
              </button>
              </Link>
              <button className="text-red-500 hover:scale-110 transition">
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* Address Details */}
          <div className="p-4 space-y-2 text-sm">
            
            <p>
              <span className="text-gray-500 w-24 inline-block">Name</span> :{" "}
              {address.name}
            </p>

            <p>
              <span className="text-gray-500 w-24 inline-block">Phone</span> :{" "}
              {address.phone}
            </p>

            <p>
              <span className="text-gray-500 w-24 inline-block">City</span> :{" "}
              {address.city}
            </p>

            <p>
              <span className="text-gray-500 w-24 inline-block">Zip code</span> :{" "}
              {address.zip}
            </p>

            <p>
              <span className="text-gray-500 w-24 inline-block">Address</span> :{" "}
              {address.address}
            </p>

            <p>
              <span className="text-gray-500 w-24 inline-block">Country</span> :{" "}
              {address.country}
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}