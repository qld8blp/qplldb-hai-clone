import Image from 'next/image'

const equipmentCategories = [
  {
    name: 'Plasma Spray Systems',
    equipment: [
      'Atmospheric plasma spray (APS)',
      'Vacuum plasma spray (VPS)',
      'Controlled atmosphere plasma',
      'Plasma spray controllers',
      'Power supplies and consoles',
    ],
    features:
      'High temperature capability, versatile coating options, precise parameter control',
  },
  {
    name: 'HVOF Systems',
    equipment: [
      'Gas-fueled HVOF guns',
      'Liquid-fueled HVOF systems',
      'Portable HVOF units',
      'HVOF control systems',
      'Fuel delivery systems',
    ],
    features:
      'High velocity coatings, dense microstructure, excellent bond strength',
  },
  {
    name: 'Arc Spray Equipment',
    equipment: [
      'Twin-wire arc spray guns',
      'Arc spray power supplies',
      'Wire feed systems',
      'Push-pull wire drives',
      'Spray booth systems',
    ],
    features:
      'High deposition rates, cost-effective operation, minimal heat input',
  },
  {
    name: 'Support Equipment',
    equipment: [
      'Powder feeders',
      'Gas control panels',
      'Cooling systems',
      'Robotic integration',
      'Dust collection systems',
    ],
    features:
      'Complete system integration, automated control, safety compliance',
  },
]

export default function EquipmentSystemsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Equipment & Systems
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Complete thermal spray solutions from industry-leading
                manufacturers with expert technical support
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-block bg-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition text-center"
                >
                  Request Consultation
                </a>
                <a
                  href="#equipment"
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  Browse Equipment
                </a>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/equipment-systems.svg"
                alt="Equipment & Systems"
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
            Complete Thermal Spray Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Expert Integration
              </h3>
              <p className="text-gray-600">
                Turnkey systems designed and integrated by experienced thermal
                spray professionals
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Premium Brands
              </h3>
              <p className="text-gray-600">
                Authorized distributor for leading equipment manufacturers
                worldwide
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Full Support
              </h3>
              <p className="text-gray-600">
                Installation, training, maintenance, and ongoing technical
                assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section id="equipment" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Equipment Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipmentCategories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {category.name}
                </h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Available Equipment:
                  </h4>
                  <ul className="space-y-1">
                    {category.equipment.map((item) => (
                      <li key={item} className="text-gray-600 flex items-start">
                        <span className="text-green mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Features:
                  </h4>
                  <p className="text-gray-600">{category.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">System Design</span>
              </div>
              <p className="text-sm text-gray-600">Custom solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Installation</span>
              </div>
              <p className="text-sm text-gray-600">Professional setup</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Training</span>
              </div>
              <p className="text-sm text-gray-600">Operator certification</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-4 mb-3">
                <span className="text-lg font-semibold">Maintenance</span>
              </div>
              <p className="text-sm text-gray-600">Preventive programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technical Capabilities
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  System Features
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Automated process control</li>
                  <li>• Real-time parameter monitoring</li>
                  <li>• Data logging and reporting</li>
                  <li>• Safety interlocks and alarms</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Integration Options
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Robotic manipulation systems</li>
                  <li>• Part handling automation</li>
                  <li>• Spray booth enclosures</li>
                  <li>• Environmental control systems</li>
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
            Ready to Upgrade Your Thermal Spray Capabilities?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts design the perfect system for your application needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Schedule Consultation
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
