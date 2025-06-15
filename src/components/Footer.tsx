/**
 * Footer Component - HAI Website Clone
 * 
 * This component replicates the exact footer design from haiinc.com
 * Features:
 * - Company contact information
 * - Business hours display
 * - Social media links (Facebook, YouTube, LinkedIn)
 * - Professional, clean layout matching original
 */

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Information - Left Column */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              {/* Placeholder for HAI logo - will be replaced with actual white logo */}
              <div className="w-32 h-12 bg-white text-gray-900 flex items-center justify-center font-bold">
                HAI LOGO
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">California Headquarters</h3>
              <div className="space-y-2 text-gray-300">
                <p>1600 E. Miraloma Ave.</p>
                <p>Placentia, CA 92870</p>
                <div className="flex items-center space-x-2 mt-3">
                  <span>📞</span>
                  <div>
                    <p>Phone: (714) 414-0575</p>
                    <p>Toll Free: (877) 411-8971</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✉️</span>
                  <p>Email: info@haiinc.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* European Office - Center Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">European Office</h3>
            <div className="space-y-2 text-gray-300">
              <p>Horackova 1212/19</p>
              <p>Praha 4, Czech Republic</p>
              <div className="flex items-center space-x-2 mt-3">
                <span>📞</span>
                <p>Phone: +420-241 402 417</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
              <div className="flex items-center space-x-2 text-gray-300">
                <span>🕒</span>
                <p>Monday-Friday, 7:00am-5:00pm PST</p>
              </div>
            </div>
          </div>

          {/* Company Description & Social Media - Right Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">About HAI</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading materials engineering solutions provider for the thermal spraying industry. 
              Founded in 1979, we partner with our customers to provide the best quality products, 
              the best service, and the best solutions for our customers' most demanding coating needs.
            </p>
            
            <div className="mt-6">
              <h4 className="text-base font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Social media links - placeholders will be replaced with actual icons */}
                <Link 
                  href="#" 
                  className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-sm">FB</span>
                </Link>
                <Link 
                  href="#" 
                  className="bg-red-600 hover:bg-red-700 p-2 rounded-md transition-colors"
                  aria-label="YouTube"
                >
                  <span className="text-sm">YT</span>
                </Link>
                <Link 
                  href="#" 
                  className="bg-blue-700 hover:bg-blue-800 p-2 rounded-md transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-sm">LI</span>
                </Link>
              </div>
            </div>

            {/* Company Tagline */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-blue-400 font-semibold text-lg">
                "Make it Better, Coat it™"
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Thermal Spray Coatings improve our world for the better.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom border with copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 HAI Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}