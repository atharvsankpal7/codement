import React from "react";
import AttendanceCard from "../../components/AttendanceCard";
import loadCSV from "../actions/loadCSV";
const AttendancePage = async () => {
  
  const students = await loadCSV();
  return (
    <>
      <AttendanceCard students={students} />
    </>
  );
};

export default AttendancePage;
