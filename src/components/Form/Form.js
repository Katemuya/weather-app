export default function Form() {
  return (
    <form className="form">
      <h1>Add new Activity:</h1>
      <label className="form__input-label" htmlFor="name">
        Name:
      </label>
      <input className="form__name-input" id="name" name="name" />
      <label className="form__checkbox-label" htmlFor="weatherCheckbox">
        Good-weather Activity
      </label>
      <input
        className="form__checkbox-input"
        type="checkbox"
        id="weatherCheckbox"
        name="weatherCheckbox"
      />

      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
}
