import React from "react";
import styles from "./App.module.css";
import { Chart, Cards, RangeCard, Navbar, ExtraInfo } from "./components";
import { fetchData } from "./api";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {
  state = {
    data: {},
  }
  async componentDidMount(){
    const fetchedData = await fetchData();

    const activeCases = fetchedData.data.confirmed.value - fetchedData.data.recovered.value;
    this.setState({ data: fetchedData, activeCases});
    console.log(fetchedData);
    
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
          <Route path="/calendar">
            <RangeCard />
          </Route>
          <Route path="/charts">
            <Chart />
          </Route>
          <Route path="/extra-info">
            <ExtraInfo />
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