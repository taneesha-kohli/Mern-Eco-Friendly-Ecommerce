import { Eye } from "lucide-react";

export default function AdminOrdersPage() {
  const orders = [
    {
      id: "#10001",
      customer: "Shivani",
      date: "12 Mar 2026",
      status: "Delivered",
      total: "₹1,200",
    },
    {
      id: "#10002",
      customer: "Rahul",
      date: "13 Mar 2026",
      status: "Pending",
      total: "₹850",
    },
    {
      id: "#10003",
      customer: "Anjali",
      date: "14 Mar 2026",
      status: "Cancelled",
      total: "₹500",
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-[#00965f]";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Cancelled":
        return "bg-red-100 text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="bg-white rounded-xl shadow p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Orders</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search orders..."
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
          />
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-6 bg-gray-100 p-3 rounded-lg text-sm font-medium text-gray-600">
          <div>Order ID</div>
          <div>Customer</div>
          <div>Date</div>
          <div>Status</div>
          <div>Total</div>
          <div className="text-center">Action</div>
        </div>

        {/* Orders List */}
        <div className="mt-4 space-y-3">
          {orders.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center p-3 border rounded-lg"
            >
              
              <div className="font-medium">{order.id}</div>
              <div>{order.customer}</div>
              <div>{order.date}</div>

              {/* Status */}
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="font-medium">{order.total}</div>

              {/* Actions */}
              <div className="flex justify-center gap-2">
                
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <Eye size={16} />
                </button>

                {/* Status Update */}
                <select className="text-xs border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#00965f]">
                  <option>Update</option>
                  <option>Pending</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}