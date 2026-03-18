import React from 'react'

const Dashboard = () => {
  return (
    <>
         {/* Main Content */}
      <div className="flex-1 p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              alt="admin"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total Orders</p>
            <h2 className="text-2xl font-bold mt-2">1,245</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total Products</p>
            <h2 className="text-2xl font-bold mt-2">320</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Users</p>
            <h2 className="text-2xl font-bold mt-2">890</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Revenue</p>
            <h2 className="text-2xl font-bold mt-2 text-[#00965f]">
              ₹2,45,000
            </h2>
          </div>

        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow mt-8 p-6">
          <h2 className="text-lg font-semibold mb-4">
            Recent Orders
          </h2>

          {/* Table Header */}
          <div className="grid grid-cols-5 bg-gray-100 p-3 rounded-lg text-sm font-medium text-gray-600">
            <div>Order ID</div>
            <div>User</div>
            <div>Status</div>
            <div>Total</div>
            <div>Date</div>
          </div>

          {/* Rows */}
          <div className="mt-3 space-y-3">
            
            <div className="grid grid-cols-5 p-3 border rounded-lg">
              <div>#10001</div>
              <div>Shivani</div>
              <div className="text-green-600">Delivered</div>
              <div>₹1,200</div>
              <div>12 Mar 2026</div>
            </div>

            <div className="grid grid-cols-5 p-3 border rounded-lg">
              <div>#10002</div>
              <div>Rahul</div>
              <div className="text-yellow-600">Pending</div>
              <div>₹850</div>
              <div>13 Mar 2026</div>
            </div>

            <div className="grid grid-cols-5 p-3 border rounded-lg">
              <div>#10003</div>
              <div>Anjali</div>
              <div className="text-red-500">Cancelled</div>
              <div>₹500</div>
              <div>14 Mar 2026</div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard
