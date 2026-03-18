import { Heart, User, ShoppingCart, Search, LogIn, Menu } from "lucide-react"

// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu"

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="w-full">

      {/* TOP HEADER */}
      <div className="flex items-center justify-between px-[5vw] py-4 border-b">

        {/* Logo */}
       <Link to="/"><img src="logo.png" className="h-10 logo" /></Link>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center w-[40%] border rounded-md overflow-hidden h-[48px]">
          <input
            type="text"
            placeholder="Search for items..."
            className="flex-1 px-4 outline-none"
          />
          <button className="bg-[#00965f] px-6 text-white h-full flex items-center">
            <Search size={20} />
          </button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6">

          {/* Wishlist */}
          <Link to="/profile/wishlist">
          <div className="relative cursor-pointer">
            <Heart />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>
          </Link>

          {/* User */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <User className="cursor-pointer" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className=" bg-white">
              <DropdownMenuItem className="flex gap-2">
                <LogIn size={16} />
               <Link to="/login"> Sign In </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="flex gap-2">
                <User size={16} />
               <Link to="/register"> Sign Up </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          <Popover>
  <PopoverTrigger asChild>
     <User className="cursor-pointer" />
  </PopoverTrigger>
  <PopoverContent className=" bg-white w-auto px-5">
      <PopoverDescription className="flex gap-2 pb-2 border-b-2">
       <LogIn size={16} />
          <Link to="/login"> Sign In </Link>
      </PopoverDescription>
      <PopoverDescription className="flex gap-2">
       <User size={16} />
               <Link to="/register"> Sign Up </Link>
      </PopoverDescription>
  </PopoverContent>
</Popover>
         

          {/* Cart */}
          <div className="flex items-center gap-2">
          <Link to="/cart">
            <div className="relative cursor-pointer">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
                0
              </span>
            </div>
            </Link>

            <div className="text-sm ml-3">
              <p className="text-gray-500">My cart</p>
              <p className="font-semibold">$0.00</p>
            </div>
          </div>

        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu size={28} />
          </SheetTrigger>

          <SheetContent side="left" className="w-[280px] bg-white p-4">

            {/* Mobile Icons */}
            <div className="flex gap-6 border-b pb-4">

              <div className="relative cursor-pointer">
                <Heart />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
                  0
                </span>
              </div>

              <User className="cursor-pointer" />

              <div className="relative cursor-pointer">
                <ShoppingCart />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
                  0
                </span>
              </div>

            </div>

            {/* Categories */}
            <nav className="flex flex-col gap-5 mt-6 font-medium">

              <a href="#">Clothing</a>
              <a href="#">Footwear</a>
              <a href="#">Bags</a>
              <a href="#">Accessories</a>
              <a href="#">Beauty & Personal Care</a>
              <a href="#">Home & Living</a>
              <a href="#">Reusable Products</a>
              <a href="#">Kitchen & Dining</a>
              <a href="#">Fitness & Outdoor</a>

            </nav>

          </SheetContent>
        </Sheet>

      </div>

      {/* Desktop Category Navbar */}
      <div className="hidden lg:flex items-center px-[5vw] py-3 bg-[#00965f] text-white justify-center">

        <nav className="flex gap-8 font-medium text-sm">

          <a href="#" className="hover:text-black">Clothing</a>
          <a href="#" className="hover:text-black">Footwear</a>
          <a href="#" className="hover:text-black">Bags</a>
          <a href="#" className="hover:text-black">Accessories</a>
          <a href="#" className="hover:text-black">Beauty & Personal Care</a>
          <a href="#" className="hover:text-black">Home & Living</a>
          <a href="#" className="hover:text-black">Reusable Products</a>
          <a href="#" className="hover:text-black">Kitchen & Dining</a>
          <a href="#" className="hover:text-black">Fitness & Outdoor</a>

        </nav>

      </div>

    </div>
  )
}