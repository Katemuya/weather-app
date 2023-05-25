export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h3>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now: "}
      </h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name}
            <button
              className="list-button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
