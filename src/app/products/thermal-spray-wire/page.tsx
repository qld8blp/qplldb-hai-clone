import Image from 'next/image'

const wireCategories = [
  {
    name: 'Solid Wires',
    materials: [
      'Stainless steel wires',
      'Nickel and nickel alloys',
      'Copper and copper alloys',
      'Aluminum and zinc wires',
      'Molybdenum wires',
    ],
    applications:
      'Corrosion protection, wear resistance, electrical conductivity, restoration',
  },
  {
    name: 'Cored Wires',
    materials: [
      'Carbide cored wires',
      'Self-fluxing alloy cored',
      'Iron-based cored wires',
      'Nickel-based cored wires',
      'Custom compositions',
    ],
    applications:
      'Extreme wear resistance, high-temperature applications, specialized coatings',
  },
  {
    name: 'Arc Spray Wires',
    materials: [
      'Zinc and aluminum',
      'Stainless steel grades',
      'Nickel-chrome alloys',
      'Copper-nickel alloys',
      'Bronze wires',
    ],
    applications:
      'Cathodic protection, marine environments, infrastructure protection',
  },
  {
    name: 'Flame Spray Wires',
    materials: [
      'Molybdenum',
      'Babbitt alloys',
      'Copper alloys',
      'Aluminum bronze',
      'Nickel-aluminum',
    ],
    applications: 'Bearing surfaces, thermal management, decorative coatings',
  },
]

export default function ThermalSprayWirePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Thermal Spray Wire
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                High-quality wires for arc spray, flame spray, and specialized
                coating applications with consistent performance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-block bg-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition text-center"
                >
                  Request Quote
                </a>
                <a
                  href="#specifications"
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  View Wire Types
                </a>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/thermal-spray-wire.svg"
                alt="Thermal Spray Wire"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose HAI Thermal Spray Wires?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Precise Diameter Control
              </h3>
              <p className="text-gray-600">
                Tight tolerances ensure consistent feed rates and uniform
                coating thickness
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Superior Metallurgy
              </h3>
              <p className="text-gray-600">
                Carefully controlled chemistry and microstructure for optimal
                coating properties
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Excellent Spooling
              </h3>
              <p className="text-gray-600">
                Level-wound spools with consistent tension for trouble-free
                operation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="specifications" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Wire Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wireCategories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {category.name}
                </h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Available Materials:
                  </h4>
                  <ul className="space-y-1">
                    {category.materials.map((material) => (
                      <li
                        key={material}
                        className="text-gray-600 flex items-start"
                      >
                        <span className="text-green mr-2">•</span>
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Applications:
                  </h4>
                  <p className="text-gray-600">{category.applications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wire Diameters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Standard Wire Diameters
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">1/16"</span>
              </div>
              <p className="text-sm text-gray-600">1.6 mm</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">3/32"</span>
              </div>
              <p className="text-sm text-gray-600">2.4 mm</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">1/8"</span>
              </div>
              <p className="text-sm text-gray-600">3.2 mm</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Custom</span>
              </div>
              <p className="text-sm text-gray-600">On request</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Wire Properties
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Diameter tolerance: ±0.05 mm</li>
                  <li>• Surface finish: Bright, oxide-free</li>
                  <li>• Tensile strength: Process optimized</li>
                  <li>• Cast and helix: Controlled for smooth feeding</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Packaging Options
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Standard spools: 15 kg, 25 kg, 30 kg</li>
                  <li>• Drum packs: 100-250 kg</li>
                  <li>• Custom packaging available</li>
                  <li>• Vacuum-sealed options for reactive alloys</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Selecting the Right Wire?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our technical experts can help you choose the optimal wire for your
            application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Technical Support
            </a>
            <a
              href="/products"
              className="inline-block bg-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
