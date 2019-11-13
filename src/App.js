import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
const HatsPage = () => {
  console.log("hatss");
  return <h1>Hello I am Hats</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hat" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
