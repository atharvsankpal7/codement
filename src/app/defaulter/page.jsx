"use client";

import React, { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Link from 'next/link'
const Dashboard = () => {
  const [academicYear, setAcademicYear] = useState("");
  const [division, setDivision] = useState("");
  const [subject, setSubject] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [showEmailSent, setShowEmailSent] = useState(false);

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

  const handleGetReport = () => {
    setShowSpinner(true);
    // Simulate email sending, replace this with your actual logic to send email
    setTimeout(() => {
      setShowSpinner(false);
      setShowEmailSent(true);
      // Reset after 5 seconds
      setTimeout(() => {
        setShowEmailSent(false);
      }, 2200);
    }, 3300); // Simulate a 5-second email sending process
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
        <button
          className="bg-transparent hover:bg-slate-100 text-slate-100 font-semibold hover:text-black py-2 px-4 border border-slate-100 hover:border-transparent rounded-lg my-3  mx-auto"
          onClick={handleGetReport}
        >
          Get Report
        </button>
        <Link
          className="bg-transparent hover:bg-slate-100 text-slate-100 font-semibold hover:text-black py-2 px-4 border border-slate-100 hover:border-transparent rounded-lg my-3  mx-auto"
          href="/attendance"
        >
          Take Attendance
        </Link>
      </div>

      {showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <img src="/spinner.gif" alt="Loading..." />
        </div>
      )}

      {showEmailSent && (
        <div className="absolute inset-0 flex items-center justify-center flex-col bg-gray-900 bg-opacity-100">
          <p className="text-white">Process Request Sent!</p>
          <p className="text-white">You will recieve mail shortly!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
