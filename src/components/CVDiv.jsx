import { useContext } from "react";
import { DataContext } from "./context";

const formatDate = (dateString) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [year, month] = dateString.split("-");
  console.log(month);
  return ` ${monthNames[month - 1]}, ${year}`;
};

export default function CVDiv() {
  const { cvData } = useContext(DataContext);

  return (
    <div id="cv-container">
      <div id="cv-personal-detail">
        <h1>{cvData.personalDetails.name}</h1>
        <p>
          {cvData.personalDetails.number && (
            <>{cvData.personalDetails.number}</>
          )}
          {cvData.personalDetails.number &&
            cvData.personalDetails.email &&
            " | "}
          {cvData.personalDetails.email && <>{cvData.personalDetails.email}</>}
          {(cvData.personalDetails.number || cvData.personalDetails.email) &&
            cvData.personalDetails.links &&
            " | "}
          {cvData.personalDetails.links && (
            <a href={cvData.personalDetails.links}>
              {cvData.personalDetails.linkName || cvData.personalDetails.links}
            </a>
          )}
        </p>
      </div>
      <div id="cv-education-detail">
        <h3>Education</h3>
        <hr />
        {cvData.educationDetails?.length > 0 &&
          cvData.educationDetails.map((edu, index) => (
            <div className="cv-ed-detail-item" key={index}>
              <ul className="institution-heading">
                <li>
                  <h3>{edu.name}</h3>
                </li>
                <li>
                  <p>{formatDate(edu.EndDate)}</p>
                </li>
              </ul>

              <ul className="degree-sub-details">
                <li>
                  <i> {edu.stream}</i>
                </li>
                <li>
                  <i>{edu.CGPA}</i>
                </li>
              </ul>
            </div>
          ))}
      </div>
      <div id="cv-projects">
        <h3>Projects</h3>
        <hr />
      </div>
      <div id="cv-achievements">
        <h3>Achievements</h3>
        <hr />
      </div>
      <div id="cv-skills">
        <h3>Skills</h3>
        <hr />
      </div>
    </div>
  );
}
