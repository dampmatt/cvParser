import { useState } from "react";

export default function EducationDetails() {
  const [formValues, setFormValues] = useState([
    { name: "", stream: "", CGPA: "", EndDate: "" },
  ]);

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
      <div id="education-details-items">
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
              name="endDate"
              value={element.endDate || ""}
              onChange={(e) => handleChange(index, e)}
            />
            {index ? (
              <button
                type="button"
                className="button remove"
                onClick={() => removeFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
