import React from "react";
import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Table */}
        <div className="lg:col-span-2 mr-11 ">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-sm text-gray-500">
                <th className="pb-3">Product</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Subtotal</th>
                <th className="pb-3 text-right">Remove</th>
              </tr>
            </thead>

            <tbody>
              {/* Item 1 */}
              <tr className="border-b">
                <td className="py-4 flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80"
                    className="w-20 h-20 object-cover"
                  />
                  <span>Black Hoodie</span>
                </td>
                <td>€70.00</td>
                <td>
                  <div className="flex items-center border w-fit">
                    <button className="px-2 py-1 border-r">-</button>
                    <input className="pl-4 w-[40px]"  type="number" value={1}/>
                    <button className="px-2 py-1 border-l">+</button>
                  </div>
                </td>
                <td>€70.00</td>
                <td className="text-right text-gray-500 cursor-pointer text-[25px]">×</td>
              </tr>

              {/* Item 2 */}
              <tr className="border-b">
                <td className="py-4 flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80"
                    className="w-20 h-20 object-cover"
                  />
                  <span>Sleeveless Shirt</span>
                </td>
                <td>€135.00</td>
                <td>
                  <div className="flex items-center border w-fit">
                    <button className="px-2 py-1 border-r">-</button>
                     <input className="pl-4 w-[40px]"  type="number" value={1}/>
                    <button className="px-2 py-1 border-l">+</button>
                  </div>
                </td>
                <td>€135.00</td>
                <td className="text-right text-gray-500 cursor-pointer text-[25px] ">×</td>
              </tr>
            </tbody>
          </table>

          {/* Coupon */}
          <div className="flex gap-3 mt-6">
            <input
              type="text"
              placeholder="Coupon code"
              className="border px-3 py-2 w-48"
            />
            <button className="border px-4 py-2">Apply coupon</button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="border p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Cart totals</h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>€315.00</span>
          </div>

          <div className="mb-4">
            <p className="mb-2">Shipping</p>
            <div className="flex flex-col gap-2 text-sm">
              <label>
                <input type="radio" name="shipping" /> Free shipping
              </label>
              <label>
                <input type="radio" name="shipping" /> Flat rate: €10.00
              </label>
              <label>
                <input type="radio" name="shipping" /> Pickup: €15.00
              </label>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-lg border-t pt-3">
            <span>Total</span>
            <span>€315.00</span>
          </div>

          <button className="w-full mt-6 bg-[var(--main)] text-white py-3">
           <Link to="/cart/checkout"> Proceed to checkout </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
