import Image from 'next/image'

const powderCategories = [
  {
    name: 'Metal Powders',
    materials: [
      'Nickel-based alloys',
      'Cobalt-based alloys',
      'Iron-based alloys',
      'Copper-based alloys',
      'Aluminum alloys',
    ],
    applications:
      'Wear resistance, corrosion protection, dimensional restoration',
  },
  {
    name: 'Ceramic Powders',
    materials: [
      'Aluminum oxide',
      'Chromium oxide',
      'Titanium dioxide',
      'Zirconia-based',
      'Yttria-stabilized zirconia',
    ],
    applications: 'Thermal barriers, electrical insulation, wear resistance',
  },
  {
    name: 'Carbide Powders',
    materials: [
      'Tungsten carbide/cobalt',
      'Tungsten carbide/nickel',
      'Chromium carbide/nickel chromium',
      'Titanium carbide',
    ],
    applications: 'Extreme wear resistance, erosion protection',
  },
  {
    name: 'Cermet Powders',
    materials: ['WC-Co-Cr', 'Cr3C2-NiCr', 'TiC-Ni', 'Custom blends'],
    applications: 'High temperature wear, oxidation resistance',
  },
]

export default function ThermalSprayPowderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-hai-primary to-hai-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Thermal Spray Powder
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Premium quality powders engineered for optimal coating
                performance across all thermal spray processes
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
                  View Specifications
                </a>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/thermal-spray-powder.svg"
                alt="Thermal Spray Powder"
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
            Why Choose HAI Thermal Spray Powders?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Consistent Quality
              </h3>
              <p className="text-gray-600">
                Rigorous quality control ensures uniform particle size
                distribution and chemistry in every batch
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Optimized Morphology
              </h3>
              <p className="text-gray-600">
                Engineered particle shapes for excellent flowability and
                deposition efficiency
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Custom Solutions
              </h3>
              <p className="text-gray-600">
                Ability to develop custom powder compositions to meet specific
                application requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="specifications" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powder Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {powderCategories.map((category) => (
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

      {/* Process Compatibility */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Process Compatibility
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Plasma Spray</span>
              </div>
              <p className="text-sm text-gray-600">APS & VPS</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">HVOF</span>
              </div>
              <p className="text-sm text-gray-600">High Velocity</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Flame Spray</span>
              </div>
              <p className="text-sm text-gray-600">Powder Flame</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Cold Spray</span>
              </div>
              <p className="text-sm text-gray-600">Low Temperature</p>
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
                  Particle Size Ranges
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fine: -325 mesh (&lt; 45 μm)</li>
                  <li>• Medium: -140/+325 mesh (45-106 μm)</li>
                  <li>• Coarse: -60/+140 mesh (106-250 μm)</li>
                  <li>• Custom sizes available upon request</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Quality Standards
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• ISO 9001:2015 certified production</li>
                  <li>• Full chemical and physical analysis</li>
                  <li>• Lot traceability and certification</li>
                  <li>• Meets AMS, ASTM, and DIN specifications</li>
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
            Ready to Optimize Your Coating Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our technical team for powder selection assistance and free
            samples
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request Samples
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
