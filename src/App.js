import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newData) {
    setActivities([...activities, { ...newData, id: uid() }]);
  }

  const isGoodWeather = true;
  function filteredActivities(activities) {
    return activities.filter(
      (activity) => activity.isForGoodWeather === isGoodWeather
    );
  }

  return (
    <>
      <List activities={filteredActivities(activities)} isGoodWeather />
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}
