export default function About() {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      title: "Hands-on Learning",
      description: "Build real projects to gain practical skills that employers value",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Career Support",
      description: "Get job placement assistance and career guidance after graduation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Flexible Learning",
      description: "Study at your own pace with lifetime access to course materials",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "500+", label: "Students Enrolled" },
    { number: "50+", label: "Expert Instructors" },
    { number: "100+", label: "Courses Available" },
    { number: "95%", label: "Job Placement Rate" },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#4F46E5] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About INFNOVA Academy
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            We are dedicated to empowering individuals with the skills they need 
            to succeed in today's fast-paced digital world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At INFNOVA Academy, we believe that quality education should be 
                accessible to everyone. Our mission is to bridge the gap between 
                talent and opportunity by providing comprehensive, industry-relevant 
                training in technology and design.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Since our founding, we've helped thousands of students transform 
                their careers and achieve their professional goals.
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#4F46E5] rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-[#10B981] mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide everything you need to launch a successful career in tech
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#4F46E5] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#4F46E5]/10 rounded-lg flex items-center justify-center text-[#4F46E5] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Join thousands of students who have transformed their careers with INFNOVA Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="btn-primary"
            >
              Browse Courses
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
