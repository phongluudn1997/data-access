import React, { useState, useEffect } from "react";

import "./App.css";
import { DataProfile } from "./data-access";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    DataProfile.Get("/todos")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div className="App"></div>;
}

export default App;
