import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  console.log(activities);

  function handleAddActivity(newData) {
    setActivities([...activities, { ...newData, id: uid() }]);
  }

  function handleDeleteActivity(id) {
    setActivities(
      activities.filter((activity) => (activity.id !== id ? true : false))
    );
  }

  const [weather, setWeather] = useState();
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        if (response.ok) {
          const weatherResponse = await response.json();
          console.log(weatherResponse);

          setWeather(weatherResponse);
        } else {
          console.log("response is not okay");
        }
      } catch (error) {
        error(error);
      }
    }
    fetchWeather();
  }, []);

  function filteredActivities(activities) {
    return activities.filter(
      (activity) => activity.isForGoodWeather === weather?.isGoodWeather
    );
  }

  return (
    <div className="app">
      <h1>
        <span role="img">{weather?.condition}</span>
        {weather?.temperature}
      </h1>
      <List
        activities={filteredActivities(activities)}
        isGoodWeather={weather?.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity}></Form>
    </div>
  );
}
