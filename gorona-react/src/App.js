import React from "react";
import styles from "./App.module.css";
import { Chart, Cards } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }
  render(){
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <h1 class="jumbotron" style={{textAlign: "center"}}>LAST GLOBAL STATISTICS</h1>
        <Cards data={data.data}/>
      </div>
    );
  }

}

export default App;
