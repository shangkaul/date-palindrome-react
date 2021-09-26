import "./styles.css";

export default function Form(props) {
  function formHandler(e) {
    e.preventDefault();
    props.handleForm(e.target.dob.value);
  }
  return (
    <div className="Form">
      <form onSubmit={formHandler.bind(this)}>
        <div className="forminp">
          <label>Date of Birth</label>
          <input
            type="text"
            name="dob"
            placeholder="dd-mm-yyyy"
            onFocus={(this.type = "date")}
            onBlur={(this.type = "text")}
          />
        </div>
        <br />

        <input className="sub-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}
