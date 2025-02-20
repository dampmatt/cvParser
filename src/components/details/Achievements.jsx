import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context";

export default function Achievements() {
  const [formState, setFormState] = useState([
    { heading: "", description: "" },
  ]);
  const { cvData, setCvData } = useContext(DataContext);

  let handleAdd = () => {
    setFormState([...formState, { heading: "", description: "" }]);
  };

  let handleRemove = (index) => {
    let newFormState = [...formState];
    newFormState.splice(index, 1);
    setFormState(newFormState);
  };

  let handleChange = (i, e) => {
    let newFormState = [...formState];
    newFormState[i][e.target.name] = e.target.value;
    setFormState(newFormState);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setCvData((prevData) => ({ ...prevData, achievements: formState }));
  };

  return (
    <div id="Achievements">
      <div className="heading">
        <h2>Achievements</h2>
        <button id="add-achv-bttn" onClick={handleAdd}>
          Add
        </button>
      </div>
      <form id="achv-items" onSubmit={handleSubmit}>
        {formState.map((ele, index) => (
          <div className="achv-inputs" key={index}>
            <label htmlFor="heading">Heading</label>
            <input
              type="text"
              name="heading"
              value={ele.heading}
              onChange={(event) => handleChange(index, event)}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={ele.description}
              onChange={(event) => handleChange(index, event)}
            />
            <button type="button" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="submit" className="submit button">
          Submit
        </button>
      </form>
    </div>
  );
}
