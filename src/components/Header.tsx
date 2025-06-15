/**
 * Header Component - HAI Website Clone
 * 
 * This component replicates the exact header design from haiinc.com
 * Features:
 * - Logo positioned on the left
 * - Navigation menu in center-right
 * - Dropdown menus for Products and Career sections
 * - Mobile hamburger menu for responsive design
 * - Contact information and social media icons
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Top contact bar - matches HAI's contact info display */}
      <div className="bg-gray-50 px-4 py-2 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>(714) 414-0575 / Toll Free: (877) 411-8971</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✉️</span>
              <span>info@haiinc.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🕒</span>
              <span>Monday-Friday, 7:00am-5:00pm PST</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {/* Social media icons - will be replaced with actual icons */}
            <Link href="#" className="text-blue-600 hover:text-blue-800">Facebook</Link>
            <Link href="#" className="text-red-600 hover:text-red-800">YouTube</Link>
            <Link href="#" className="text-blue-700 hover:text-blue-900">LinkedIn</Link>
          </div>
        </div>
      </div>

      {/* Main navigation - matches HAI's layout exactly */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Placeholder for HAI logo - will be replaced with actual logo */}
              <div className="w-32 h-12 bg-blue-600 text-white flex items-center justify-center font-bold">
                HAI LOGO
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About HAI
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Products
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                  <div className="py-2">
                    <Link href="/products/thermal-spray-powder" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Thermal Spray Powder
                    </Link>
                    <Link href="/products/thermal-spray-wire" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Thermal Spray Wire
                    </Link>
                    <Link href="/products/equipment-systems" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Thermal Spray Equipment & Systems
                    </Link>
                    <Link href="/products/spare-parts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Spare Parts
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/quality" className="text-gray-700 hover:text-blue-600 font-medium">
              Quality
            </Link>

            <Link href="/capabilities" className="text-gray-700 hover:text-blue-600 font-medium">
              Capabilities
            </Link>

            <Link href="/latest-development" className="text-gray-700 hover:text-blue-600 font-medium">
              Latest Development
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>

            {/* Career Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCareersOpen(true)}
              onMouseLeave={() => setIsCareersOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Career
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCareersOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                  <div className="py-2">
                    <Link href="/career/jd-008" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      JD-008
                    </Link>
                    <Link href="/career/jd-010" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      JD-010
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Get a Quote CTA Button */}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium">
              Get a Quote
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-600 hover:border-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-4 py-2">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 px-4 py-2">About HAI</Link>
              
              {/* Mobile Products submenu */}
              <div className="px-4 py-2">
                <div className="font-medium text-gray-900 mb-2">Products</div>
                <div className="ml-4 space-y-1">
                  <Link href="/products/thermal-spray-powder" className="block text-gray-600 hover:text-blue-600 py-1">
                    Thermal Spray Powder
                  </Link>
                  <Link href="/products/thermal-spray-wire" className="block text-gray-600 hover:text-blue-600 py-1">
                    Thermal Spray Wire
                  </Link>
                  <Link href="/products/equipment-systems" className="block text-gray-600 hover:text-blue-600 py-1">
                    Equipment & Systems
                  </Link>
                  <Link href="/products/spare-parts" className="block text-gray-600 hover:text-blue-600 py-1">
                    Spare Parts
                  </Link>
                </div>
              </div>

              <Link href="/quality" className="text-gray-700 hover:text-blue-600 px-4 py-2">Quality</Link>
              <Link href="/capabilities" className="text-gray-700 hover:text-blue-600 px-4 py-2">Capabilities</Link>
              <Link href="/latest-development" className="text-gray-700 hover:text-blue-600 px-4 py-2">Latest Development</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-4 py-2">Contact</Link>
              
              {/* Mobile Career submenu */}
              <div className="px-4 py-2">
                <div className="font-medium text-gray-900 mb-2">Career</div>
                <div className="ml-4 space-y-1">
                  <Link href="/career/jd-008" className="block text-gray-600 hover:text-blue-600 py-1">JD-008</Link>
                  <Link href="/career/jd-010" className="block text-gray-600 hover:text-blue-600 py-1">JD-010</Link>
                </div>
              </div>

              <div className="px-4 py-2">
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}