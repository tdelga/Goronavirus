import React from "react";
import styles from "./App.module.css";
import { Chart, Cards, GetRequest } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    const activeCases = fetchedData.data.Global.TotalConfirmed - fetchedData.data.Global.TotalRecovered;
    this.setState({ data: fetchedData, activeCases });
  }
  render(){
    const { data } = this.state;
    console.log(this.state.activeCases);
    return (
      <div className={styles.container}>
        <h1 class="jumbotron" style={{textAlign: "center" ,width: "100%"}}>LAST GLOBAL STATISTICS</h1>
        <Cards data={data.data} activeCases={this.state.activeCases} />
      </div>
    );
  }

}

export default App;
