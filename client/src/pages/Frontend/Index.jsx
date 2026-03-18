import { Leaf, Truck, ShieldCheck, RefreshCcw } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO BANNER */}
      <section className="bg-[#e6f5ef]">
        <div className="max-w-full w-full">

          <Carousel className="main-banner">
            <CarouselContent>
              <CarouselItem><img src="banner1.webp" className="w-full" /></CarouselItem>
              <CarouselItem><img src="banner2.avif" className="w-full" /></CarouselItem>
              <CarouselItem><img src="banner3.webp" className="w-full" /></CarouselItem>
              <CarouselItem><img src="banner4.webp" className="w-full" /></CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="banner-prev"/>
            <CarouselNext className="banner-next"/>

          </Carousel>

        </div>
      </section>


      {/* CATEGORIES */}
      <section className="py-14 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">

          <h2 className="text-2xl font-semibold text-center mb-8">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

            {[
              {
                name: "Clothing",
                img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
              },
              {
                name: "Footwear",
                img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              },
              {
                name: "Bags",
                img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
              },
              {
                name: "Accessories",
                img: "https://images.unsplash.com/photo-1519741497674-611481863552"
              },
              {
                name: "Home & Living",
                img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              },
              {
                name: "Reusable Products",
                img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
              }
            ].map((cat) => (
              <div
                key={cat.name}
                className="border rounded-lg overflow-hidden hover:shadow-md cursor-pointer bg-white"
              >

                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-36 object-cover"
                />

                <div className="p-3 text-center">
                  <p className="font-medium">{cat.name}</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


 {/* BRAND LOGOS */}

<section className="bg-gray-50 py-14 px-[5vw]">
  <div className="max-w-[1200px] mx-auto">

```
<h2 className="text-center text-2xl font-semibold mb-10">
  Trusted Eco Brands
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

    <div
      className="bg-white border rounded-lg flex items-center justify-center p-6 hover:shadow-md transition"
    >
      <img
        src="baggu.png"
        className="h-10 object-contain"
      />
    </div>
    <div
      className="bg-white border rounded-lg flex items-center justify-center p-6 hover:shadow-md transition"
    >
      <img
        src="lush.png"
        className="h-10 object-contain"
      />
    </div>
    <div
      className="bg-white border rounded-lg flex items-center justify-center p-6 hover:shadow-md transition"
    >
      <img
        src="patagonia.png"
        className="h-10 object-contain"
      />
    </div>
    <div
      className="bg-white border rounded-lg flex items-center justify-center p-6 hover:shadow-md transition"
    >
      <img
        src="reformation.png"
        className="h-10 object-contain"
      />
    </div>
    <div
      className="bg-white border rounded-lg flex items-center justify-center p-6 hover:shadow-md transition"
    >
      <img
        src="veja.jpg"
        className="h-10 object-contain"
      />
    </div>
    <div
      className="bg-white border rounded-lg flex items-center justify-center p-6 hover:shadow-md transition"
    >
      <img
        src="tentree.webp"
        className="h-10 object-contain"
      />
    </div>

</div>

  </div>
</section>




      {/* FEATURED PRODUCTS */}
      <section className="py-14 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">

          <h2 className="text-2xl font-semibold text-center mb-8">
            Featured Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[1,2,3,4].map((p) => (
              <div
                key={p}
                className="border rounded-lg overflow-hidden hover:shadow-md"
              >

                <img
                  src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-sm font-medium mb-2">
                    Eco Friendly Product
                  </h3>
                  <p className="text-[#00965f] font-semibold">$29.00</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* PROMOTION BANNER */}
      <section className="bg-[#00965f] text-white py-12 px-[5vw]">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-semibold">
              Summer Eco Sale
            </h2>
            <p>Up to 40% off sustainable products</p>
          </div>

          <button className="bg-white text-black px-6 py-3 rounded-md">
            Shop Deals
          </button>

        </div>
      </section>


      {/* BEST SELLERS */}
      <section className="py-14 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">

          <h2 className="text-2xl font-semibold text-center mb-8">
            Best Sellers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[1,2,3,4].map((p) => (
              <div
                key={p}
                className="border rounded-lg overflow-hidden hover:shadow-md"
              >

                <img
                  src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-sm font-medium mb-2">
                    Popular Eco Product
                  </h3>
                  <p className="text-[#00965f] font-semibold">$35.00</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ECO BENEFITS */}
      <section className="bg-gray-50 py-14 px-[5vw]">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

          <div>
            <Leaf className="mx-auto mb-3 text-[#00965f]" size={30}/>
            <h4 className="font-semibold mb-2">Eco Friendly</h4>
            <p className="text-sm text-gray-500">
              Sustainable materials used
            </p>
          </div>

          <div>
            <Truck className="mx-auto mb-3 text-[#00965f]" size={30}/>
            <h4 className="font-semibold mb-2">Free Shipping</h4>
            <p className="text-sm text-gray-500">
              On orders above $50
            </p>
          </div>

          <div>
            <ShieldCheck className="mx-auto mb-3 text-[#00965f]" size={30}/>
            <h4 className="font-semibold mb-2">Secure Payment</h4>
            <p className="text-sm text-gray-500">
              100% safe checkout
            </p>
          </div>

          <div>
            <RefreshCcw className="mx-auto mb-3 text-[#00965f]" size={30}/>
            <h4 className="font-semibold mb-2">Easy Returns</h4>
            <p className="text-sm text-gray-500">
              30 day returns
            </p>
          </div>

        </div>
      </section>


      {/* NEW ARRIVALS */}
      <section className="py-14 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">

          <h2 className="text-2xl font-semibold text-center mb-8">
            New Arrivals
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[1,2,3,4].map((p) => (
              <div
                key={p}
                className="border rounded-lg overflow-hidden hover:shadow-md"
              >

                <img
                  src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-sm font-medium mb-2">
                    New Eco Product
                  </h3>
                  <p className="text-[#00965f] font-semibold">$32.00</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* NEWSLETTER */}
      <section className="bg-[#00965f] py-14 px-[5vw] text-white">
        <div className="max-w-[700px] mx-auto text-center">

          <h2 className="text-2xl font-semibold mb-3">
            Join Our Eco Community
          </h2>

          <p className="mb-6">
            Subscribe for eco tips and special offers
          </p>

          <div className="flex bg-white rounded overflow-hidden">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-black outline-none"
            />

            <button className="bg-black px-6">
              Subscribe
            </button>

          </div>

        </div>
      </section>

    </div>
  )
}