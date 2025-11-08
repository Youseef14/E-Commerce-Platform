import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-beige dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">About</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
                  Transparency
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Customer Service
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop?category=women" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/shop?category=men" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider">Stay Connected</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <div className="flex mb-6">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-1 px-4 py-2 border border-neutral-300 focus:outline-none focus:border-neutral-900 text-sm"
              />
              <button className="px-4 py-2 bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition-colors">
                Join
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-600">
              © 2024 Everlane. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Terms of Service
              </a>
              <Link to="/style-guide" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Style Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
