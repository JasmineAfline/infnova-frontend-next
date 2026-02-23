import HeroSection from "@/components/HeroSection";
import CourseGrid from "@/components/CourseGrid";
import Container from "@/components/Container";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Courses Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our most popular courses and start learning today
            </p>
          </div>

          {/* Course Grid */}
          <CourseGrid />

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link href="/courses" className="btn-secondary">
              View All Courses
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#4F46E5]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4F46E5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Instructors</h3>
              <p className="text-slate-600">Learn from industry professionals with years of real-world experience</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Hands-on Projects</h3>
              <p className="text-slate-600">Build real projects to gain practical skills that employers value</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#8B5CF6]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lifetime Access</h3>
              <p className="text-slate-600">Study at your own pace with lifetime access to all course materials</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#4F46E5]">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with INFNOVA Academy
            </p>
            <Link href="/courses" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
