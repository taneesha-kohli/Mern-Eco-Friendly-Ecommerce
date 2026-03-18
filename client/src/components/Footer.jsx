import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">

      <div className="max-w-full mx-auto px-[5vw] py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Eco Marketplace</h2>
          <p className="text-gray-400 text-sm">
            Discover eco-friendly products that help reduce waste and protect
            the environment. Shop sustainable fashion, home goods, and more.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Shop</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Clothing</li>
            <li className="hover:text-white cursor-pointer">Footwear</li>
            <li className="hover:text-white cursor-pointer">Bags</li>
            <li className="hover:text-white cursor-pointer">Accessories</li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Stay Updated</h2>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get special offers and eco tips.
          </p>

          <div className="flex border border-gray-700 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-black px-3 py-2 flex-1 outline-none text-sm"
            />
            <button className="bg-[#00965f] px-4 flex items-center">
              <Mail size={18} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Facebook className="cursor-pointer hover:text-green-500" />
            <Instagram className="cursor-pointer hover:text-green-500" />
            <Twitter className="cursor-pointer hover:text-green-500" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Eco Marketplace. All rights reserved.
      </div>

    </footer>
  )
}