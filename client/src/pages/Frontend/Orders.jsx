import { Eye, Download } from "lucide-react";

export default function MyOrderPage() {
  const orders = [
    {
      id: "#100005",
      items: 1,
      date: "06 Mar, 2025 06:17 AM",
      status: "Pending",
      total: "$30.00",
    },
    {
      id: "#100004",
      items: 1,
      date: "06 Mar, 2025 04:19 AM",
      status: "Returned",
      total: "$24.99",
    },
    {
      id: "#100003",
      items: 2,
      date: "06 Mar, 2025 04:14 AM",
      status: "Delivered",
      total: "$89.98",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-blue-100 text-blue-600";
      case "Returned":
        return "bg-gray-200 text-gray-600";
      case "Delivered":
        return "bg-green-100 text-[#00965f]";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-full">
      
      <div className="bg-white rounded-xl shadow p-6 w-full">
        
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">My Order</h2>

        {/* Header Row */}
        <div className="grid grid-cols-12 bg-gray-100 p-3 rounded-lg text-sm font-medium text-gray-600">
          <div className="col-span-6">Order List</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Total</div>
          <div className="col-span-2 text-center">Action</div>
        </div>

        {/* Orders */}
        <div className="mt-4 space-y-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-12 items-center border rounded-xl p-4"
            >
              
              {/* Order Info */}
              <div className="col-span-6 flex items-center gap-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
                  alt="product"
                  className="w-14 h-14 rounded-lg object-cover"
                />

                <div>
                  <p className="font-medium text-[#00965f]">
                    Order {order.id}
                  </p>
                  <p className="text-sm text-gray-500">
                    {order.items} Items
                  </p>
                  <p className="text-xs text-gray-400">
                    {order.date}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="col-span-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Total */}
              <div className="col-span-2 font-medium">
                {order.total}
              </div>

              {/* Actions */}
              <div className="col-span-2 flex justify-center gap-3">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <Eye size={16} />
                </button>

                <button className="p-2 bg-[#00965f]/10 text-[#00965f] rounded-full hover:bg-[#00965f]/20">
                  <Download size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}