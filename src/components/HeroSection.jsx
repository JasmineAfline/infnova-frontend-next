"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to courses page with search query
    window.location.href = `/courses?search=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <section className="bg-[#4F46E5] py-20 md:py-28">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Your Perfect Course
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Learn from industry experts and gain practical skills with our comprehensive online courses
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for courses..."
                  className="w-full px-6 py-4 rounded-xl text-slate-900 bg-white border-0 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-[#1E293B] text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-white/70 text-sm">Popular:</span>
            <Link 
              href="/courses?category=design" 
              className="text-sm text-white/90 hover:text-white hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
            >
              Design
            </Link>
            <Link 
              href="/courses?category=development" 
              className="text-sm text-white/90 hover:text-white hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
            >
              Development
            </Link>
            <Link 
              href="/courses?category=marketing" 
              className="text-sm text-white/90 hover:text-white hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
            >
              Marketing
            </Link>
            <Link 
              href="/courses?category=business" 
              className="text-sm text-white/90 hover:text-white hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
            >
              Business
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
