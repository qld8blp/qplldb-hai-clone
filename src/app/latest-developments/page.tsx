'use client'

/**
 * Latest Developments Page - HAI Website Clone
 *
 * News, industry updates, and technology advancements page
 * Showcasing HAI's latest innovations and industry insights
 */

export default function LatestDevelopmentsPage() {
  const news = [
    {
      date: 'December 2024',
      title: 'HAI Introduces New High-Performance HVOF Powder Series',
      category: 'Product Launch',
      summary:
        'Our latest WC-Co-Cr powder formulation delivers 30% improved wear resistance for extreme environments.',
      readTime: '3 min read',
    },
    {
      date: 'November 2024',
      title: 'Partnership with European Aerospace Manufacturer',
      category: 'Business Update',
      summary:
        'HAI selected as primary thermal spray powder supplier for next-generation turbine components.',
      readTime: '2 min read',
    },
    {
      date: 'October 2024',
      title: 'Investment in Advanced Powder Production Technology',
      category: 'Company News',
      summary:
        'New atomization equipment enhances powder consistency and expands production capacity by 40%.',
      readTime: '4 min read',
    },
    {
      date: 'September 2024',
      title: 'Breakthrough in Biomedical Coating Applications',
      category: 'Innovation',
      summary:
        "HAI's proprietary hydroxyapatite coatings show promising results in osseointegration studies.",
      readTime: '5 min read',
    },
  ]

  const insights = [
    {
      title: 'The Future of Thermal Spray in Sustainable Manufacturing',
      author: 'Dr. Sarah Chen, CTO',
      description:
        'Exploring how thermal spray technology contributes to circular economy principles and reduced environmental impact.',
      tags: ['Sustainability', 'Technology', 'Innovation'],
    },
    {
      title: 'Advances in Cold Spray Technology for Additive Manufacturing',
      author: 'Michael Roberts, Engineering Director',
      description:
        'Latest developments in cold spray deposition for repair and additive manufacturing applications.',
      tags: ['Cold Spray', 'Additive Manufacturing', 'Research'],
    },
    {
      title: 'Quality Control Best Practices for Thermal Spray Operations',
      author: 'Jennifer Martinez, Quality Manager',
      description:
        'Essential guidelines for maintaining coating consistency and meeting aerospace specifications.',
      tags: ['Quality', 'Best Practices', 'Aerospace'],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hai-primary to-hai-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Latest Developments</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-blue-100">
            Stay informed about HAI's innovations, industry news, and
            technological advancements in thermal spray coating
          </p>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Recent News & Updates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-hai-orange font-semibold">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between">
                  <button className="text-hai-primary hover:text-hai-navy font-semibold transition-colors">
                    Read More →
                  </button>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-hai-primary hover:bg-hai-navy text-white px-8 py-3 rounded-md font-semibold transition-colors">
              View All News
            </button>
          </div>
        </div>
      </section>

      {/* Technology Advancements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Technology Advancements
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-hai-orange h-2"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Next-Gen Materials
                </h3>
                <p className="text-gray-600 mb-6">
                  Development of advanced nanostructured coatings with enhanced
                  properties for extreme service conditions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-hai-green mr-2">•</span>
                    <span>Ultra-high temperature ceramics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hai-green mr-2">•</span>
                    <span>Self-healing coating systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hai-green mr-2">•</span>
                    <span>Functionally graded materials</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-hai-light-blue h-2"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Process Innovation
                </h3>
                <p className="text-gray-600 mb-6">
                  Advanced spray technologies and automation for improved
                  coating consistency and efficiency.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-hai-green mr-2">•</span>
                    <span>AI-powered process control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hai-green mr-2">•</span>
                    <span>Real-time coating monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hai-green mr-2">•</span>
                    <span>Robotic spray systems</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-hai-green h-2"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sustainability Focus
                </h3>
                <p className="text-gray-600 mb-6">
                  Environmentally conscious coating solutions and processes for
                  a sustainable future.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-hai-green mr-2">•</span>
                    <span>Reduced material waste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hai-green mr-2">•</span>
                    <span>Energy-efficient processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hai-green mr-2">•</span>
                    <span>Recyclable coating materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Industry Insights & Articles
          </h2>

          <div className="space-y-8">
            {insights.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-card p-8 hover:shadow-card-hover transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      By {article.author}
                    </span>
                    <div className="flex gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="text-hai-primary hover:text-hai-navy font-semibold transition-colors">
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with HAI
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest industry news, product
              updates, and technical insights delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hai-primary"
              />
              <button
                type="submit"
                className="bg-hai-orange hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Events & Conferences */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Upcoming Events & Conferences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="text-hai-orange font-bold text-lg mb-2">
                March 15-17, 2025
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ITSC 2025
              </h3>
              <p className="text-gray-600 mb-4">
                International Thermal Spray Conference
              </p>
              <p className="text-sm text-gray-500">Vienna, Austria</p>
            </div>

            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="text-hai-orange font-bold text-lg mb-2">
                April 8-10, 2025
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Aerospace Coatings Summit
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced coating technologies for aerospace
              </p>
              <p className="text-sm text-gray-500">Seattle, WA</p>
            </div>

            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="text-hai-orange font-bold text-lg mb-2">
                May 20-22, 2025
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Surface Engineering Expo
              </h3>
              <p className="text-gray-600 mb-4">
                Latest in surface treatment technologies
              </p>
              <p className="text-sm text-gray-500">Detroit, MI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hai-primary text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with Innovation</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join HAI in advancing thermal spray technology for tomorrow's
            challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = '/contact')}
              className="bg-hai-orange hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Contact Our Experts
            </button>
            <button
              onClick={() => (window.location.href = '/capabilities')}
              className="border-2 border-white text-white hover:bg-white hover:text-hai-primary px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Explore Capabilities
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
