import courses from "@/data/courses";
import CourseCard from "./CourseCard";

export default function CourseGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
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
  );
}
