import React from "react";
import styles from "./App.module.css";
import { Chart, Cards, GetRequest, Navbar } from "./components";
import { fetchData } from "./api";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    data: {},
  }
  async componentDidMount(){
    const fetchedData = await fetchData();

    const activeCases = fetchedData.data.Global.TotalConfirmed - fetchedData.data.Global.TotalRecovered;
    this.setState({ data: fetchedData, activeCases});
    
  }


render(){
  const { data } = this.state;
  return ( 
    <Router> 
        <Navbar />
        <Switch>
          <Route path="/cards">
            <Cards data={data.data} activeCases={this.state.activeCases} />
          </Route>
          <Route path="/charts">
            <Chart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
  function Home(){
  return (
    <div>
      <h1 className={styles.container} style={{textAlign: "center" ,width: "100%"}}>Welcome to Jumanji</h1>
    </div>
  );
}
}
}export default App;