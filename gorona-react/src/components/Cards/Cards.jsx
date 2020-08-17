import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import SelfCard from "./SelfCard.jsx";
import cx from 'classnames';
import CountUp from "react-countup";

const Cards = (props) => {
  if(!props.data){
    return (<h1 className={styles.container} style={{textAlign: "center",justifyContent:'center'}}>LOADING DATA, PLEASE WAIT . . . </h1>);
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={5} justify="center">
        <SelfCard
            name={"Confirmed"}
            data={props.data.confirmed.value}
            date={props.data.lastUpdate}
            style={styles.confirmados}
        />
        <SelfCard
            name={"Active"}
            data={props.activeCases}
            date={props.data.lastUpdate}
            style={styles.activos}
        />
        <SelfCard
            name={"Recovered"}
            data={props.data.recovered.value}
            date={props.data.lastUpdate}
            style={styles.recuperados}
        />
        <SelfCard
            name={"Deaths"}
            data={props.data.deaths.value}
            date={props.data.lastUpdate}
            style={styles.muertos}
        />
      </Grid>
    </div>
  );
};

export default Cards;
