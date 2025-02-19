// import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import Projects from "./Projects";
import Achievements from "./Achievements";
import TechnicalSkills from "./TechnicalSkills";

export default function DetailsDiv() {
  return (
    <div id="detail-container">
      <PersonalDetails />
      <EducationDetails />
      <Projects />
      <Achievements />
      <TechnicalSkills />
    </div>
  );
}
