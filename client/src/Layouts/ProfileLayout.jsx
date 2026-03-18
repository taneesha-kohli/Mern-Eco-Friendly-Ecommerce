import { User, ShoppingBag, Heart, Mail, MapPin, Headphones, Ticket, Truck } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex p-6 gap-6">
      
      {/* Sidebar */}
      <div className="w-[260px] bg-white rounded-xl shadow p-4">
        <ul className="space-y-3">
         <Link to="/profile"> 
         <li className="flex items-center gap-3 p-3 bg-[#00965f]/10 text-[#00965f] rounded-lg font-medium">
            <User size={18} /> Profile Info 
          </li> 
          </Link>
          <Link to="/profile/orders">
          <li className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <ShoppingBag size={18} /> My Order
          </li>
      </Link>
      <Link to="/profile/wishlist">
          <li className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Heart size={18} /> Wish List
          </li>
       </Link>
       <Link to="/profile/inbox">
          <li className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Mail size={18} /> Inbox
          </li>
       </Link>
       <Link to="/profile/address">
          <li className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MapPin size={18} /> My Address
          </li>
        </Link>
          <li className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Headphones size={18} /> Support Ticket
          </li>

          <li className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Ticket size={18} /> Coupons
          </li>

          <li className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Truck size={18} /> Track Order
          </li>
        </ul>
      </div>

    <Outlet/>
    </div>
  );
}