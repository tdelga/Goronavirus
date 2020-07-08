import React from "react";
import "./App.css";
import Chart from "./components/Chart.js";

function App() {
  return (
    <div id="background">
      <div id="ActiveCases">
        <Chart
          backgroundColor="rgba(255,77,77,0.5)"
          label="Active Cases"
          titleText="Countries with most active cases"
        />
      </div>
      <hr></hr>
      <div id="RecoveredCases">
        <Chart
          backgroundColor="rgba(112,206,64,0.5)"
          label="Recovered Cases"
          titleText="Countries with most recovered cases"
        />
      </div>
      <hr></hr>
      <div id="Deaths">
        <Chart
          backgroundColor="rgba(70,75,78,0.5)"
          label="Deaths"
          titleText="Countries with most deaths"
        />
      </div>
    </div>
  );
}

export default App;
