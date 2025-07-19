import Coursename from "../../models/Coursename";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const courses = await Coursename.find();
  return NextResponse.json(courses);
}