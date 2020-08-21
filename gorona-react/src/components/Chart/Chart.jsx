import { Bar } from "react-chartjs-2";
import React, { Component } from "react";
import styles from "./Chart.module.css";
import { fetchCharts } from "./../../api";
import  Selects  from "./../Select/Selects"

class Charts extends Component {

  getOnlyLabel(seleccionados){
    var reformattedArray = seleccionados.map(function(obj){ 
      var rObj = {};
      rObj = obj.label;
      return rObj;
   });
   return reformattedArray;
  }
  
  getOnlyValues(seleccionados){
    var reformattedArray = seleccionados.map(function(obj){ 
      var rObj = {};
      rObj = obj.value;
      return rObj;
   });
   return reformattedArray;
  }
  
  async componentDidMount(){
    this.apppendData(this.getOnlyValues(this.state.seleccionados))

  }

  async apppendData(isos) {
    var dataC = [];
    var dataR = [];
    var dataD = [];
    for (var i=0; i < isos.length; i++){
      var aux = await fetchCharts(isos[i]);
      dataC.push(aux.values[0])
      dataR.push(aux.values[1])
      dataD.push(aux.values[2])

    }
    this.setState({dataC: dataC})
    this.setState({dataR: dataR})
    this.setState({dataD: dataD})
  }

  constructor(props) {
    super(props);

    this.state = {
      titulo:'Primer chart test',
      seleccionados: [ {value: "US", label:"US"}, {value: "BR", label: "Brazil"}, {value:"AR",label:"Argentina"} ] 
    };
  }
  onChange = (newC) => {
    this.setState({ seleccionados: newC }, function () {
      this.apppendData(this.getOnlyValues(this.state.seleccionados))
    });
  }
  render() {
    function ass(arregloC, arregloR, arregloD, arregloLabels){
      //cambiar esto por lo del state de seleccionados
      return {labels: arregloLabels,
          
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
    return (
        <div>
          <Selects selected={this.state.seleccionados} multi={true} onChange={this.onChange} />
          <div className={styles.chart}>
            <Bar
              data={ass(this.state.dataC, this.state.dataR, this.state.dataD,this.getOnlyLabel(this.state.seleccionados))}
              
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
        </div>
    );
    
  }
}export default Charts;
