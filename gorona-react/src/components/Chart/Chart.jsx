import { HorizontalBar } from "react-chartjs-2";
import React, { Component } from "react";
import styles from "./Chart.module.css";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo:'Primer chart test'
    };
  }


  render() {
    function ass(arregloC, arregloR, arregloD){
      return {labels: ["USA","Brasil","Argentina"],
          
      datasets: [
        {
          label: 'Infectados',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: arregloC
        },
        {
          label: 'Recuperados',
          backgroundColor: 'rgba(0,255,0,0.2)',
          borderColor: 'rgba(0,255,0,0.1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0,255,0,0.4)',
          hoverBorderColor: 'rgba(0,255,0,1)',
          data: arregloR
        },
        {
          label: 'Fallecidos',
          backgroundColor: 'rgba(0,0,255,0.2)',
          borderColor: 'rgba(0,0,255,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0,0,255,0.4)',
          hoverBorderColor: 'rgba(0,0,255,1)',
          data: arregloD
        },

      ]}
    
    };
    console.log(this.props)
    return (
        <div className={styles.chart}>
          <HorizontalBar
            data={ass(this.props.confirmed, this.props.recovered, this.props.deaths)}
            
            options={{
              title: {
                display: true,
                fontSize: 20,
                text: this.state.titulo,
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
}export default Charts;
