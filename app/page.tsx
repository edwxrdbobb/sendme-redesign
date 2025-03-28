import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/layout"
import { ArrowRight, Clock, Star } from "lucide-react"

export default function Home() {
  // Featured restaurants
  const featuredRestaurants = [
    {
      id: 2,
      name: "BIG BITE",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQal804KtpFbLDqcB0lEBjthgzTbRJtKefwxA&s",
      rating: 4.6,
      deliveryTime: "20-30 min",
      deliveryFee: "Le 15,000",
      tags: ["Fast Food", "Burgers"],
      featured: true,
      city: "Freetown",
      address: "45 Wilkinson Road, Freetown",
      description: "Satisfying your hunger with big, delicious portions. Our menu features burgers, sandwiches, and other hearty meals that live up to our name."
    },
    {
      id: 3,
      name: "CHAMI'S (HOUSE OF FOOD)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7jKiSfz8mAwHcBEi3bR-eU0Oip_21tWea6mxmQeE5HM71xhfzYq4TkBc360itf2de52Y&usqp=CAU",
      rating: 4.7,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 12,000",
      tags: ["Local", "International"],
      featured: false,
      city: "Freetown",
      address: "12 Aberdeen Road, Freetown",
      description: "A true house of food offering a diverse menu of local and international dishes. From Sierra Leonean classics to global favorites, there's something for everyone."
    },
    {
      id: 4,
      name: "CHICKEN KINGDOM",
      image: "https://www.boliviaentusmanos.com/amarillas1/businesscard/imagenes/chickens-kingdom-1.jpg",
      rating: 4.5,
      deliveryTime: "20-30 min",
      deliveryFee: "Le 15,000",
      tags: ["Chicken", "Fast Food"],
      featured: false,
      city: "Freetown",
      address: "78 Lumley Beach Road, Freetown",
      description: "The kingdom of all things chicken. Enjoy our famous fried chicken, grilled specialties, and delicious chicken sandwiches prepared to perfection."
    },
    {
      id: 5,
      name: "CHICKEN TOWN",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/5f/42/4b/it-s-called-chicken-town.jpg?w=900&h=500&s=1",
      rating: 4.9,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 18,000",
      tags: ["Chicken", "Fast Food"],
      featured: false,
      city: "Freetown",
      address: "34 Kissy Road, Freetown",
      description: "Your destination for the best chicken in town. Our menu features a variety of chicken dishes from crispy fried to flame-grilled, all made with our secret recipes."
    },
  ]

  // Popular dishes
  const popularDishes = [
    {
      id: 1,
      name: "Achekeh Chicken",
      image: "https://static.wixstatic.com/media/275378_977f24c30f51446b95b80990bcf87f49~mv2.jpg/v1/fill/w_173,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/275378_977f24c30f51446b95b80990bcf87f49~mv2.jpg",
      price: 175000,
      restaurant: "Achekeh Restaurant",
    },
    {
      id: 2,
      name: "Fajita Beef Sandwich",
      image: "https://static.wixstatic.com/media/719bd1_de6ac28150a84cf1a4a28666d72219a6~mv2.webp/v1/fill/w_313,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/719bd1_de6ac28150a84cf1a4a28666d72219a6~mv2.webp",
      price: 120000,
      restaurant: "Fajita Express",
    },
    {
      id: 3,
      name: "Vegetable Cous Cous",
      image: "https://static.wixstatic.com/media/275378_24180234dc4b4665b3b3a9834f23a05f~mv2.jpg/v1/fill/w_126,h_126,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/275378_24180234dc4b4665b3b3a9834f23a05f~mv2.jpg",
      price: 150000,
      restaurant: "Way-Li",
    },
    {
      id: 4,
      name: "Chicken Mushroom Sandwich",
      image: "https://static.wixstatic.com/media/719bd1_1189e48fa95243a0bc81d44ef46fa954~mv2.jpg/v1/fill/w_315,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/719bd1_1189e48fa95243a0bc81d44ef46fa954~mv2.jpg",
      price: 120000,
      restaurant: "Francisca Sandwich",
    },
    {
      id: 5,
      name: "Beef Kebab Sandwich",
      image: "https://static.wixstatic.com/media/719bd1_de6ac28150a84cf1a4a28666d72219a6~mv2.webp/v1/fill/w_313,h_236,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/719bd1_de6ac28150a84cf1a4a28666d72219a6~mv2.webp",
      price: 137000,
      restaurant: "Kings Bakery",
    },
  ]

  // Format price in Leones
  const formatPrice = (price: number) => {
    return `Le ${price.toLocaleString()}`
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="images/bg-3.jpeg"
            alt="Delicious food"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Order from <span className="text-blue-500">the best</span> restaurants with <br /> <span className="text-orange-300 block">FAST DELIVERY</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Anytime U Want - We deliver your favorite meals right to your doorstep
            </p>
            <div className="flex items-center mb-8 text-white/80">
              <Clock className="h-5 w-5 mr-2" />
              <p>Sunday - Friday, 9am - 9pm</p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              View all restaurants
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12 px-18 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Restaurants</h2>
            <Link
              href="/shop"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
            >
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                href={`/shop`}
                className="group bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                    <span className="text-gray-700 dark:text-gray-300">{restaurant.rating}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-18 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Your Food</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse our menu and select your favorite dishes from the best restaurants in Sierra Leone.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Payment</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pay securely online or with cash on delivery - whatever works best for you.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enjoy quick delivery right to your doorstep, with real-time tracking of your order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-12 px-18 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Dishes</h2>
            <Link
              href="/shop"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
            >
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {popularDishes.map((dish) => (
              <Link
                key={dish.id}
                href={`/product/${dish.id}`}
                className="group bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 text-xs font-medium">
                    {formatPrice(dish.price)}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{dish.restaurant}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-12 px-18  bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 dark:bg-blue-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Delivery & Courier Service</h2>
                <p className="text-white/90 mb-6">
                  Fast delivery across Sierra Leone. Corporate delivery services available.
                </p>
                <div className="bg-yellow-500 text-blue-900 font-bold px-4 py-2 rounded-lg inline-block mb-6 w-max">
                  LIST OF SERVICES
                </div>
                <ul className="text-white/90 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Food delivery
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Corporate delivery
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Parcels
                  </li>
                </ul>
                <div className="text-white font-bold mb-2">CALL US NOW</div>
                <div className="text-white text-xl font-bold">+232 76 954733</div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://static.wixstatic.com/media/275378_a30ee9acf1e345b082f0a6c719efcde2~mv2.png/v1/fill/w_560,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/275378_a30ee9acf1e345b082f0a6c719efcde2~mv2.png"
                  alt="Delivery courier"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

