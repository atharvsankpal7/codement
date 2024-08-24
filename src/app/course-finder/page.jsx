"use client";
// pages/search.js
import { useState } from "react";
import CourseCard from "../../components/CourseCard";

const removeHtmlTags = (input) => {
  // Remove HTML tags
  let cleanText = input.replace(/<[^>]*>?/gm, "");
  // Stop rendering after the first period (.)
  const firstPeriodIndex = cleanText.indexOf(".");
  if (firstPeriodIndex !== -1) {
    cleanText = cleanText.substring(0, firstPeriodIndex + 1); // Include the period
  }
  return cleanText;
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    try {
      fetch("http://localhost:5000/process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchTerm }),
      })
        .then((response) => response.json())
        .then((data) => {
          const coursesArray = Object.values(data).map((course) => ({
            ...course,
            title: removeHtmlTags(course.title),
          }));  
          setSearchResults(coursesArray);
        })
        .catch((error) => {
          console.error("Error:", error);
          setSearchResults([]);
        });
    } catch (err) {
      console.error("Error:", err);
      setSearchResults([]);
    }
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
