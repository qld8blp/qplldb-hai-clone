import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    title: 'Thermal Spray Powder',
    description:
      'High-quality powders for thermal spray applications, including metal, ceramic, and cermet compositions.',
    image: '/images/thermal-spray-powder.png',
    href: '/products/thermal-spray-powder',
    features: [
      'Wide material selection',
      'Consistent particle size',
      'Custom formulations available',
    ],
  },
  {
    title: 'Thermal Spray Wire',
    description:
      'Premium wire products for flame spray, arc spray, and HVOF applications.',
    image: '/images/thermal-spray-wire.png',
    href: '/products/thermal-spray-wire',
    features: [
      'Various diameters',
      'High purity materials',
      'Excellent feed characteristics',
    ],
  },
  {
    title: 'Equipment & Systems',
    description:
      'Complete thermal spray systems and equipment for professional coating applications.',
    image: '/images/equipment-systems.png',
    href: '/products/equipment-systems',
    features: [
      'Turnkey solutions',
      'Latest technology',
      'Full technical support',
    ],
  },
  {
    title: 'Spare Parts',
    description:
      'Genuine OEM spare parts and consumables for all major thermal spray equipment brands.',
    image: '/images/spare-parts.png',
    href: '/products/spare-parts',
    features: ['Quick availability', 'OEM quality', 'Competitive pricing'],
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Our Products
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Comprehensive thermal spray solutions for every industry need
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gray-100 relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-green mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HAI */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose HAI Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                ISO 9001:2015 certified manufacturing ensures consistent,
                high-quality products every time
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technical Support
              </h3>
              <p className="text-gray-600">
                Expert guidance from our experienced team helps you achieve
                optimal coating results
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Global Availability
              </h3>
              <p className="text-gray-600">
                Fast delivery from our strategically located facilities in the
                US and Europe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our technical team is ready to assist you with product selection and
            application support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Our Experts
            </a>
            <a
              href="/capabilities"
              className="inline-block bg-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              View Our Capabilities
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
