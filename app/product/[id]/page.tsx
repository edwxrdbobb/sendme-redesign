"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Layout from "@/components/layout"
import { ChevronLeft, Heart, Minus, Plus, Share, ShoppingCart, Star } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)
  const [selectedOption, setSelectedOption] = useState("Regular")

  // Mock product data
  const product = {
    id: params.id,
    name: "Achekeh Chicken",
    description:
      "Delicious grilled chicken with special Achekeh spices, served with rice and vegetables. Our signature dish that's loved by all our customers.",
    price: 175000,
    image: "/placeholder.svg?height=400&width=600",
    options: ["Regular", "Spicy", "Extra Spicy"],
    restaurant: {
      name: "Achekeh Restaurant",
      rating: 4.8,
      deliveryTime: "25-35 min",
      deliveryFee: "Le 15,000",
    },
    reviews: 124,
    rating: 4.8,
  }

  // Related products
  const relatedProducts = [
    {
      id: 2,
      name: "Achekeh Fish/Country Fowl",
      image: "/placeholder.svg?height=150&width=200",
      price: 185000,
      restaurant: "Achekeh Restaurant",
    },
    {
      id: 3,
      name: "Vegetable Cous Cous",
      image: "/placeholder.svg?height=150&width=200",
      price: 150000,
      restaurant: "Vegetable Cous Cous",
    },
    {
      id: 4,
      name: "Fajita Beef Sandwich",
      image: "/placeholder.svg?height=150&width=200",
      price: 120000,
      restaurant: "Fajita Express",
    },
  ]

  // Format price in Leones
  const formatPrice = (price: number) => {
    return `Le ${price.toLocaleString()}`
  }

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // Add to cart
  const addToCart = () => {
    // In a real app, this would add the product to the cart
    // For now, just navigate to checkout
    router.push("/checkout")
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/shop" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Restaurants
          </Link>
        </div>

        {/* Product Details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-80 md:h-full min-h-[300px]">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Share className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">{product.reviews} reviews</span>
                <span className="mx-2 text-gray-400">•</span>
                <Link
                  href={`/shop/${product.restaurant.name}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {product.restaurant.name}
                </Link>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Options</h3>
                <div className="flex flex-wrap gap-2">
                  {product.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedOption(option)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        selectedOption === option
                          ? "bg-blue-600 text-white border-blue-600 dark:bg-blue-700 dark:border-blue-700"
                          : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold">{formatPrice(product.price)}</div>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={addToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                <button
                  onClick={() => router.push("/checkout")}
                  className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Buy Now
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div>Delivery time: {product.restaurant.deliveryTime}</div>
                  <div>Delivery fee: {product.restaurant.deliveryFee}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full px-2 py-1 text-xs font-medium">
                    {formatPrice(product.price)}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{product.restaurant}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

