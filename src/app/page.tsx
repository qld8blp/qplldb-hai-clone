/**
 * Homepage - HAI Website Clone
 * 
 * This is the main homepage that replicates haiinc.com exactly
 * Sections included:
 * - Hero section with main value proposition
 * - Company introduction paragraph  
 * - Three-column product showcase (Powders, Wires, Equipment)
 * - Industries served grid layout
 * - Call-to-action section
 * All content matches the original HAI website
 */

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Main value proposition */}
      <section className="bg-gradient-to-r from-hai-primary to-hai-navy text-white py-20">
        <div className="max-w-container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Make it Better, Coat it™
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading materials engineering solutions provider for the thermal spraying industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-hai-orange hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors">
              Get a Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-hai-primary px-8 py-3 rounded-md font-semibold text-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Thermal Spray Coatings improve our world for the better. Since 1979, HAI has partnered with customers 
            to provide the best quality products, the best service, and the best solutions for our customers' 
            most demanding coating needs. Our mission is to deliver materials engineering solutions that exceed expectations.
          </p>
        </div>
      </section>

      {/* Product Showcase - Three Columns */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Products & Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Thermal Spray Powders */}
            <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-card group cursor-pointer">
              <div className="p-8 text-center">
                {/* Placeholder for product image - will be replaced with actual HAI image */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-hai-primary text-lg font-semibold">Thermal Spray Powders</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Thermal Spray Powder</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  High-quality thermal spray powders engineered for superior coating performance 
                  across aerospace, automotive, and industrial applications.
                </p>
                <Link 
                  href="/products/thermal-spray-powder"
                  className="inline-block bg-hai-primary hover:bg-hai-navy text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Thermal Spray Wires */}
            <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-card group cursor-pointer">
              <div className="p-8 text-center">
                {/* Placeholder for product image - will be replaced with actual HAI image */}
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-hai-green text-lg font-semibold">Thermal Spray Wires</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Thermal Spray Wire</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Precision-manufactured thermal spray wires designed for consistent, 
                  high-performance coating applications in demanding environments.
                </p>
                <Link 
                  href="/products/thermal-spray-wire"
                  className="inline-block bg-hai-primary hover:bg-hai-navy text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Equipment & Systems */}
            <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-card group cursor-pointer">
              <div className="p-8 text-center">
                {/* Placeholder for product image - will be replaced with actual HAI image */}
                <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-hai-orange text-lg font-semibold">Equipment & Systems</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Equipment & Systems</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete thermal spray equipment and systems, including spare parts, 
                  designed for reliability and optimal coating results.
                </p>
                <Link 
                  href="/products/equipment-systems"
                  className="inline-block bg-hai-primary hover:bg-hai-navy text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Aerospace', 'Automotive', 'Biomedical', 'Drilling', 'Electronics',
              'Energy', 'Oil & Gas', 'Semiconductor', 'Steel'
            ].map((industry) => (
              <div key={industry} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-hai-light-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{industry.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-hai-primary text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Improve Your Coating Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our materials engineering experts to discuss your specific thermal spray coating needs. 
            We're here to help you make it better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-hai-orange hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-hai-primary px-8 py-3 rounded-md font-semibold text-lg transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
