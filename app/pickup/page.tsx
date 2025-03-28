"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Layout from "@/components/layout"
import { Camera, MapPin, Navigation, X } from "lucide-react"

export default function Pickup() {
  const router = useRouter()
  const [address, setAddress] = useState("")
  const [locationLoading, setLocationLoading] = useState(false)
  const [locationError, setLocationError] = useState("")
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [showCamera, setShowCamera] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [isCameraSupported, setIsCameraSupported] = useState(true)

  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // Check if camera is supported
  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setIsCameraSupported(false)
    }
  }, [])

  // Get current location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser")
      return
    }

    setLocationLoading(true)
    setLocationError("")

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setCurrentLocation({ lat: latitude, lng: longitude })

        // Reverse geocoding to get address (in a real app, you would use a service like Google Maps API)
        // This is a placeholder for demonstration
        setAddress("Your current location")
        setLocationLoading(false)
      },
      (error) => {
        setLocationError(`Error getting location: ${error.message}`)
        setLocationLoading(false)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    )
  }

  // Start camera
  const startCamera = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera access not supported")
      }

      const constraints = {
        video: {
          facingMode: "environment", // Use the back camera if available
        },
      }

      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setShowCamera(true)
      }
    } catch (error) {
      console.error("Error accessing camera:", error)
      setLocationError("Could not access camera. Please check permissions.")
    }
  }

  // Stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setShowCamera(false)
  }

  // Capture image
  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")

      if (context) {
        // Set canvas dimensions to match video
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        // Draw the current video frame to the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Convert canvas to data URL
        const imageDataUrl = canvas.toDataURL("image/png")
        setCapturedImage(imageDataUrl)

        // Stop the camera
        stopCamera()
      }
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would send the address, location, and image to your backend
    console.log("Submitting pickup request:", {
      address,
      location: currentLocation,
      image: capturedImage,
    })

    // Navigate to checkout
    router.push("/checkout")
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Pickup Location</h1>
            <p className="text-lg md:text-xl text-white/90">Let us know where to pick up your order</p>
          </div>
        </div>
      </section>

      {/* Pickup Form */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Address Input */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Enter Your Address</h2>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-1">
                      Pickup Address <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your full address"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                        required
                      />
                      <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Additional Instructions (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Provide any additional details that might help the driver find your location"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    onClick={getCurrentLocation}
                    disabled={locationLoading}
                    className="flex items-center justify-center w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2.5 px-4 rounded-lg transition-colors"
                  >
                    {locationLoading ? (
                      <span>Getting location...</span>
                    ) : (
                      <>
                        <Navigation className="h-5 w-5 mr-2" />
                        Get My Location
                      </>
                    )}
                  </button>

                  {locationError && <div className="text-red-600 dark:text-red-400 text-sm">{locationError}</div>}

                  {currentLocation && (
                    <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-3 rounded-lg text-sm">
                      Location detected! Coordinates: {currentLocation.lat.toFixed(6)}, {currentLocation.lng.toFixed(6)}
                    </div>
                  )}
                </div>
              </div>

              {/* Camera Section */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Take a Photo of Your Location</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This helps our driver identify your location more easily.
                </p>

                {!isCameraSupported ? (
                  <div className="text-red-600 dark:text-red-400 mb-4">
                    Camera access is not supported on your device or browser.
                  </div>
                ) : showCamera ? (
                  <div className="space-y-4">
                    <div className="relative bg-black rounded-lg overflow-hidden">
                      <video ref={videoRef} autoPlay playsInline className="w-full h-64 object-cover"></video>
                      <button
                        type="button"
                        onClick={stopCamera}
                        className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={captureImage}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Capture Photo
                    </button>
                    <canvas ref={canvasRef} className="hidden"></canvas>
                  </div>
                ) : capturedImage ? (
                  <div className="space-y-4">
                    <div className="relative bg-black rounded-lg overflow-hidden">
                      <Image
                        src={capturedImage || "/placeholder.svg"}
                        alt="Captured location"
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setCapturedImage(null)}
                        className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={startCamera}
                      className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Take Another Photo
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={startCamera}
                    className="flex items-center justify-center w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2.5 px-4 rounded-lg transition-colors"
                  >
                    <Camera className="h-5 w-5 mr-2" />
                    Access Camera
                  </button>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Proceed to Checkout
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">How Pickup Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Share Your Location</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enter your address or use our location services to pinpoint exactly where you are.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Take a Photo</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Capture an image of your location to help our driver identify it more easily.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <svg
                  className="h-8 w-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Confirm & Wait</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Complete your order and wait for our driver to arrive at your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">How accurate is the location service?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our location service uses your device's GPS to provide accurate coordinates. The accuracy may vary
                depending on your device and environment, but it's typically within a few meters.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Why do you need a photo of my location?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                A photo helps our drivers identify your exact location more easily, especially in areas where addresses
                might be unclear or in buildings with multiple entrances.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">How long will it take for the driver to arrive?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pickup times vary depending on your location and the availability of drivers in your area. Once your
                order is confirmed, you'll receive an estimated pickup time.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">What if I need to change my pickup location?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                If you need to change your pickup location after submitting your order, please contact our customer
                service team as soon as possible. Changes may be subject to availability and additional fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

