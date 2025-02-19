export default function PersonalDetails() {
  return (
    <div id="personal-details">
      <h2>Personal-Details</h2>
      <div id="inputs">
        <div className="input-items"></div>
        <div className="input-items">
          <label htmlFor="name">
            <h4>Name</h4>
          </label>
          <input type="text" id="name" />
        </div>
        <div className="input-items">
          <label htmlFor="number">
            <h4>Mobile Number</h4>{" "}
          </label>
          <input type="tel" id="number" />
        </div>
        <div className="input-items">
          <label htmlFor="mail">
            <h4>E-Mail id</h4>
          </label>
          <input type="mail" id="mail" />
        </div>
        <div className="input-items">
          <label htmlFor="links">
            <h4>Links</h4>
          </label>
          <input type="text" id="links" />
        </div>
      </div>
    </div>
  );
}
