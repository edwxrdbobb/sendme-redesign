"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Layout from "@/components/layout"
import { ChevronLeft, CreditCard, Minus, Plus, Truck } from "lucide-react"

export default function Checkout() {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [deliveryOption, setDeliveryOption] = useState("standard")

  // Cart items
  const cartItems = [
    {
      id: 1,
      name: "Achekeh Chicken",
      price: 175000,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      restaurant: "Achekeh Restaurant",
      option: "Regular",
    },
    {
      id: 2,
      name: "Vegetable Cous Cous",
      price: 150000,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      restaurant: "Vegetable Cous Cous",
      option: "With Chicken",
    },
  ]

  // Format price in Leones
  const formatPrice = (price: number) => {
    return `Le ${price.toLocaleString()}`
  }

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Delivery fee
  const deliveryFee = deliveryOption === "standard" ? 15000 : 25000

  // Calculate total
  const total = subtotal + deliveryFee

  // Update quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    // In a real app, this would update the cart state
    console.log(`Update item ${id} to quantity ${newQuantity}`)
  }

  // Place order
  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process the order
    // For now, just navigate to dashboard
    router.push("/dashboard")
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/shop" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Continue Shopping
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-4 flex">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.restaurant}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Option: {item.option}</p>
                      <div className="mt-1 flex justify-between items-center">
                        <div className="text-blue-600 dark:text-blue-400 font-medium">{formatPrice(item.price)}</div>
                        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Options */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Delivery Options</h2>

              <div className="space-y-3">
                <label className="flex items-start p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={deliveryOption === "standard"}
                    onChange={() => setDeliveryOption("standard")}
                    className="mt-1 mr-3"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <div className="font-medium">Standard Delivery</div>
                      <div className="font-medium">{formatPrice(15000)}</div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Delivery within 30-45 minutes</p>
                  </div>
                </label>

                <label className="flex items-start p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <input
                    type="radio"
                    name="delivery"
                    value="express"
                    checked={deliveryOption === "express"}
                    onChange={() => setDeliveryOption("express")}
                    className="mt-1 mr-3"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <div className="font-medium">Express Delivery</div>
                      <div className="font-medium">{formatPrice(25000)}</div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Delivery within 15-25 minutes</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Delivery Address</h2>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                  + Add New Address
                </button>
              </div>

              <div className="space-y-3">
                <label className="flex items-start p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <input type="radio" name="address" defaultChecked className="mt-1 mr-3" />
                  <div>
                    <div className="font-medium">Home</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      123 Main Street, Freetown, Sierra Leone
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone: +232 76 123456</p>
                  </div>
                </label>

                <label className="flex items-start p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <input type="radio" name="address" className="mt-1 mr-3" />
                  <div>
                    <div className="font-medium">Office</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      456 Business Avenue, Freetown, Sierra Leone
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone: +232 76 654321</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Payment Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
                  <span className="font-medium">{formatPrice(deliveryFee)}</span>
                </div>
                <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-lg">{formatPrice(total)}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="mr-3"
                    />
                    <CreditCard className="h-5 w-5 mr-2" />
                    <span>Credit/Debit Card</span>
                  </label>

                  <label className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={() => setPaymentMethod("cash")}
                      className="mr-3"
                    />
                    <Truck className="h-5 w-5 mr-2" />
                    <span>Cash on Delivery</span>
                  </label>

                  <label className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="mobile"
                      checked={paymentMethod === "mobile"}
                      onChange={() => setPaymentMethod("mobile")}
                      className="mr-3"
                    />
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 2H8C6.89543 2 6 2.89543 6 4V20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20V4C18 2.89543 17.1046 2 16 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 18H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Mobile Money</span>
                  </label>
                </div>
              </div>

              {paymentMethod === "card" && (
                <div className="mb-6 space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                      Card Number
                    </label>
                    <input
                      id="cardNumber"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium mb-1">
                        Expiry Date
                      </label>
                      <input
                        id="expiry"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                        CVV
                      </label>
                      <input
                        id="cvv"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={placeOrder}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                Place Order
              </button>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                By placing your order, you agree to our{" "}
                <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

