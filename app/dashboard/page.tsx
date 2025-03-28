"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/layout"
import { CreditCard, Heart, LogOut, MapPin, Package, Settings } from "lucide-react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("orders")

  // User data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+232 76 123456",
    image: "/placeholder.svg?height=100&width=100",
  }

  // Orders data
  type OrderStatus = "Delivered" | "Processing" | "Pending"
  
  const orders = [
    {
      id: "ORD-12345",
      date: "March 15, 2025",
      status: "Delivered" as OrderStatus,
      total: 325000,
      items: [
        { name: "Achekeh Chicken", quantity: 1 },
        { name: "Vegetable Cous Cous", quantity: 1 },
      ],
    },
    {
      id: "ORD-12344",
      date: "March 10, 2025",
      status: "Delivered" as OrderStatus,
      total: 175000,
      items: [
        { name: "Fajita Beef Sandwich", quantity: 1 },
        { name: "Chicken Mushroom Sandwich", quantity: 1 },
      ],
    },
    {
      id: "ORD-12343",
      date: "March 5, 2025",
      status: "Delivered" as OrderStatus,
      total: 150000,
      items: [{ name: "Achekeh Fish/Country Fowl", quantity: 1 }],
    },
  ]

  // Addresses data
  const addresses = [
    {
      id: 1,
      type: "Home",
      address: "123 Main Street, Freetown, Sierra Leone",
      phone: "+232 76 123456",
      isDefault: true,
    },
    {
      id: 2,
      type: "Office",
      address: "456 Business Avenue, Freetown, Sierra Leone",
      phone: "+232 76 654321",
      isDefault: false,
    },
  ]

  // Payment methods data
  const paymentMethods = [
    {
      id: 1,
      type: "Credit Card",
      details: "**** **** **** 1234",
      expiry: "12/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mobile Money",
      details: "+232 76 123456",
      isDefault: false,
    },
  ]

  // Format price in Leones
  const formatPrice = (price: number) => {
    return `Le ${price.toLocaleString()}`
  }

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "orders": {
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">My Orders</h2>
            {orders.length > 0 ? (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex flex-wrap justify-between items-center gap-2">
                      <div>
                        <div className="font-medium">{order.id}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{order.date}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : order.status === "Processing"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div className="font-medium">{formatPrice(order.total)}</div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm font-medium mb-2">Items:</div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400">
                        {order.items.map((item, index) => (
                          <li key={index}>
                            {item.quantity} x {item.name}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex justify-end">
                        <Link
                          href={`/order/${order.id}`}
                          className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <Package className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">You haven't placed any orders yet.</p>
                <Link
                  href="/shop"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Shopping
                </Link>
              </div>
            )}
          </div>
        );
      }

      case "addresses": {
        return (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">My Addresses</h2>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                + Add New Address
              </button>
            </div>

            {addresses.length > 0 ? (
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium">{address.type}</span>
                          {address.isDefault && (
                            <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">{address.address}</p>
                        <p className="text-gray-600 dark:text-gray-400">Phone: {address.phone}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                          Edit
                        </button>
                        <button className="text-red-600 dark:text-red-400 text-sm font-medium hover:underline">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">No addresses saved</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">You haven't saved any delivery addresses yet.</p>
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Add New Address
                </button>
              </div>
            )}
          </div>
        );
      }

      case "payment": {
        return (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Payment Methods</h2>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                + Add Payment Method
              </button>
            </div>

            {paymentMethods.length > 0 ? (
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium">{method.type}</span>
                          {method.isDefault && (
                            <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-xs">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">{method.details}</p>
                        {method.expiry && <p className="text-gray-600 dark:text-gray-400">Expires: {method.expiry}</p>}
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                          Edit
                        </button>
                        <button className="text-red-600 dark:text-red-400 text-sm font-medium hover:underline">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <CreditCard className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">No payment methods</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">You haven't added any payment methods yet.</p>
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Add Payment Method
                </button>
              </div>
            )}
          </div>
        );
      }

      case "favorites": {
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">My Favorites</h2>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You haven't added any items to your favorites yet.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Restaurants
              </Link>
            </div>
          </div>
        );
      }

      case "settings": {
        return (
          <div>
            <h2 className="text-xl font-bold mb-6">Account Settings</h2>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-medium mb-4">Personal Information</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    defaultValue={user.name}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    defaultValue={user.email}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    defaultValue={user.phone}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  />
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Change Password</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">
                    Current Password
                  </label>
                  <input
                    id="currentPassword"
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium mb-1">
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                    Confirm New Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  />
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }

      default: {
        return null;
      }
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <Image src={user.image || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">{user.name}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    activeTab === "orders"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Package className="h-5 w-5 mr-3" />
                  My Orders
                </button>

                <button
                  onClick={() => setActiveTab("addresses")}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    activeTab === "addresses"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <MapPin className="h-5 w-5 mr-3" />
                  My Addresses
                </button>

                <button
                  onClick={() => setActiveTab("payment")}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    activeTab === "payment"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <CreditCard className="h-5 w-5 mr-3" />
                  Payment Methods
                </button>

                <button
                  onClick={() => setActiveTab("favorites")}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    activeTab === "favorites"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Heart className="h-5 w-5 mr-3" />
                  My Favorites
                </button>

                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                    activeTab === "settings"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  Account Settings
                </button>
              </nav>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
              <Link href="/login" className="flex items-center text-red-600 dark:text-red-400 hover:underline">
                <LogOut className="h-5 w-5 mr-2" />
                Sign Out
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">{renderTabContent()}</div>
        </div>
      </div>
    </Layout>
  )
}

