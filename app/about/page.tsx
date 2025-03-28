import Image from "next/image"
import Link from "next/link"
import Layout from "@/components/layout"

export default function About() {
  // Team members
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "John founded SendMe SL with a vision to revolutionize food delivery in Sierra Leone. With over 10 years of experience in the food industry, he's passionate about connecting people with great food.",
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sarah oversees all day-to-day operations, ensuring that every delivery is on time and every customer is satisfied. Her background in logistics makes her perfect for this role.",
    },
    {
      name: "Michael Chen",
      role: "Technology Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael leads our technology team, constantly improving our platform to provide the best possible experience for our customers, restaurant partners, and delivery drivers.",
    },
    {
      name: "Aminata Kamara",
      role: "Community Relations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Aminata works closely with our restaurant partners and local communities to build strong relationships and ensure we're meeting the needs of everyone we serve.",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About SendMe SL</h1>
            <p className="text-lg md:text-xl text-white/90">
              Connecting Sierra Leone with the best food delivery experience since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-4">
                SendMe SL was founded in 2020 with a simple mission: to make food delivery accessible, reliable, and
                enjoyable for everyone in Sierra Leone. What started as a small operation with just a handful of
                restaurant partners has grown into the country's leading food delivery platform.
              </p>
              <p className="mb-4">
                We recognized that Sierra Leone had a vibrant food culture but lacked a modern, efficient way to connect
                restaurants with hungry customers. Our founder, John Doe, saw an opportunity to bridge this gap using
                technology, creating a platform that benefits restaurants, customers, and delivery drivers alike.
              </p>
              <p className="mb-4">
                In our first year, we partnered with 20 restaurants in Freetown. Today, we work with over 100
                restaurants across multiple cities, delivering thousands of meals every day. Our growth reflects our
                commitment to quality service and our deep understanding of the local market.
              </p>
              <p>
                As we continue to grow, our focus remains on innovation, reliability, and community. We're constantly
                improving our platform, expanding our reach, and finding new ways to support local businesses and
                satisfy our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
              <h3 className="text-xl font-bold mb-2">Speed & Reliability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're committed to delivering food quickly and reliably, ensuring that every order arrives on time and
                in perfect condition.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
              <h3 className="text-xl font-bold mb-2">Supporting Local Business</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're proud to partner with local restaurants, helping them reach new customers and grow their
                businesses through our platform.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our customers are at the heart of everything we do. We're dedicated to providing an exceptional
                experience from order to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">SendMe SL by the Numbers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <p className="text-white/80">Restaurant Partners</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50,000+</div>
              <p className="text-white/80">Happy Customers</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <p className="text-white/80">Cities Served</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <p className="text-white/80">Delivery Drivers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the best food delivery service in Sierra Leone. Browse our restaurants and place your order now.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
          >
            Explore Restaurants
          </Link>
        </div>
      </section>
    </Layout>
  )
}

