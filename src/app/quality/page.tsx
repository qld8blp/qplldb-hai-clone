export default function QualityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Quality Standards
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Committed to excellence through rigorous quality control and
            continuous improvement
          </p>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ISO 9001:2015 Certified
              </h2>
              <p className="text-gray-600 mb-4">
                HAI Industries maintains ISO 9001:2015 certification,
                demonstrating our commitment to consistent quality management
                systems and continuous improvement.
              </p>
              <p className="text-gray-600 mb-6">
                Our quality management system covers all aspects of our
                operations, from raw material procurement through final product
                delivery, ensuring that every product meets the highest
                standards.
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-3">
                  Certification Benefits:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green mr-2">✓</span>
                    <span className="text-gray-700">
                      Consistent product quality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green mr-2">✓</span>
                    <span className="text-gray-700">
                      Documented processes and procedures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green mr-2">✓</span>
                    <span className="text-gray-700">Full traceability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green mr-2">✓</span>
                    <span className="text-gray-700">
                      Continuous improvement focus
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-primary rounded-lg p-12 text-center">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  ISO 9001:2015
                </h3>
                <p className="text-gray-600 mb-2">Quality Management System</p>
                <p className="text-sm text-gray-500">Certified Since 2016</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Quality Control Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Raw Material Testing
              </h3>
              <p className="text-gray-600">
                All incoming materials undergo rigorous chemical and physical
                analysis
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                In-Process Control
              </h3>
              <p className="text-gray-600">
                Continuous monitoring throughout the manufacturing process
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Final Inspection
              </h3>
              <p className="text-gray-600">
                Comprehensive testing before packaging and shipment
              </p>
            </div>
            <div className="text-center">
              <div className="bg-navy text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Documentation
              </h3>
              <p className="text-gray-600">
                Complete certification and traceability for every batch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Testing Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Chemical Analysis
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">ICP-OES spectroscopy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">
                    X-ray fluorescence (XRF)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">Carbon/sulfur analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">
                    Oxygen/nitrogen analysis
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Physical Testing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">
                    Particle size distribution
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">Powder morphology (SEM)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">Flow rate testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">
                    Apparent density measurement
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Standards Compliance
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-6 text-center">
              Our products meet or exceed requirements from major industry
              standards:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary text-white rounded-lg p-4">
                  <span className="font-semibold">AMS</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Aerospace Material Specifications
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-lg p-4">
                  <span className="font-semibold">ASTM</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  American Society for Testing
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-lg p-4">
                  <span className="font-semibold">DIN</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  German Institute for Standardization
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-lg p-4">
                  <span className="font-semibold">JIS</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Japanese Industrial Standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-navy rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Quality Commitment
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Quality is not just a department at HAI - it's embedded in
              everything we do. From raw material selection to final delivery,
              we ensure excellence at every step.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div>
                <h3 className="text-4xl font-bold mb-2">100%</h3>
                <p className="text-blue-100">Batch Testing</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">24/7</h3>
                <p className="text-blue-100">Quality Support</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">30+</h3>
                <p className="text-blue-100">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Request Quality Documentation
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Need certificates, test reports, or quality documentation? We're
            here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Quality Team
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
