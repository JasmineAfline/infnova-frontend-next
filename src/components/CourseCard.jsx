"use client";

import Link from "next/link";

export default function CourseCard({ 
  title, 
  description, 
  image, 
  category, 
  duration, 
  students, 
  rating,
  slug,
  instructor
}) {
  // Default placeholder image
  const defaultImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80";
  
  // Category badge color - Ice Blue background with Indigo text
  const getBadgeColor = (cat) => {
    const colors = {
      Design: "bg-[#F8FAFC] text-[#4F46E5]",
      Development: "bg-[#F8FAFC] text-[#4F46E5]",
      Marketing: "bg-[#F8FAFC] text-[#4F46E5]",
      Business: "bg-[#F8FAFC] text-[#4F46E5]",
      "Data Science": "bg-[#F8FAFC] text-[#4F46E5]",
    };
    return colors[cat] || "bg-[#F8FAFC] text-[#4F46E5]";
  };

  return (
    <Link href={`/courses/${slug}`}>
      <div className="card overflow-hidden group h-full flex flex-col">
        {/* Desktop: Thumbnail on top */}
        <div className="relative aspect-video overflow-hidden hidden md:block">
          <img
            src={image || defaultImage}
            alt={title}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultImage; }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Category Tag */}
          {category && (
            <span className={`badge ${getBadgeColor(category)} absolute top-3 left-3`}>
              {category}
            </span>
          )}
        </div>

        {/* Mobile: Thumbnail on left - horizontal layout */}
        <div className="flex md:hidden">
          <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
            <img
              src={image || defaultImage}
              alt={title}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultImage; }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Mobile Content */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              {category && (
                <span className={`badge ${getBadgeColor(category)} mb-1`}>
                  {category}
                </span>
              )}
              <h3 className="text-base font-bold text-[#4F46E5] line-clamp-2 group-hover:underline">
                {title}
              </h3>
              {instructor && (
                <p className="text-xs text-slate-500 mt-1">
                  {instructor}
                </p>
              )}
            </div>
            
            {/* Mobile Metadata */}
            <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
              {duration && (
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-[#4F46E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{duration}</span>
                </div>
              )}
              {rating && (
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{rating}</span>
                </div>
              )}
              <svg className="w-4 h-4 text-[#4F46E5] ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Content */}
        <div className="p-5 flex-1 flex flex-col hidden md:flex">
          {/* Category inside */}
          <div className="mb-2">
            {category && (
              <span className={`badge ${getBadgeColor(category)}`}>
                {category}
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#4F46E5] transition-colors">
            {title}
          </h3>
          
          <p className="text-sm text-slate-600 mb-4 flex-1 line-clamp-2">
            {description}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100">
            {duration && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{duration}</span>
              </div>
            )}
            {students && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>{students}</span>
              </div>
            )}
            {rating && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{rating}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
