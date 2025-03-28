"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/layout"
import { ChevronDown, Filter, MapPin, Search, Star } from 'lucide-react'

export default function Restaurants() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [activeCity, setActiveCity] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  // Categories
  const categories = ["All", "African", "Fast Food", "Healthy", "Sandwiches", "Vegetarian", "Desserts", "Drinks"]

  // Cities
  const cities = ["All", "Freetown", "Bo", "Kenema", "Makeni", "Koidu"]

  // Restaurants
  const restaurants = [
    {
      id: 1,
      name: "AGENKWA",
      image: "https://evendo.com/public/assets/vendor-images/001/a9/89/a9895095669e413d09da41b0b32dc4899cccfd70.jpeg",
      rating: 4.8,
      deliveryTime: "25-35 min",
      deliveryFee: "Le 15,000",
      tags: ["African", "Local", "Spicy"],
      featured: true,
      city: "Freetown",
      address: "23 Siaka Stevens Street, Freetown",
      description: "Authentic Sierra Leonean cuisine with a modern twist. Our signature dishes include traditional local favorites prepared with fresh ingredients."
    },
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
    {
      id: 6,
      name: "CITY SANDWICH",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NWF00uNQFZmWDdj9ngPk0heb5km__-piwQ&s",
      rating: 4.4,
      deliveryTime: "25-40 min",
      deliveryFee: "Le 15,000",
      tags: ["Sandwiches", "Lunch"],
      featured: false,
      city: "Freetown",
      address: "56 Regent Road, Freetown",
      description: "Gourmet sandwiches made with freshly baked bread and premium ingredients. Perfect for a quick lunch or dinner with a variety of fillings to choose from."
    },
    {
      id: 7,
      name: "COKIE'S COOKERY & BAR",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      deliveryTime: "20-35 min",
      deliveryFee: "Le 15,000",
      tags: ["Bar & Grill", "International"],
      featured: false,
      city: "Freetown",
      address: "23 Lumley Beach Road, Freetown",
      description: "A unique dining experience combining delicious food with refreshing drinks. Our menu features a variety of dishes paired perfectly with our signature cocktails."
    },
    {
      id: 8,
      name: "CROWN BAKERY",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.3,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 12,000",
      tags: ["Bakery", "Desserts"],
      featured: false,
      city: "Freetown",
      address: "90 Pademba Road, Freetown",
      description: "Fresh baked goods made daily. From bread and pastries to cakes and desserts, our bakery offers the finest quality baked products in the city."
    },
    {
      id: 9,
      name: "CROWN XPRESS",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 15,000",
      tags: ["Fast Food", "International"],
      featured: true,
      city: "Freetown",
      address: "15 Wilberforce Street, Freetown",
      description: "Quick service without compromising on quality. Our express menu features a variety of dishes prepared quickly but with the same attention to taste and quality."
    },
    {
      id: 10,
      name: "EL GREKO",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      deliveryTime: "25-35 min",
      deliveryFee: "Le 18,000",
      tags: ["Greek", "Mediterranean"],
      featured: false,
      city: "Freetown",
      address: "32 Beach Road, Freetown",
      description: "Authentic Greek cuisine in the heart of Freetown. Enjoy traditional Mediterranean flavors with our gyros, souvlaki, Greek salads, and more."
    },
    {
      id: 11,
      name: "FRANCESCA'S KITCHEN",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      deliveryTime: "20-30 min",
      deliveryFee: "Le 15,000",
      tags: ["Italian", "Homemade"],
      featured: true,
      city: "Freetown",
      address: "67 Wilkinson Road, Freetown",
      description: "Homemade Italian cuisine made with love. Our pasta, pizza, and other Italian favorites are prepared using traditional recipes and the freshest ingredients."
    },
    {
      id: 12,
      name: "GIGIBONTA",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 12,000",
      tags: ["Ice Cream", "Desserts"],
      featured: false,
      city: "Freetown",
      address: "43 Lumley Beach Road, Freetown",
      description: "Premium ice cream and desserts to satisfy your sweet tooth. Our handcrafted ice cream comes in a variety of flavors, along with other delicious treats."
    },
    {
      id: 13,
      name: "KELVIN'S KITCHEN",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      deliveryTime: "20-30 min",
      deliveryFee: "Le 15,000",
      tags: ["Local", "International"],
      featured: false,
      city: "Freetown",
      address: "28 Spur Road, Freetown",
      description: "A culinary journey through local and international cuisine. Chef Kelvin's creations combine traditional flavors with modern cooking techniques for a unique dining experience."
    },
    {
      id: 14,
      name: "LAGOONDA MAMBA-POINT",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      deliveryTime: "25-35 min",
      deliveryFee: "Le 18,000",
      tags: ["Seafood", "International"],
      featured: true,
      city: "Freetown",
      address: "Mamba Point, Aberdeen, Freetown",
      description: "Exquisite seafood and international cuisine with a stunning view. Our restaurant offers the freshest catch prepared in various styles, along with other international favorites."
    },
    {
      id: 15,
      name: "MASIKA",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      deliveryTime: "20-30 min",
      deliveryFee: "Le 15,000",
      tags: ["African", "Fusion"],
      featured: false,
      city: "Freetown",
      address: "54 Wilkinson Road, Freetown",
      description: "Modern African cuisine with a fusion twist. Our innovative menu combines traditional African ingredients with international cooking styles for a unique dining experience."
    },
    {
      id: 16,
      name: "MANGO PEAK",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 12,000",
      tags: ["Smoothies", "Healthy"],
      featured: false,
      city: "Freetown",
      address: "12 Beach Road, Freetown",
      description: "Fresh fruit smoothies, juices, and healthy snacks. Our signature mango smoothies and other fruit-based drinks are perfect for a refreshing treat or healthy boost."
    },
    {
      id: 17,
      name: "MEDS FAST FOOD",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.3,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 12,000",
      tags: ["Fast Food", "Burgers"],
      featured: false,
      city: "Freetown",
      address: "76 Kissy Road, Freetown",
      description: "Quick, delicious meals when you're on the go. Our menu includes burgers, fries, chicken, and other fast food favorites made with quality ingredients."
    },
    {
      id: 18,
      name: "NEW YORK PIZZA",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      deliveryTime: "20-30 min",
      deliveryFee: "Le 15,000",
      tags: ["Pizza", "Italian"],
      featured: true,
      city: "Freetown",
      address: "38 Wilkinson Road, Freetown",
      description: "Authentic New York style pizza with a variety of toppings. Our thin-crust pizzas are made with homemade sauce and premium cheese, just like in the Big Apple."
    },
    {
      id: 19,
      name: "NUNU RESTAURANT",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      deliveryTime: "25-35 min",
      deliveryFee: "Le 15,000",
      tags: ["Local", "African"],
      featured: false,
      city: "Freetown",
      address: "21 Siaka Stevens Street, Freetown",
      description: "Traditional Sierra Leonean and West African cuisine. Our menu features authentic dishes prepared with traditional methods and locally sourced ingredients."
    },
    {
      id: 20,
      name: "LUMELY FAST FOOD",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.4,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 12,000",
      tags: ["Fast Food", "Local"],
      featured: false,
      city: "Freetown",
      address: "Lumley Beach Road, Freetown",
      description: "Quick service restaurant offering a mix of local and international fast food. Located in the popular Lumley Beach area, we serve tasty meals perfect for beach-goers."
    },
    {
      id: 21,
      name: "LOVETTA'S KITCHEN",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      deliveryTime: "20-30 min",
      deliveryFee: "Le 15,000",
      tags: ["Homemade", "International"],
      featured: true,
      city: "Freetown",
      address: "45 Hill Station, Freetown",
      description: "Homestyle cooking with international influence. Lovetta's Kitchen offers a warm, inviting menu of comfort food made with love and the finest ingredients."
    },
    {
      id: 22,
      name: "PA SWEET",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 12,000",
      tags: ["Desserts", "Bakery"],
      featured: false,
      city: "Freetown",
      address: "29 Pademba Road, Freetown",
      description: "Delicious desserts and sweet treats for every occasion. From cakes and pastries to traditional Sierra Leonean sweets, Pa Sweet offers the perfect end to any meal."
    }
  ]

  // Filter restaurants by category and city
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const categoryMatch = activeCategory === "All" || restaurant.tags.some((tag) => tag === activeCategory)
    const cityMatch = activeCity === "All" || restaurant.city === activeCity
    return categoryMatch && cityMatch
  })

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Explore Our Restaurant Partners
          </h1>
          <p className="text-white/90 mb-6 max-w-2xl">
            Discover the best restaurants in Sierra Leone, from local favorites to international cuisine
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search for restaurants or cuisine..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Categories */}
            <div className="md:w-1/2 overflow-x-auto pb-2">
              <div className="flex space-x-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      activeCategory === category
                        ? "bg-blue-600 text-white dark:bg-blue-700"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Cities */}
            <div className="md:w-1/2 overflow-x-auto pb-2">
              <div className="flex space-x-2 min-w-max">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => setActiveCity(city)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      activeCity === city
                        ? "bg-blue-600 text-white dark:bg-blue-700"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filters Button (Mobile) */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <span>More Filters</span>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            {showFilters && (
              <div className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Sort By</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="sort" className="mr-2" defaultChecked />
                      <span>Recommended</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="sort" className="mr-2" />
                      <span>Rating: High to Low</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="sort" className="mr-2" />
                      <span>Delivery Time</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Delivery Fee</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Free Delivery</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Under Le 15,000</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Filters (Desktop) */}
            <div className="hidden md:block">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sticky top-20">
                <h3 className="font-bold text-lg mb-4">Filters</h3>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Sort By</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="radio" name="sort" className="mr-2" defaultChecked />
                      <span>Recommended</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="sort" className="mr-2" />
                      <span>Rating: High to Low</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="sort" className="mr-2" />
                      <span>Delivery Time</span>
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Delivery Fee</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Free Delivery</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Under Le 15,000</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Dietary</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Vegetarian</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Vegan</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Gluten-Free</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Restaurant List */}
            <div className="md:col-span-2 lg:col-span-3">
              {filteredRestaurants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRestaurants.map((restaurant) => (
                    <Link
                      key={restaurant.id}
                      href={`/shop/${restaurant.id}`}
                      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-48">
                        <Image
                          src={restaurant.image || "/placeholder.svg"}
                          alt={restaurant.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {restaurant.featured && (
                          <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                            Featured
                          </div>
                        )}
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
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                          <span className="truncate">{restaurant.address}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {restaurant.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                          {restaurant.description}
                        </p>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Delivery fee: {restaurant.deliveryFee}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">No restaurants found</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    We couldn't find any restaurants matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("All")
                      setActiveCity("All")
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Restaurants
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 dark:bg-blue-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Become a Restaurant Partner</h2>
                <p className="text-white/90 mb-6">
                  Join our network of restaurant partners and reach more customers. We handle the delivery so you can
                  focus on making great food.
                </p>
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
                    Increase your revenue
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
                    Reach new customers
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
                    No upfront costs
                  </li>
                </ul>
                <Link
                  href="/partner-signup"
                  className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Restaurant chef"
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
