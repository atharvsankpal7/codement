import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-md rounded-md overflow-hidden border border-1 bg-slate-800 p-1 m-4 ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.title}</div>
        <div className="text-gray-300 text-sm">{course.lecture_hours}</div>
        <div className="text-gray-300 text-sm">{course.rating} Rating</div>
      </div>
      <div className="px-6 py-4">
        <span className="card-text">{course.price}</span>
        <span className="card-text">Reviews: {course.reviews}</span>
        <span className="card-text">Teacher: {course.instructor}</span>
      </div>
    </div>
  );
};

export default CourseCard;
