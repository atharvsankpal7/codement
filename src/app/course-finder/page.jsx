"use client";
// pages/search.js
import { useState } from "react";
import CourseCard from "../components/CourseCard";

const coursesData = [
  {
    title: "Course 1",
    price: "$99",
    rating: "4.5",
    reviews: "120",
    teacher: "John Doe",
    description: "Description for Course 1",
    image: "https://via.placeholder.com/300",
    link: "/courses/course-1",
  },
  {
    title: "Course 2",
    price: "$79",
    rating: "4.2",
    reviews: "90",
    teacher: "Jane Smith",
    description: "Description for Course 2",
    image: "https://via.placeholder.com/300",
    link: "/courses/course-2",
  },
  {
    title: "Course 3 ",
    price: "$79",
    rating: "4.2",
    reviews: "90",
    teacher: "Jane Smith",
    description: "Description for Course 2",
    image: "https://via.placeholder.com/300",
    link: "/courses/course-2",
  },
  {
    title: "Course 4",
    price: "$79",
    rating: "4.2",
    reviews: "90",
    teacher: "Jane Smith",
    description: "Description for Course 2",
    image: "https://via.placeholder.com/300",
    link: "/courses/course-2",
  },
  {
    title: "Course 5",
    price: "$79",
    rating: "4.2",
    reviews: "90",
    teacher: "Jane Smith",
    description: "Description for Course 2",
    image: "https://via.placeholder.com/300",
    link: "/courses/course-2",
  },
  {
    title: "Course 6",
    price: "$79",
    rating: "4.2",
    reviews: "90",
    teacher: "Jane Smith",
    description: "Description for Course 2",
    image: "https://via.placeholder.com/300",
    link: "/courses/course-2",
  },
  // Add more course data as needed
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Perform search logic here, such as filtering courses based on searchTerm

    setSearchResults(coursesData);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center w-96 m-auto">
        <input
          type="text"
          placeholder="Search courses..."
          className="border rounded-lg py-2 px-4 outline-none w-full text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-slate-900 hover:underline border border-slate-100 mx-2 rounded-lg text-white font-bold py-2 px-4"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {searchResults.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
