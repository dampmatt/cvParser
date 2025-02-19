import { useContext } from "react";
import { DataContext } from "../context";

export default function PersonalDetails() {
  const { cvData, setCvData } = useContext(DataContext);
  const handleChange = (e) => {
    setCvData({
      ...cvData,
      personalDetails: {
        ...cvData.personalDetails,
        [e.target.id]: e.target.value,
      },
    });
  };
  return (
    <div id="personal-details">
      <h2>Personal-Details</h2>
      <div id="inputs">
        <div className="input-items">
          <label htmlFor="name">
            <h4>Name</h4>
          </label>
          <input type="text" id="name" onChange={handleChange} />
        </div>
        <div className="input-items">
          <label htmlFor="number">
            <h4>Mobile Number</h4>{" "}
          </label>
          <input type="tel" id="number" onChange={handleChange} />
        </div>
        <div className="input-items">
          <label htmlFor="email">
            <h4>E-Mail id</h4>
          </label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-items">
          <label htmlFor="links">
            <h4>Links</h4>
          </label>
          <input type="text" id="links" onChange={handleChange} />
        </div>
        <div className="input-items">
          <label htmlFor="linkName">
            <h4>Link Name</h4>
          </label>
          <input type="text" id="linkName" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
