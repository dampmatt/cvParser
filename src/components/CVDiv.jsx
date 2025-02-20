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

function ListItem({ text }) {
  console.log(text);
  const sentence = text
    .split(".")
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);

  return sentence.map((item, index) => <li key={index}>{item}.</li>);
}

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
        {cvData.projects?.length > 0 &&
          cvData.projects.map((pjs, index) => (
            <div className="cv-pj-item" key={index}>
              <h1>
                <span id="cv-pj-heading">{pjs.heading}</span>|{" "}
                <span id="cv-tech-used">{pjs.tech}</span>
              </h1>
              <ul className="cv-desc">
                <ListItem text={pjs.description} />
              </ul>
            </div>
          ))}
      </div>
      <div id="cv-achievements">
        <h3>Achievements</h3>
        <hr />
        {cvData.achievements?.length > 0 &&
          cvData.achievements.map((achvs, index) => (
            <div className="cv-achv-item" key={index}>
              <h1 id="cv-achv-heading">{achvs.heading}</h1>
              <ul className="cv-desc">
                <ListItem text={achvs.description} />
              </ul>
            </div>
          ))}
      </div>
      <div id="cv-skills">
        <h3>Skills</h3>
        <hr />
        <div id="skills">
          <div id="tech-skills">
            <h5>Technical Skills:</h5>
            <p>{cvData.skills.techskills}</p>
          </div>
          <div id="frameworks">
            <h5>Frameworks:</h5>
            <p>{cvData.skills.frameworks}</p>
          </div>

          <div id="tools">
            <h5>Developer Tools:</h5>
            <p>{cvData.skills.tools}</p>
          </div>
          <div id="libs">
            <h5>Libraries:</h5>
            <p>{cvData.skills.libraries}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
