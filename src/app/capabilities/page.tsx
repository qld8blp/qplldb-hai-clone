'use client'

/**
 * Capabilities Page - HAI Website Clone
 *
 * Showcases HAI's technical capabilities and engineering services
 * Including thermal spray processes, testing, and application expertise
 */

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hai-primary to-hai-navy text-white py-20">
        <div className="max-w-container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Technical Capabilities</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Advanced thermal spray solutions backed by decades of engineering
            expertise and state-of-the-art testing facilities
          </p>
        </div>
      </section>

      {/* Thermal Spray Processes */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Thermal Spray Processes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-card shadow-card p-8">
              <h3 className="text-xl font-bold text-hai-primary mb-4">HVOF</h3>
              <p className="text-gray-600 leading-relaxed">
                High Velocity Oxygen Fuel coating for dense, wear-resistant
                coatings with superior bond strength and minimal porosity.
              </p>
            </div>

            <div className="bg-white rounded-card shadow-card p-8">
              <h3 className="text-xl font-bold text-hai-primary mb-4">
                Plasma Spray
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Atmospheric and vacuum plasma spray processes for
                high-performance ceramic and metallic coatings.
              </p>
            </div>

            <div className="bg-white rounded-card shadow-card p-8">
              <h3 className="text-xl font-bold text-hai-primary mb-4">
                Wire Arc Spray
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cost-effective coating solution for corrosion protection and
                dimensional restoration applications.
              </p>
            </div>

            <div className="bg-white rounded-card shadow-card p-8">
              <h3 className="text-xl font-bold text-hai-primary mb-4">
                Flame Spray
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Versatile coating process for both powder and wire feedstock,
                ideal for field repairs and large components.
              </p>
            </div>

            <div className="bg-white rounded-card shadow-card p-8">
              <h3 className="text-xl font-bold text-hai-primary mb-4">
                Cold Spray
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Low-temperature solid-state deposition for temperature-sensitive
                materials and substrates.
              </p>
            </div>

            <div className="bg-white rounded-card shadow-card p-8">
              <h3 className="text-xl font-bold text-hai-primary mb-4">
                Laser Cladding
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Precision coating technology for complex geometries with minimal
                heat input and dilution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Engineering Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-hai-orange rounded-full mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Application Development
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-hai-green mr-2">✓</span>
                  <span>
                    Custom coating solutions for specific applications
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-hai-green mr-2">✓</span>
                  <span>Material selection and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hai-green mr-2">✓</span>
                  <span>Process parameter development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hai-green mr-2">✓</span>
                  <span>Performance validation testing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-hai-orange rounded-full mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Support
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-hai-green mr-2">✓</span>
                  <span>On-site troubleshooting and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hai-green mr-2">✓</span>
                  <span>Training and certification programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hai-green mr-2">✓</span>
                  <span>Equipment maintenance guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hai-green mr-2">✓</span>
                  <span>Quality system implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Application Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-hai-light-blue text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✈</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Aerospace</h3>
              <p className="text-sm text-gray-600">
                Turbine components, landing gear, actuators
              </p>
            </div>

            <div className="text-center">
              <div className="bg-hai-light-blue text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Power Generation</h3>
              <p className="text-sm text-gray-600">
                Boiler tubes, turbine blades, heat exchangers
              </p>
            </div>

            <div className="text-center">
              <div className="bg-hai-light-blue text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛢</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Oil & Gas</h3>
              <p className="text-sm text-gray-600">
                Valves, pumps, drilling equipment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-hai-light-blue text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💊</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Medical</h3>
              <p className="text-sm text-gray-600">
                Implants, surgical instruments, diagnostic equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Analysis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Testing & Analysis Capabilities
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-hai-primary mb-3">
                  Metallographic Analysis
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Microstructure evaluation</li>
                  <li>• Porosity measurement</li>
                  <li>• Coating thickness verification</li>
                  <li>• Phase identification</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-hai-primary mb-3">
                  Mechanical Testing
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bond strength testing</li>
                  <li>• Hardness measurement</li>
                  <li>• Wear resistance evaluation</li>
                  <li>• Fatigue testing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-hai-primary mb-3">
                  Chemical Analysis
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Composition verification</li>
                  <li>• Contamination analysis</li>
                  <li>• Particle size distribution</li>
                  <li>• Surface analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            Quality Certifications
          </h2>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-card p-8 max-w-sm">
              <h3 className="text-xl font-bold text-hai-primary mb-4">
                ISO 9001:2015
              </h3>
              <p className="text-gray-600">
                Certified quality management system ensuring consistent product
                quality and customer satisfaction
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-card p-8 max-w-sm">
              <h3 className="text-xl font-bold text-hai-primary mb-4">
                AS9100D
              </h3>
              <p className="text-gray-600">
                Aerospace quality management certification for critical
                aerospace applications
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-card p-8 max-w-sm">
              <h3 className="text-xl font-bold text-hai-primary mb-4">
                NADCAP
              </h3>
              <p className="text-gray-600">
                Special process accreditation for thermal spray coating
                operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hai-primary text-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Leverage Our Technical Expertise
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with HAI to develop coating solutions that meet your most
            demanding requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = '/contact')}
              className="bg-hai-orange hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Request Consultation
            </button>
            <button
              onClick={() =>
                window.open('/capabilities-brochure.pdf', '_blank')
              }
              className="border-2 border-white text-white hover:bg-white hover:text-hai-primary px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Download Capabilities Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
