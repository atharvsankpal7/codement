// components/CourseCard.js
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-md rounded-md overflow-hidden border border-1 bg-slate-800 p-1 m-4 ">
      {/* <img className="w-full" src={course.image} alt={course.title} /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.title}</div>
        <p className="text-gray-300 text-sm">{course.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="card-text">
          Price: {course.price}
        </span>
        <span className="card-text">
          Rating: {course.rating}
        </span>
        <span className="card-text">
          Reviews: {course.reviews}
        </span>
        <span className="card-text">
          Teacher: {course.teacher}
        </span>
        <div>
          <Link
            href={course.link}
            className="inline-block    bg-transparent hover:bg-slate-100 text-slate-100 font-semibold hover:text-black py-2 px-4 border border-slate-100 hover:border-transparent rounded-lg my-3 hover:underline"
          >
            Go To Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
