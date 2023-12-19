import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white fixed top-0 w-full shadow-md z-10">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none md:hidden">
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                    {/* Title */}
                    <a href="#home" className="text-2xl font-light text-gray-800">Luqman Zaceria</a>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
                        <a href="#education" className="text-gray-800 hover:text-blue-600">Education</a>
                        <a href="#experience" className="text-gray-800 hover:text-blue-600">Experience</a>
                        <a href="#projects" className="text-gray-800 hover:text-blue-600">Projects</a>
                        <a href="#skills" className="text-gray-800 hover:text-blue-600">Skills</a>
                        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md">Contact</a>
                    </div>
                    {/* Placeholder for Mobile Menu Button to keep title centered */}
                    <div className="md:hidden w-8"></div>
                </div>

                {/* Mobile Menu */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col absolute top-full left-0 w-full bg-white shadow-md`}>
                    <a href="#about" className="text-gray-800 hover:text-blue-600 block px-4 py-2">About</a>
                    <a href="#education" className="text-gray-800 hover:text-blue-600 block px-4 py-2">Education</a>
                    <a href="#experience" className="text-gray-800 hover:text-blue-600 block px-4 py-2">Experience</a>
                    <a href="#projects" className="text-gray-800 hover:text-blue-600 block px-4 py-2">Projects</a>
                    <a href="#skills" className="text-gray-800 hover:text-blue-600 block px-4 py-2">Skills</a>
                    <a href="#contact" className="bg-blue-600 text-white block px-4 py-2 rounded-md">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
