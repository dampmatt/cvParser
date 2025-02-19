// import { useState } from "react";
import PersonalDetails from "./details/PersonalDetails";
import EducationDetails from "./details/EducationDetails";
import Projects from "./details/Projects";
import Achievements from "./details/Achievements";
import TechnicalSkills from "./details/TechnicalSkills";

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
