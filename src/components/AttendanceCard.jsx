"use client";
import { useEffect, useState } from "react";
import { updateCSV } from "../../src/app/actions/loadCSV";
import { useRouter } from "next/navigation";

const AttendanceCard = (props) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAttendance, setCurrentAttendance] = useState([]);
  const { students } = props;
console.log(students)
  const handleAbsent = () => {
    setCurrentAttendance([...currentAttendance, 0]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePresent = () => {
    setCurrentAttendance([...currentAttendance, 1]);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const currentStudent = students[currentIndex];
  

  useEffect(() => {
    if (!currentStudent) {
      updateCSV(currentAttendance);
      router.push("/defaulter");
    }
  }, [currentStudent, currentAttendance, router]);

  return (
    currentStudent &&
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className=" shadow-lg p-4 rounded-lg bg-slate-700">
        <p className="text-lg font-semibold">
          Roll Number: {currentStudent.Roll}
        </p>
        <p className="text-lg mt-2">Name: {currentStudent.Name}</p>
        <p className="text-lg mt-2">
          Attended Lectures: {currentStudent.Attendance_Days}
        </p>
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
