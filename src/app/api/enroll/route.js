import { writeFile, readFile } from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "enrollments.json");

async function getEnrollments() {
  try {
    const data = await readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveEnrollments(enrollments) {
  await writeFile(filePath, JSON.stringify(enrollments, null, 2));
}

// Save enrollment
export async function POST(req) {
  const body = await req.json();
  const enrollments = await getEnrollments();

  enrollments.push({
    id: Date.now(),
    name: body.name,
    email: body.email,
    course: body.course,
    date: new Date().toISOString(),
  });

  await saveEnrollments(enrollments);

  return Response.json({ success: true });
}

// Get enrollments
export async function GET() {
  const enrollments = await getEnrollments();
  return Response.json(enrollments);
}

// Delete enrollment
export async function DELETE(req) {
  const { id } = await req.json();
  let enrollments = await getEnrollments();

  enrollments = enrollments.filter((enroll) => enroll.id !== id);

  await saveEnrollments(enrollments);

  return Response.json({ success: true });
}