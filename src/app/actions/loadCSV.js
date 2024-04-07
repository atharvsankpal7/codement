"use server";
import csvStringify from "csv-stringify";
import fs from "fs";
import csv from "csv-parser";
import { resourceLimits } from "worker_threads";
import { cookies } from "next/headers";
const loadCSV = async () => {
  return new Promise((resolve, reject) => {
    const results = [];
    const file =
      "F:\\study material\\codes\\projects\\Next.js\\course-finder\\src\\app\\actions\\FY_A_ML2.csv";

    fs.createReadStream(file)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        console.log(results);
        resolve(results);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};


export async function updateCSV(updatedAttendance) {
  const file =
    "F:\\study material\\codes\\projects\\Next.js\\course-finder\\src\\app\\actions\\FY_A_ML2.csv";
  const results = [];

  try {
    const readStream = fs.createReadStream(file);

    readStream
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        // Update attendance
        results.forEach((student, index) => {
          console.log(student.Attendance_Days);
          console.log(updatedAttendance[index]);
          student.Attendance_Days =
            parseInt(student.Attendance_Days) + updatedAttendance[index];
        });

        // Convert JSON data to CSV format
        const csvData = convertToCSV(results);

        console.log(csvData);
        console.log(results);

        // Write the updated CSV data to a new file
        await new Promise((resolve, reject) => {
          fs.writeFile(
            "F:\\study material\\codes\\projects\\Next.js\\course-finder\\src\\app\\actions\\FY_A_ML2.csv",
            csvData,
            "utf8",
            (err) => {
              if (err) {
                console.error("Error writing CSV file:", err);
                reject(err);
              } else {
                console.log("CSV file updated successfully");
                resolve();
              }
            }
          );
        });
      })
      .on("error", (error) => {
        console.error("Error reading CSV file:", error);
      });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to convert JSON to CSV
function convertToCSV(results) {
  const csvHeader =
    [
      "Roll",
      "Name",
      "Gender",
      "Attendance_Days",
      "Attendance_Percentage",
      "Student_Mail",
      "Parent_Mail",
    ].join(",") + "\n";
  const csvBody = results.map((obj) => Object.values(obj).join(",")).join("\n");
  return csvHeader + csvBody;
}
export default loadCSV;
