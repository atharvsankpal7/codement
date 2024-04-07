"use client";

import React, { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Link from 'next/link'
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
    <div className="container mx-auto p-4 flex flex-col h-screen ">
      <div className="grid gap-4 mt-auto items-center  ">
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

      <div className="flex mb-auto flex-col">
        <button className="bg-transparent hover:bg-slate-100 text-slate-100 font-semibold hover:text-black py-2 px-4 border border-slate-100 hover:border-transparent rounded-lg my-3  mx-auto">
          Get Report
        </button>
        <Link className="bg-transparent hover:bg-slate-100 text-slate-100 font-semibold hover:text-black py-2 px-4 border border-slate-100 hover:border-transparent rounded-lg my-3  mx-auto" href='/attendance'>
          Take Attendance
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
