import CourseCard from "@/components/CourseCard";
import Container from "@/components/Container";
import courses from "@/data/courses";

export default function CoursesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Blue Nav Section */}
      <section className="bg-[#4F46E5] py-10">
        <Container>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            All Courses
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl">
            Explore our comprehensive library of courses designed to help you master new skills and advance your career.
          </p>
        </Container>
      </section>

      {/* Courses Content */}
      <section className="py-10">
        <Container>
          {/* Filter Info */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-sm text-slate-500">Showing {courses.length} courses</span>
          </div>

          {/* Course Grid - 3 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                category={course.category}
                duration={course.duration}
                students={course.students}
                rating={course.rating}
                slug={course.slug}
                instructor={course.instructor}
              />
            ))}
          </div>

          {/* Empty State */}
          {courses.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No courses found</h3>
              <p className="text-slate-600">Try adjusting your filters or search criteria.</p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
