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

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isCareersOpen, setIsCareersOpen] = useState(false)

  return (
    <header className="bg-white">
      {/* Top contact bar - professional minimal style */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600">
              <PhoneIcon className="w-3 h-3" />
              <span className="font-medium">(714) 414-0575</span>
              <span className="text-gray-400 mx-1">|</span>
              <span>Toll Free: (877) 411-8971</span>
            </div>
            <div className="hidden md:flex items-center space-x-1 text-gray-600">
              <EnvelopeIcon className="w-3 h-3" />
              <span>info@haiinc.com</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1 text-gray-600">
              <ClockIcon className="w-3 h-3" />
              <span>Mon-Fri, 7:00am-5:00pm PST</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {/* Social media links */}
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <span className="sr-only">YouTube</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-blue-700 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation - clean professional style */}
      <div className="px-4 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/hai-logo.png"
                alt="HAI Inc."
                width={150}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-hai-primary font-medium text-sm transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-hai-primary font-medium text-sm transition-colors duration-200"
            >
              About HAI
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-gray-700 hover:text-hai-primary font-medium text-sm flex items-center transition-colors duration-200">
                Products
                <svg
                  className="ml-1 h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      href="/products"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm"
                    >
                      All Products
                    </Link>
                    <Link
                      href="/products/thermal-spray-powder"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm"
                    >
                      Thermal Spray Powder
                    </Link>
                    <Link
                      href="/products/thermal-spray-wire"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm"
                    >
                      Thermal Spray Wire
                    </Link>
                    <Link
                      href="/products/equipment-systems"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm"
                    >
                      Thermal Spray Equipment & Systems
                    </Link>
                    <Link
                      href="/products/spare-parts"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm"
                    >
                      Spare Parts
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/quality"
              className="text-gray-700 hover:text-hai-primary font-medium text-sm transition-colors duration-200"
            >
              Quality
            </Link>

            <Link
              href="/capabilities"
              className="text-gray-700 hover:text-hai-primary font-medium text-sm transition-colors duration-200"
            >
              Capabilities
            </Link>

            <Link
              href="/latest-developments"
              className="text-gray-700 hover:text-hai-primary font-medium text-sm transition-colors duration-200"
            >
              Latest Developments
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-hai-primary font-medium text-sm transition-colors duration-200"
            >
              Contact
            </Link>

            {/* Career Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCareersOpen(true)}
              onMouseLeave={() => setIsCareersOpen(false)}
            >
              <button className="text-gray-700 hover:text-hai-primary font-medium text-sm flex items-center transition-colors duration-200">
                Career
                <svg
                  className="ml-1 h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isCareersOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      href="/career/jd-008"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm"
                    >
                      JD-008
                    </Link>
                    <Link
                      href="/career/jd-010"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm"
                    >
                      JD-010
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Get a Quote CTA Button */}
            <button className="bg-hai-yellow text-gray-900 px-5 py-2 text-sm font-semibold hover:bg-yellow-400 transition-colors duration-200">
              Get a Quote ›
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-600 hover:border-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-hai-primary px-4 py-2 text-sm"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-hai-primary px-4 py-2 text-sm"
              >
                About HAI
              </Link>

              {/* Mobile Products submenu */}
              <div className="px-4 py-2">
                <div className="font-medium text-gray-900 mb-2 text-sm">
                  Products
                </div>
                <div className="ml-4 space-y-1">
                  <Link
                    href="/products"
                    className="block text-gray-700 hover:text-hai-primary py-1 text-sm"
                  >
                    View All Products
                  </Link>
                  <Link
                    href="/products/thermal-spray-powder"
                    className="block text-gray-600 hover:text-hai-primary py-1 text-sm"
                  >
                    Thermal Spray Powder
                  </Link>
                  <Link
                    href="/products/thermal-spray-wire"
                    className="block text-gray-600 hover:text-hai-primary py-1 text-sm"
                  >
                    Thermal Spray Wire
                  </Link>
                  <Link
                    href="/products/equipment-systems"
                    className="block text-gray-600 hover:text-hai-primary py-1 text-sm"
                  >
                    Equipment & Systems
                  </Link>
                  <Link
                    href="/products/spare-parts"
                    className="block text-gray-600 hover:text-hai-primary py-1 text-sm"
                  >
                    Spare Parts
                  </Link>
                </div>
              </div>

              <Link
                href="/quality"
                className="text-gray-700 hover:text-hai-primary px-4 py-2 text-sm"
              >
                Quality
              </Link>
              <Link
                href="/capabilities"
                className="text-gray-700 hover:text-hai-primary px-4 py-2 text-sm"
              >
                Capabilities
              </Link>
              <Link
                href="/latest-developments"
                className="text-gray-700 hover:text-hai-primary px-4 py-2 text-sm"
              >
                Latest Developments
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-hai-primary px-4 py-2 text-sm"
              >
                Contact
              </Link>

              {/* Mobile Career submenu */}
              <div className="px-4 py-2">
                <div className="font-medium text-gray-900 mb-2 text-sm">
                  Career
                </div>
                <div className="ml-4 space-y-1">
                  <Link
                    href="/career/jd-008"
                    className="block text-gray-600 hover:text-hai-primary py-1 text-sm"
                  >
                    JD-008
                  </Link>
                  <Link
                    href="/career/jd-010"
                    className="block text-gray-600 hover:text-hai-primary py-1 text-sm"
                  >
                    JD-010
                  </Link>
                </div>
              </div>

              <div className="px-4 py-2">
                <button className="w-full bg-hai-yellow text-gray-900 px-5 py-2 text-sm font-semibold hover:bg-yellow-400 transition-colors duration-200">
                  Get a Quote ›
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
