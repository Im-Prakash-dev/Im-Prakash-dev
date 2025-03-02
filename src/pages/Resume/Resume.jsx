import React from 'react';
import './resume.scss'
import resume from '../../assets/Resume_2024-01.pdf';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="main-container resume">


    <div className="scrollable-content">
      <div className="top text-right flex justify-between items-center">
        <div className="left">Resume</div>
        <div className="right">
          <a href={resume} download className="download-link">
            <FaFileDownload /> <span>Download</span>
          </a>
        </div>
      </div>

      <div className="bottom flex gap-2">
        <div className="left">
        <ul>
          <li className="summary">A versatile IT professional with 6 years of experience in Graphic design, Web development and data analysis.</li>
          <li className="summary">React Frontend Developer with 2+ years of hands-on experience in building interactive and responsive web applications using React.js, Next.js, and JavaScript.</li>
          <li className="summary">Expertise in developing single-page applications (SPAs) and enhancing user interface (UI) through modern web technologies such as HTML5, CSS3, JavaScript (ES6+).</li>
          <li className="summary">Proficient in React Hooks, React Router and frontend build tools such as NPM for efficient development workflows.</li>
          <li className="summary">Strong knowledge of data visualisation tools and libraries (e.g., D3.js, Chart.js) for creating insightful, interactive charts and reports.</li>
          <li className="summary">As a Data Analyst, worked with large datasets to perform data extraction, cleaning, and transformation using tools like SQL, Excel, Google Sheet and Python (Pandas).</li>
          <li className="summary">Proficient in SQL queries and data manipulation using relational databases (MySQL, MSSQL).</li>
          <li className="summary">Strong problem-solving skills, with the ability to handle multiple tasks/projects simultaneously while ensuring high-quality delivery.</li>
          <li className="summary">Excellent communication skills, with the ability to collaborate effectively with cross-functional teams including backend developers, data scientists.</li>
          <li className="summary">Proficient in Git for version control.</li>
        </ul>
        </div>
        <div className="right">
          Experience
        </div>
      </div>
      </div>
    </div>

        

  );
}

export default Resume;
