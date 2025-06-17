import Image from 'next/image'

const sparePartsCategories = [
  {
    name: 'Spray Gun Components',
    parts: [
      'Nozzles and electrodes',
      'Powder ports and injectors',
      'Gas distributors',
      'Insulators and shields',
      'Gun body assemblies',
    ],
    description: 'Critical wear parts for all major spray gun brands',
  },
  {
    name: 'Powder Feed System Parts',
    parts: [
      'Feed wheels and discs',
      'Powder hoses and fittings',
      'Vibrator assemblies',
      'Flow sensors',
      'Carrier gas components',
    ],
    description: 'Ensure consistent powder delivery and coating quality',
  },
  {
    name: 'Cooling System Components',
    parts: [
      'Heat exchangers',
      'Pumps and motors',
      'Flow switches and sensors',
      'Cooling hoses',
      'Temperature controllers',
    ],
    description:
      'Maintain optimal operating temperatures for extended equipment life',
  },
  {
    name: 'Consumables & Accessories',
    parts: [
      'Masking tapes and compounds',
      'Grit blast media',
      'Filters and elements',
      'Safety equipment',
      'Maintenance tools',
    ],
    description: 'Essential supplies for daily operations and maintenance',
  },
]

export default function SparePartsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Spare Parts & Consumables
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Genuine OEM and high-quality aftermarket parts to keep your
                thermal spray systems running at peak performance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-block bg-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition text-center"
                >
                  Request Parts Quote
                </a>
                <a
                  href="#parts-catalog"
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  Browse Catalog
                </a>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/spare-parts.svg"
                alt="Spare Parts & Consumables"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose HAI for Your Spare Parts?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Extensive Inventory
              </h3>
              <p className="text-gray-600">
                Large stock of critical parts for immediate delivery when you
                need them most
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                OEM specifications met or exceeded with full traceability and
                certification
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Technical Expertise
              </h3>
              <p className="text-gray-600">
                Knowledgeable staff to help identify the right parts for your
                equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Categories */}
      <section id="parts-catalog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Parts Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sparePartsCategories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {category.name}
                </h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Common Parts:
                  </h4>
                  <ul className="space-y-1">
                    {category.parts.map((part) => (
                      <li key={part} className="text-gray-600 flex items-start">
                        <span className="text-green mr-2">•</span>
                        {part}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Parts for All Major Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Oerlikon Metco</span>
              </div>
              <p className="text-sm text-gray-600">Full range</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Praxair</span>
              </div>
              <p className="text-sm text-gray-600">All models</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Miller Thermal</span>
              </div>
              <p className="text-sm text-gray-600">Complete line</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Others</span>
              </div>
              <p className="text-sm text-gray-600">Many more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Superior Parts Service
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Ordering & Delivery
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24/7 online parts ordering</li>
                  <li>• Same-day shipping on stock items</li>
                  <li>• Emergency expedite available</li>
                  <li>• International shipping capabilities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Support Services
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Parts identification assistance</li>
                  <li>• Cross-reference support</li>
                  <li>• Preventive maintenance programs</li>
                  <li>• Volume pricing agreements</li>
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
            Keep Your Equipment Running at Peak Performance
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us for parts availability and preventive maintenance
            programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Parts Quote
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
