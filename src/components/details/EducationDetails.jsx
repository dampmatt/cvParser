import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context";

export default function EducationDetails() {
  const { cvData, setCvData } = useContext(DataContext);
  const [formValues, setFormValues] = useState([
    { name: "", stream: "", CGPA: "", EndDate: "" },
  ]);
  let handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValues); // Logs the form data
    setCvData((prevData) => ({
      ...prevData,
      educationDetails: formValues,
    }));
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { name: "", stream: "", CGPA: "", EndDate: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  return (
    <div id="education-details">
      <div className="heading">
        <h2>Educational Details</h2>
        <button
          className="button add"
          type="button"
          onClick={() => addFormFields()}
        >
          Add
        </button>
      </div>
      <form id="education-details-items" onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div className="ed-inpts" key={index}>
            <label>Institute Name</label>
            <input
              type="text"
              name="name"
              value={element.name || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <label>Stream</label>
            <input
              type="text"
              name="stream"
              value={element.stream || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <label>CGPA</label>
            <input
              type="text"
              name="CGPA"
              value={element.CGPA || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <label>End Date</label>
            <input
              type="date"
              name="EndDate"
              value={element.EndDate || ""}
              onChange={(e) => handleChange(index, e)}
            />

            <button
              type="button"
              className="button remove"
              onClick={() => removeFormFields(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button className="button submit" type="submit" id="education-sbmt">
          Submit
        </button>
      </form>
    </div>
  );
}
