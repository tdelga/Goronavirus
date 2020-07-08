import { Bar } from "react-chartjs-2";
import React, { Component } from "react";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Country 1",
          "Country 2",
          "Country 3",
          "Country 4",
          "Country 5",
        ],
        datasets: [
          {
            label: "Active Cases",
            data: [300000, 70000, 50000, 30000, 15000],
            backgroundColor: [
              "rgba(243,107,107,0.5)",
              "rgba(243,107,107,0.5)",
              "rgba(243,107,107,0.5)",
              "rgba(243,107,107,0.5)",
              "rgba(243,107,107,0.5)",
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              fontSize: 20,
              text: "Countries with most active cases",
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  reverse: true, // Esto cambia el orden de los datos, de mayor a menor
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}
export default Chart;
