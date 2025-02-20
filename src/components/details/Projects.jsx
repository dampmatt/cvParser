import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context";

export default function Projects() {
  const { cvData, setCvData } = useContext(DataContext);
  const [formState, setFormState] = useState([
    { heading: "", tech: "", description: "" },
  ]);

  let handleSubmit = (event) => {
    event.preventDefault();
    setCvData((prevData) => ({
      ...prevData,
      projects: formState,
    }));
  };

  let handleChange = (index, e) => {
    let newFormState = [...formState];
    newFormState[index][e.target.name] = e.target.value;
    setFormState(newFormState);
  };

  let handleRemove = (index) => {
    let newFormState = [...formState];
    newFormState.splice(index, 1);
    setFormState(newFormState);
  };

  let handleAdd = () => {
    setFormState([...formState, { heading: "", tech: "", description: "" }]);
  };

  return (
    <div id="projects">
      <div className="heading">
        <h2>Projects</h2>
        <button id="add-projects-bttn" onClick={handleAdd}>
          Add
        </button>
      </div>

      <form id="project-items" onSubmit={handleSubmit}>
        {formState.map((ele, index) => (
          <div className="pj-inputs" key={index}>
            <label htmlFor="heading">Project Heading</label>
            <input
              type="text"
              name="heading"
              value={ele.heading}
              onChange={(e) => handleChange(index, e)}
            />

            <label htmlFor="tech">Technology Used</label>
            <input
              type="text"
              name="tech"
              value={ele.tech}
              onChange={(e) => handleChange(index, e)}
            />

            <label htmlFor="desc">Description</label>
            <input
              type="text"
              name="description"
              value={ele.description}
              onChange={(e) => handleChange(index, e)}
            />

            <button type="remove button" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="submit" className="button submit">
          Submit
        </button>
      </form>
    </div>
  );
}
