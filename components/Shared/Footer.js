import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const footerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
      variants={footerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Column 1 - Logo and Motto */}
          <div className="flex flex-col items-center">
            <Link href="/">
              <p className="text-white font-bold text-lg mb-2">ShoeCompany</p>
            </Link>
            <p className="text-gray-200">Your feet's best friend</p>
          </div>

          {/* Column 2 - Follow Us */}
          <div className="flex flex-col items-center  space-y-2">
            <p className="text-white font-bold text-lg">Follow Us</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-200 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Column 3 - Contact Information */}
          <div className="flex flex-col items-center">
            <p className="text-white font-bold text-lg">Contact</p>
            <ul className="text-gray-200 space-y-2 text-center">
              <li>123 Main St, City</li>
              <li>Email: info@shoecompany.com</li>
              <li>Phone: 123-456-7890</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4 text-gray-200">
          &copy; {new Date().getFullYear()} ShoeCompany. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;