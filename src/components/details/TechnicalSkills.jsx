import { useContext } from "react";
import { DataContext } from "../context";

export default function TechnicalSkills() {
  const { cvData, setCvData } = useContext(DataContext);

  const handleChange = (e) => {
    setCvData({
      ...cvData,
      skills: {
        ...cvData.skills,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div id="technical-skills">
      <div className="heading">
        <h2>skills</h2>
      </div>
      <div className="skills-inpt">
        <label htmlFor="tech-skills">
          {" "}
          <b>Skills </b>
        </label>
        <input type="text" name="techskills" onChange={handleChange} />

        <label htmlFor="frameworks">
          <b> Frameworks </b>
        </label>
        <input type="text" name="frameworks" onChange={handleChange} />

        <label htmlFor="tools">
          <b> Developer Tools </b>
        </label>
        <input type="text" name="tools" onChange={handleChange} />

        <label htmlFor="libraries">
          {" "}
          <b>Libraries</b>
        </label>
        <input type="text" name="libraries" onChange={handleChange} />
      </div>
    </div>
  );
}
