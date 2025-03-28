"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/layout"
import { ChevronDown, Filter, Search, Star } from "lucide-react"

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  // Categories
  const categories = ["All", "African", "Fast Food", "Healthy", "Sandwiches", "Vegetarian", "Desserts", "Drinks"]

  // Restaurants
  const restaurants = [
    {
      id: 1,
      name: "Achekeh Restaurant",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      deliveryTime: "25-35 min",
      deliveryFee: "Le 15,000",
      tags: ["African", "Local", "Spicy"],
      featured: true,
    },
    {
      id: 2,
      name: "Vegetable Cous Cous",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      deliveryTime: "20-30 min",
      deliveryFee: "Le 15,000",
      tags: ["Healthy", "Vegetarian"],
      featured: true,
    },
    {
      id: 3,
      name: "Fajita Express",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 12,000",
      tags: ["Mexican", "Fast Food"],
      featured: false,
    },
    {
      id: 4,
      name: "Francisca Sandwich",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      deliveryTime: "20-30 min",
      deliveryFee: "Le 15,000",
      tags: ["Sandwiches", "Lunch"],
      featured: false,
    },
    {
      id: 5,
      name: "Sweet Treats",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 18,000",
      tags: ["Desserts", "Bakery"],
      featured: false,
    },
    {
      id: 6,
      name: "Healthy Bites",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.4,
      deliveryTime: "25-40 min",
      deliveryFee: "Le 15,000",
      tags: ["Healthy", "Salads"],
      featured: false,
    },
    {
      id: 7,
      name: "Local Flavors",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      deliveryTime: "20-35 min",
      deliveryFee: "Le 15,000",
      tags: ["African", "Local"],
      featured: false,
    },
    {
      id: 8,
      name: "Quick Bites",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.3,
      deliveryTime: "15-25 min",
      deliveryFee: "Le 12,000",
      tags: ["Fast Food", "Burgers"],
      featured: false,
    },
  ]

  // Filter restaurants by category
  const filteredRestaurants =
    activeCategory === "All"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.tags.some((tag) => tag === activeCategory))

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Restaurants in Sierra Leone</h1>
          <p className="text-white/90 mb-6 max-w-2xl">
            Discover the best food Sierra Leone has to offer with fast delivery to your doorstep
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="mb-8 overflow-x-auto pb-2">
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

          {/* Filters Button (Mobile) */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                <span>Filters</span>
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
                      <span>Delivery Time</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="sort" className="mr-2" />
                      <span>Rating</span>
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
                      <span>Delivery Time</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="sort" className="mr-2" />
                      <span>Rating</span>
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
                    onClick={() => setActiveCategory("All")}
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
    </Layout>
  )
}

