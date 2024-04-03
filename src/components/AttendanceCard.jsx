"use client";
import { useState } from "react";

const students = [
  { rollNumber: 1, name: "John Doe" },
  { rollNumber: 2, name: "Jane Smith" },
  // Add more students as needed
];

const AttendanceCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAbsent = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePresent = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const currentStudent = students[currentIndex];

  if (!currentStudent) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Attendance for all students confirmed!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className=" shadow-lg p-4 rounded-lg bg-slate-700">
        <p className="text-lg font-semibold">
          Roll Number: {currentStudent.rollNumber}
        </p>
        <p className="text-lg mt-2">Name: {currentStudent.name}</p>
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleAbsent}
            className="bg-red-500 hover:bg-red-600 text-black font-semibold py-2 px-4 rounded mr-4"
          >
            Absent
          </button>
          <button
            onClick={handlePresent}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded"
          >
            Present
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
