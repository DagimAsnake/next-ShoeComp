import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const headerVariants = {
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

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <motion.footer
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
            variants={headerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
        >
            <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/">
                                <p className="text-white font-bold text-2xl">ShoeCompany</p>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/">
                                    <p className="text-gray-200 hover:text-white hover:underline px-3 py-2 rounded-md text-lg font-semibold transition duration-300">Home</p>
                                </Link>
                                <Link href="/products">
                                    <p className="text-gray-200 hover:text-white hover:underline px-3 py-2 rounded-md text-lg font-semibold transition duration-300">Products</p>
                                </Link>
                                <Link href="/about">
                                    <p className="text-gray-200 hover:text-white hover:underline px-3 py-2 rounded-md text-lg font-semibold transition duration-300">About</p>
                                </Link>
                                <Link href="/contact">
                                    <p className="text-gray-200 hover:text-white hover:underline px-3 py-2 rounded-md text-lg font-semibold transition duration-300">Contact</p>
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen ? 'true' : 'false'}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <svg
                                    className="hidden h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu, show/hide based on menu state */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link onClick={toggleMenu} href="/">
                            <button className="text-gray-200 hover:text-white hover:underline block px-3 py-2 rounded-md text-lg font-semibold transition duration-300">Home</button>
                        </Link>
                        <Link onClick={toggleMenu} href="/products">
                            <button className="text-gray-200 hover:text-white hover:underline block px-3 py-2 rounded-md text-lg font-semibold transition duration-300">Products</button>
                        </Link>
                        <Link onClick={toggleMenu} href="/about">
                            <button className="text-gray-200 hover:text-white hover:underline block px-3 py-2 rounded-md text-lg font-semibold transition duration-300">About</button>
                        </Link>
                        <Link onClick={toggleMenu} href="/contact">
                            <button className="text-gray-200 hover:text-white hover:underline block px-3 py-2 rounded-md text-lg font-semibold transition duration-300">Contact</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </motion.footer>
    );
};

export default Navbar;