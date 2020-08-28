import React, { useState, useEffect } from "react";

import "./App.css";
import { useFetchData } from "hooks/";

function App() {
  console.log("render");
  const { status, data, error } = useFetchData("/todos");

  if (status === "idle" || status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>{error}</div>;
  }

  return <div className="App"></div>;
}

export default App;
