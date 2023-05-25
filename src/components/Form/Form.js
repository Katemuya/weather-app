import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      isForGoodWeather: event.target.weatherCheckbox.checked,
    };

    const color = "#fff";
    const radius = 4;
    const number = 100;

    const object = { color, radius, number };

    console.log(object);

    onAddActivity(data);

    event.target.reset();
    event.target.name.focus();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
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
