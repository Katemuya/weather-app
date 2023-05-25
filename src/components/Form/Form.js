import "./Form.css";

export default function Form() {
  return (
    <form className="form">
      <h2>Add new Activity:</h2>
      <div className="form__name-container">
        <label className="form__input-label" htmlFor="name">
          Name:
        </label>
        <input className="form__name-input" id="name" name="name" />
      </div>
      <div className="form__checkbox-container">
        <label className="form__checkbox-label" htmlFor="weatherCheckbox">
          Good-weather Activity:
        </label>
        <input
          className="form__checkbox-input"
          type="checkbox"
          id="weatherCheckbox"
          name="weatherCheckbox"
        />
      </div>

      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
}
