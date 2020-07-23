import { HorizontalBar } from "react-chartjs-2";
import React, { Component } from "react";
import styles from "./Chart.module.css";

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
            label: this.props.label,
            data: [300000, 70000, 50000, 30000, 15000],
            backgroundColor: [
              this.props.backgroundColor,
              this.props.backgroundColor,
              this.props.backgroundColor,
              this.props.backgroundColor,
              this.props.backgroundColor,
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
        <div className={styles.chart}>
          <HorizontalBar
            data={this.state.chartData}
            options={{
              title: {
                display: true,
                fontSize: 20,
                text: this.props.titleText,
              },
              responsive: true,
              aspectRatio: 1,
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
