"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Left: Logo */}
          <Link 
            href="/" 
            className="text-lg md:text-xl font-bold text-[#4F46E5]"
            onClick={closeMenu}
          >
            INFNOVA
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link 
              href="/courses" 
              className="text-slate-600 hover:text-[#4F46E5] transition-colors"
            >
              Courses
            </Link>
            <Link 
              href="/about" 
              className="text-slate-600 hover:text-[#4F46E5] transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-600 hover:text-[#4F46E5] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Sign In + Enroll Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/admin/login" 
              className="text-sm font-medium text-slate-600 hover:text-[#4F46E5] transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/courses" 
              className="btn-primary text-sm"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile: Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#4F46E5] hover:bg-[#4F46E5]/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Slide Out */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg border-t border-slate-100 transition-all duration-300 ${
            isMenuOpen 
              ? "opacity-100 translate-y-0 visible" 
              : "opacity-0 -translate-y-2 invisible"
          }`}
        >
          <nav className="flex flex-col py-4">
            <Link 
              href="/courses" 
              className="px-6 py-3 text-slate-600 hover:text-[#4F46E5] hover:bg-slate-50 transition-colors"
              onClick={closeMenu}
            >
              Courses
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 text-slate-600 hover:text-[#4F46E5] hover:bg-slate-50 transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 text-slate-600 hover:text-[#4F46E5] hover:bg-slate-50 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="border-t border-slate-100 my-2"></div>
            <Link 
              href="/admin/login" 
              className="px-6 py-3 text-slate-600 hover:text-[#4F46E5] hover:bg-slate-50 transition-colors"
              onClick={closeMenu}
            >
              Sign In
            </Link>
            <div className="px-6 py-3">
              <Link 
                href="/courses" 
                className="btn-primary text-sm w-full"
                onClick={closeMenu}
              >
                Enroll Now
              </Link>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
