import React from "react";
import styles from "./App.module.css";
import { Chart, Cards, GetRequest } from "./components";
import { fetchData, fetchCharts } from "./api";

class App extends React.Component {
  state = {
    data: {},
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    const charts = await fetchCharts();

    const dataC = charts[0];
    const dataR = charts[1];
    const dataD = charts[2];
    console.log(dataC)
    const activeCases = fetchedData.data.Global.TotalConfirmed - fetchedData.data.Global.TotalRecovered;
    this.setState({ data: fetchedData, activeCases, dataC,dataR,dataD});
    
  }
  render(){
    const { data } = this.state;
    //console.log(this.state.activeCases); 

    return (
      <div className={styles.container}>
        <h1 class="jumbotron" style={{textAlign: "center" ,width: "100%"}}>LAST GLOBAL STATISTICS</h1>
        <Cards data={data.data} activeCases={this.state.activeCases} />
        <hr></hr>
        <Chart data={data.data} confirmed={this.state.dataC} recovered = {this.state.dataR} deaths= {this.state.dataD} />
      </div>
    );
  }

}

export default App;
