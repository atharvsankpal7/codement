"use client";

import React, { useState } from "react";
import Dropdown from "@/components/Dropdown";

const Dashboard = () => {
  const [academicYear, setAcademicYear] = useState("");
  const [division, setDivision] = useState("");
  const [subject, setSubject] = useState("");

  // Dummy data for options
  const academicYearOptions = ["FY", "SY", "TY", "B.Tech"];
  const divisionOptions = ["A", "B"];
  const subjectOptions = ["Maths", "Science", "History", "English"];

  const handleAcademicYearChange = (e) => {
    setAcademicYear(e.target.value);
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col">
      <div className="grid grid-cols-3 gap-4 my-auto">
        <Dropdown
          label="Academic Year"
          options={academicYearOptions}
          value={academicYear}
          onChange={handleAcademicYearChange}
        />
        <Dropdown
          label="Division"
          options={divisionOptions}
          value={division}
          onChange={handleDivisionChange}
        />
        <Dropdown
          label="Subject"
          options={subjectOptions}
          value={subject}
          onChange={handleSubjectChange}
        />
      </div>

      <div className="flex">
        <button className="bg-transparent hover:bg-slate-100 text-slate-100 font-semibold hover:text-black py-2 px-4 border border-slate-100 hover:border-transparent rounded-lg my-3 hover:underline mx-auto">
          Get Report
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
