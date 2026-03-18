import { Eye, Trash2 } from "lucide-react";

export default function AdminUsersPage() {
  const users = [
    {
      id: "#U1001",
      name: "Shivani",
      email: "shivani@gmail.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: "#U1002",
      name: "Rahul",
      email: "rahul@gmail.com",
      role: "Customer",
      status: "Blocked",
    },
    {
      id: "#U1003",
      name: "Admin",
      email: "admin@gmail.com",
      role: "Admin",
      status: "Active",
    },
  ];

  const statusStyle = (status) => {
    return status === "Active"
      ? "bg-green-100 text-[#00965f]"
      : "bg-red-100 text-red-500";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="bg-white rounded-xl shadow p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Users</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search users..."
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965f]"
          />
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-6 bg-gray-100 p-3 rounded-lg text-sm font-medium text-gray-600">
          <div>User</div>
          <div>ID</div>
          <div>Email</div>
          <div>Role</div>
          <div>Status</div>
          <div className="text-center">Action</div>
        </div>

        {/* Users List */}
        <div className="mt-4 space-y-3">
          {users.map((user, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center p-3 border rounded-lg"
            >
              
              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}`}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-medium">{user.name}</p>
              </div>

              <div>{user.id}</div>
              <div className="text-sm">{user.email}</div>
              <div>{user.role}</div>

              {/* Status */}
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(
                    user.status
                  )}`}
                >
                  {user.status}
                </span>
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-2">
                
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <Eye size={16} />
                </button>

                <button className="p-2 bg-red-100 text-red-500 rounded-full hover:scale-105">
                  <Trash2 size={16} />
                </button>

                {/* Status Toggle */}
                <select className="text-xs border rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#00965f]">
                  <option>Action</option>
                  <option>Activate</option>
                  <option>Block</option>
                </select>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}