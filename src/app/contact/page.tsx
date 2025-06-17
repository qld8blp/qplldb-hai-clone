/**
 * Contact Page - HAI Website Clone
 *
 * Professional contact page featuring the ContactForm component
 * Layout matches HAI's professional branding and includes:
 * - Hero section with contact messaging
 * - ContactForm component integration
 * - Company contact information
 * - Business hours and location details
 */

import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-hai-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our Materials Engineering Experts
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your thermal spray coating needs? Our experienced
            team is here to provide the best quality products, service, and
            solutions for your most demanding applications.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* California Headquarters */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-hai-primary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                California Headquarters
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>1600 E. Miraloma Ave.</p>
                <p>Placentia, CA 92870</p>
                <div className="mt-4 space-y-1">
                  <p className="font-medium">Phone: (714) 414-0575</p>
                  <p className="font-medium">Toll Free: (877) 411-8971</p>
                  <p className="font-medium">Email: info@haiinc.com</p>
                </div>
              </div>
            </div>

            {/* European Office */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-hai-primary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                European Office
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Horackova 1212/19</p>
                <p>Praha 4, Czech Republic</p>
                <div className="mt-4 space-y-1">
                  <p className="font-medium">Phone: +420-241 402 417</p>
                </div>
              </div>
            </div>

            {/* Business Hours & Support */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-hai-primary rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday</p>
                <p className="font-medium">7:00am - 5:00pm PST</p>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Quick Response
                  </h4>
                  <p className="text-sm">
                    Our materials engineering team typically responds to
                    inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-hai-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make it Better?</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Since 1979, HAI has partnered with customers worldwide to deliver
            materials engineering solutions that exceed expectations. Let's
            discuss how we can help with your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17144140575"
              className="bg-hai-orange hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Call Now: (714) 414-0575
            </a>
            <a
              href="mailto:info@haiinc.com"
              className="border-2 border-white text-white hover:bg-white hover:text-hai-primary px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
