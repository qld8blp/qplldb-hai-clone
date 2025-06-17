'use client'

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

import Image from 'next/image'
import Link from 'next/link'
import ProductIcon from '@/components/ProductIcon'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Carousel */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          {/* Carousel slides - simplified version */}
          <div className="relative h-full bg-gray-900">
            {/* Background image */}
            <Image
              src="/images/golden-gate-bridge.jpg"
              alt="Golden Gate Bridge"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl mx-auto">
                  Thermal Spray Coatings improve our world for the better.
                </h1>
                <p className="text-xl md:text-2xl text-hai-yellow mb-8 italic">
                  Make it Better, Coat it™
                </p>
                <div className="mt-8">
                  <Image
                    src="/images/hai-logo.png"
                    alt="HAI Inc."
                    width={200}
                    height={80}
                    className="mx-auto filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[1,2,3,4,5,6,7].map((dot) => (
            <button
              key={dot}
              className={`w-2 h-2 rounded-full ${dot === 7 ? 'bg-hai-yellow' : 'bg-white/50'}`}
              aria-label={`Slide ${dot}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome to HAI Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-hai-primary border-b-2 border-hai-primary">HAI</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                HAI is a leading materials engineering solutions provider for the{' '}
                <Link href="#" className="text-hai-primary hover:underline">
                  thermal spraying industry
                </Link>{' '}
                providing the highest quality Carbide, Pure Metal, Metal Alloy, Superalloy, Ceramic, and
                Dissolving <Link href="#" className="text-hai-primary hover:underline">Metal Powders</Link>,
                along with a variety of solid and specialty formulated custom
                cored wires. HAI specializes on engineering, design & integration of Turnkey Equipment
                Cells, for HVOF, Plasma, Arc Spray, Cold Spray, Additive Manufacturing, Laser, PTA and PM
                processes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our materials are used in nearly every product throughout the world. Our expertise in
                material solutions has created coatings used in household items to space age
                applications, allow us to transform your products into reality.
              </p>
              <Link
                href="#"
                className="inline-block bg-hai-dark-blue text-white px-6 py-3 font-medium hover:bg-hai-navy transition-colors"
              >
                Request More →
              </Link>
            </div>
            <div className="flex gap-4 justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/images/equipment-systems.png"
                  alt="Thermal spray process"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/images/equipment-systems.png"
                  alt="Thermal spray equipment"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Dark overlay cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Thermal Spray Powder */}
            <Link href="/products/thermal-spray-powder" className="group relative block overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/thermal-spray-powder.png"
                  alt="Thermal Spray Powder"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-hai-dark-blue bg-opacity-80 flex items-end p-6 transition-opacity group-hover:bg-opacity-90">
                  <h3 className="text-xl font-semibold text-white">
                    Thermal Spray Powder
                  </h3>
                </div>
              </div>
            </Link>

            {/* Thermal Spray Wire */}
            <Link href="/products/thermal-spray-wire" className="group relative block overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/thermal-spray-wire.png"
                  alt="Thermal Spray Wire"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-hai-dark-blue bg-opacity-80 flex items-end p-6 transition-opacity group-hover:bg-opacity-90">
                  <h3 className="text-xl font-semibold text-white">
                    Thermal Spray Wire
                  </h3>
                </div>
              </div>
            </Link>

            {/* Equipment & Systems */}
            <Link href="/products/equipment-systems" className="group relative block overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/equipment-systems.png"
                  alt="Thermal Spray Equipment & Systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-hai-dark-blue bg-opacity-80 flex items-end p-6 transition-opacity group-hover:bg-opacity-90">
                  <h3 className="text-xl font-semibold text-white">
                    Thermal Spray Equipment & Systems
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            <span className="text-gray-900">Industries</span> We Serve
          </h2>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
            Our products are used within the Aerospace, Automotive, Biomedical, Down Hole Drilling, Electronics, Energy, Oil & Gas, Pump, Pulp & Paper,
            Printing, Semiconductor, Steel and Valve industries for enhancing your products, extending your product life, increasing your product
            performance, and reducing your downtime and maintenance costs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Aerospace',
              'Automotive',
              'Biomedical',
              'Drilling',
              'Electronics',
              'Energy',
              'Oil & Gas',
              'Pulp & Paper',
              'Semiconductor',
              'Steel',
            ].map((industry) => (
              <div key={industry} className="text-center">
                <div className="bg-white p-8 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center text-hai-primary">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{industry}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-hai-dark-blue text-white px-8 py-3 font-medium hover:bg-hai-navy transition-colors inline-block"
            >
              Discover How We Can Help
            </Link>
          </div>
        </div>
      </section>

      {/* Why Companies Choose HAI */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Why Companies Choose <span className="text-hai-primary">HAI</span>
          </h2>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
            Customer service and technical support drives our company. We pride ourselves on our ability to communicate with customers when you
            need us the most. Our technical industry has few options, we have the knowledge and the expertise to provide you the solution that you need.
          </p>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-hai-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700">The Right Product For Your Application</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-hai-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700">Exceptional Customer Service</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-hai-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700">Expert In-House Technical Support</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-hai-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700">Complete Product Line</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-hai-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-700">Custom Packaging & Delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Groups & Affiliations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Groups & <span className="text-hai-primary">Affiliations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 text-center">
              <div className="h-32 flex items-center justify-center mb-4">
                <div className="text-4xl text-hai-primary font-bold">ITSA</div>
              </div>
              <p className="text-gray-600">International Thermal Spray Association</p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="h-32 flex items-center justify-center mb-4">
                <div className="text-4xl text-hai-primary font-bold">TSS</div>
              </div>
              <p className="text-gray-600">Thermal Spray Society</p>
            </div>
            <div className="bg-white p-8 text-center">
              <div className="h-32 flex items-center justify-center mb-4">
                <div className="text-3xl text-hai-primary font-bold">Stony Brook<br/>University</div>
              </div>
              <p className="text-gray-600">Stony Brook University Alumni</p>
            </div>
          </div>

          {/* Published Papers Section */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Published Papers, <span className="text-hai-primary">Articles and Useful Literature</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Eliminating Hexavalent Cr Emissions in Thermal Spray
                </h3>
                <p className="text-gray-600 mb-4">
                  International Thermal Spray Conference Proceedings. This study details efforts to develop
                  the next generation of high...
                </p>
                <Link
                  href="/contact"
                  className="text-hai-primary hover:text-hai-navy font-medium"
                >
                  Request Information
                </Link>
              </div>
            </div>
            <div className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Substituting Thermal Spraying for Electroplating
                </h3>
                <p className="text-gray-600 mb-4">
                  Waste Reduction - Global Climate Notes. Overview the role Thermal Spray plays in
                  reducing toxic plating processes.
                </p>
                <Link
                  href="/contact"
                  className="text-hai-primary hover:text-hai-navy font-medium"
                >
                  Request Information
                </Link>
              </div>
            </div>
            <div className="bg-white p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    NEW THERMAL SPRAY (SiAl) POWDER TECHNOLOGY WILL ADVANCE ROTATABLE SPUTTER TARGET COATINGS
                  </h3>
                  <p className="text-gray-600 text-sm">
                    New Aluminum clad Si particles that replace blended mixtures of SiAl to form denser and more homogenous coating structures used for rotatable sputter targets.
                  </p>
                </div>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    IMPROVING SURFACES WITH HVOF SPRAYED COATINGS
                  </h3>
                  <p className="text-gray-600 text-sm">
                    High Velocity Oxy-fuel spraying is rapidly emerging as an efficient way to produce high quality ceramic coatings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
