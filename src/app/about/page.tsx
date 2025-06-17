'use client'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            About HAI, Inc.
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Leading materials engineering solutions provider for the thermal
            spraying industry since 1979
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                HAI, Inc. was founded in 1979 with a clear mission: to provide
                the best quality products, the best service, and the best
                solutions for our customers' most demanding coating needs. For
                over 40 years, we have been a trusted partner to industries
                worldwide, delivering materials engineering solutions that
                exceed expectations.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We specialize in the distribution of thermal spray consumables,
                equipment, spare parts, and services. Our comprehensive product
                portfolio includes thermal spray powders, wires, equipment
                systems, and spare parts that serve critical applications across
                diverse industries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With facilities in California and Europe, we provide global
                support while maintaining the personalized service and technical
                expertise that sets us apart. Our commitment to quality and
                innovation has made us a leader in the thermal spray industry.
              </p>
            </div>
            <div className="bg-gray-50 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Company Highlights
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-hai-primary mt-0.5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Founded in 1979 - Over 40 years of excellence
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-hai-primary mt-0.5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Global presence with facilities in USA and Europe
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-hai-primary mt-0.5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    ISO 9001:2015 certified quality management system
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-hai-primary mt-0.5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Serving 10 major industries worldwide
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-hai-primary mt-0.5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Comprehensive thermal spray solutions portfolio
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-hai-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver materials engineering solutions that exceed
                expectations. We are committed to providing the best quality
                products, the best service, and the best solutions for our
                customers' most demanding coating needs. Through innovation,
                expertise, and partnership, we help our customers improve their
                products and processes.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-hai-primary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in thermal spray technology distribution
                and support. We strive to make advanced coating solutions
                accessible and reliable for businesses of all sizes, while
                maintaining our commitment to quality, innovation, and customer
                success. "Make it Better, Coat it™" is more than our
                tagline—it's our promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-hai-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">Q</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality
              </h3>
              <p className="text-gray-600 text-sm">
                Uncompromising commitment to excellence in every product and
                service
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-hai-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">I</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Continuous advancement of thermal spray technology and solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-hai-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Service
              </h3>
              <p className="text-gray-600 text-sm">
                Dedicated support and technical expertise for customer success
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-hai-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">P</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Partnership
              </h3>
              <p className="text-gray-600 text-sm">
                Building lasting relationships through trust and collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Global Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-hai-primary mb-4">
                North America Headquarters
              </h3>
              <p className="text-gray-700 mb-4">
                1600 E. Miraloma Ave.
                <br />
                Placentia, CA 92870
                <br />
                United States
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> (714) 414-0575
                <br />
                <strong>Toll Free:</strong> (877) 411-8971
              </p>
              <p className="text-gray-700">
                <strong>Hours:</strong> Monday-Friday, 7:00am-5:00pm PST
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-hai-primary mb-4">
                European Office
              </h3>
              <p className="text-gray-700 mb-4">
                Horackova 1212/19
                <br />
                Praha 4, 140 00
                <br />
                Czech Republic
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +420-241 402 417
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hai-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner with HAI for Your Thermal Spray Needs
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Experience the difference that 40 years of expertise can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-hai-primary px-8 py-3 font-medium hover:bg-gray-100 transition"
            >
              Contact Us Today
            </a>
            <a
              href="/products"
              className="inline-block border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-hai-primary transition"
            >
              Explore Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
