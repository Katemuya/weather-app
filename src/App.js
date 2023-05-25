import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";

export default function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newData) {
    setActivities([...activities, { ...newData, id: uid() }]);
  }
  return <Form onAddActivity={handleAddActivity}></Form>;
}
