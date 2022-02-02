import React from "react";
import "./App.css";
import AppContainer from "./components/AppContainer/AppContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <AppContainer />
      </Router>
    </>
  );
}

export default App;
