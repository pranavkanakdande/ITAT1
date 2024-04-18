import React, { useState, useEffect } from "react";

import information from "../Data/Json";
import "../Styles/Home.css";

function Home() {
  const [data, setdata] = useState([]);
  const [bench, setBench] = useState("");
  const [appealType, setAppealType] = useState("");
  const [date, setDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  
//   const handleSearch = () => {
//     const selectedDate = new Date(date); // Parse the selected date
  
//     const filtered = information.filter((row) => {
//       const benchMatch = bench === "" || row.Bench === bench;
//       const appealTypeMatch = appealType === "" || row.Appealtype === appealType;
  
//       // Format the JSON date to match the selected date format (DD-MM-YYYY)
//       const jsonDate = new Date(row.date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2-$1-$3"));
  
//       // Compare the date without time components
//       const dateMatch = jsonDate.getTime() === selectedDate.getTime();
  
//       console.log("Row:", row);
//       console.log("Bench Match:", benchMatch);
//       console.log("Appeal Type Match:", appealTypeMatch);
//       console.log("Date Match:", dateMatch);
  
//       return benchMatch && appealTypeMatch && dateMatch;
//     });
  
//     console.log("Filtered Data:", filtered);
//     setFilteredData(filtered);
//   };
  
  
const handleSearch = () => {
    const selectedDate = new Date(date); // Parse the selected date
  
    const filtered = information.filter((row) => {
      // Format the JSON date to match the selected date format (DD-MM-YYYY)
      const [day, month, year] = row.date.split('-');
      const jsonDate = new Date(year, month - 1, day); // Note: month - 1 because months are 0-indexed in JavaScript
  
      // Reset time components to 00:00:00 for both dates
      selectedDate.setHours(0, 0, 0, 0);
      jsonDate.setHours(0, 0, 0, 0);
  
      // Compare the dates
      const dateMatch = jsonDate.getTime() === selectedDate.getTime();
  
      return dateMatch;
    });
  
    setFilteredData(filtered); // Update the state with the filtered data
  };
  
  
  
  
  

  return (
    <>
      <div className="main-nav">
        <div className="navbar">
            <div className="nav-link">
          <div className="dropdown">
            <select
              id="Bench"
              value={bench}
              onChange={(e) => setBench(e.target.value)}
            >
              Bench
              <option>Bench</option>
              <option value="City 0">Agra</option>
              <option>Ahmedabad</option>
              <option>Allahabad</option>
              <option>Amritsar</option>
              <option>Bangalore</option>
              <option>Chandigarh</option>
              <option>Chennai</option>
              <option>Cochin</option>
              <option>Dehradun</option>
              <option>Delhi</option>
              <option>Guwahati</option>
              <option>Hyderabad</option>
              <option>Indore</option>
              <option>Jabalpur</option>
              <option>Jaipur</option>
              <option>Jodhpur</option>
              <option>Kolkata</option>
              <option>Lucknow</option>
              <option>Mumbai</option>
              <option>Nagpur</option>
              <option>Panji</option>
              <option>Patna</option>
              <option>Pune</option>
              <option>Raipur</option>
              <option>Rajkot</option>
              <option>Ranchi</option>
              <option>Surat</option>
              <option>Varanasi</option>
              <option>Visakhapatnam</option>
            </select>
          </div>
          <div className="dropdown">
            <select
              id="Appeal-type"
              value={appealType}
              onChange={(e) => setAppealType(e.target.value)}
            >
              Appeal Type
              <option>Appeal Type</option>
              <option>Black Money Appeal</option>
              <option>Cross Objection</option>
              <option>Estate Duty Appeal</option>
              <option>Expenditure Tax Appeal</option>
              <option>Gift Tax Appeal</option>
              <option>High Court Appeal</option>
              <option>Interest Tax Appeal</option>
              <option>Income Tax Appeal</option>
              <option>Income Tax (International Taxation) Appeal</option>
              <option>Income Tax (Search & Seizure) Appeal</option>
              <option>Income Tax (Transfer Pricing) Appeal</option>
              <option>Miscellaneous Application</option>
              <option>Reference Appeal</option>
              <option>Stay Application</option>
              <option>Sur Tax Appeal</option>
              <option>Security Transaction Tax Appeal</option>
              <option>TDS Appeal</option>
              <option>Wealth Tax Appeal</option>
            </select>
          </div>

          <div className="dropdown">
            <input
              type="date"
              id="Test_DatetimeLocal"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <button id="search" onClick={handleSearch}>
              Submit
            </button>
          </div>
        </div>
        </div>
      </div>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Appeal Number</th>
              <th>Bench</th>
              <th>Appeal Type</th>
              <th>Appellant</th>
              <th>Respondent</th>
              <th>Count</th>
              <th>Download Link</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
          {filteredData.length > 0 
              ? filteredData.map((row, index) => (
                 <tr key={index}>
                    <td>{row.Appealnumber}</td>
                    <td>{row.Bench}</td>
                    <td>{row.Appealtype}</td>
                    <td>{row.Appellant}</td>
                    <td>{row.Respondent}</td>
                    <td>{row.Count}</td>
                    <td>
                      <a href="#" style={{ textDecoration: "none" }}>
                        {row.DownloadLink}
                      </a>
                    </td>
                    <td>{row.date}</td>
                 </tr>
                ))
              : filteredData.map((row, index) => (
                 <tr key={index}>
                    <td>{row.Appealnumber}</td>
                    <td>{row.Bench}</td>
                    <td>{row.Appealtype}</td>
                    <td>{row.Appellant}</td>
                    <td>{row.Respondent}</td>
                    <td>{row.Count}</td>
                    <td>
                      <a href="#" style={{ textDecoration: "none" }}>
                        {row.DownloadLink}
                      </a>
                    </td>
                    <td>{row.date}</td>
                 </tr>
                ))}
          
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
