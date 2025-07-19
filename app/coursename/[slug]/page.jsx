import styles from "./course.module.css";
import Coursename from "../../../models/Coursename";
import RazorpayButton from "../../components/RazorpayButton";

export default async function CoursePage({ params }) {
  await connectToDatabase();
  const course = await Coursename.findOne({ slug: params.slug }).lean();

  if (!course) return <div>Course not found</div>;

  return (
    <div className={styles.courseContainer}>
  <h1 className={styles.courseTitle}>{course.title}</h1>
  <p className={styles.courseDescription}>{course.description}</p>
  <p className={styles.coursePrice}>Price: ₹{course.price}</p>
  <RazorpayButton amount={course.price} courseSlug={params.slug} className={styles.payButton} />
</div>
  );
}