import Link from "next/link";
import Container from "@/components/Container";
import courses from "@/data/courses";

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  
  // Find the course by slug
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <main className="py-8 bg-white min-h-screen">
        <Container>
          <div className="text-center py-12">
            <h1 className="text-xl font-bold text-slate-900 mb-3">Course Not Found</h1>
            <p className="text-slate-600 mb-5">The course you're looking for doesn't exist.</p>
            <Link href="/courses" className="btn-primary text-sm">
              Browse Courses
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  // What you'll learn items
  const learningPoints = [
    "Build real-world projects from scratch",
    "Master core concepts and best practices",
    "Understand industry-standard workflows",
    "Get hands-on experience with tools",
    "Learn problem-solving techniques",
    "Prepare for career opportunities",
  ];

  return (
    <main className="bg-white">
      {/* Very Compact Hero Header - almost the size of the image */}
      <section className="bg-[#4F46E5] py-4">
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Left: Title and Instructor */}
            <div className="flex-1">
              <h1 className="text-lg md:text-xl font-bold text-white mb-1">
                {course.title}
              </h1>
              <div className="flex items-center gap-3 text-white/80 text-xs">
                <span>{course.instructor}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>

            {/* Right: Featured Image */}
            <div className="w-24 md:w-32 flex-shrink-0">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-16 md:h-30 object-cover rounded-md shadow-sm"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* White Body Content */}
      <section className="py-6">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left: What You'll Learn and Description */}
            <div className="md:col-span-2 space-y-5">
              {/* What You'll Learn */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <h2 className="text-base font-bold text-slate-900 mb-3">What You'll Learn</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {learningPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-600 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Description */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <h2 className="text-base font-bold text-slate-900 mb-2">Course Description</h2>
                <div className="text-slate-600 space-y-2 text-sm">
                  <p>
                    This comprehensive course is designed to take you from beginner to advanced level in {course.category.toLowerCase()}. 
                    Through hands-on projects and real-world examples, you'll gain the practical skills needed to succeed.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Sticky Enrollment Card - White */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-md sticky top-20">
                <div className="text-center mb-3">
                  <span className="text-xl font-bold text-slate-900">{course.price}</span>
                </div>

                {/* Enroll Button */}
                <button className="btn-primary w-full text-sm py-2.5 mb-2">
                  Enroll Now
                </button>

                {/* Course Includes */}
                <div className="border-t border-slate-200 pt-3">
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Lifetime access
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Certificate
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
