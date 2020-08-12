import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import SelfCard from "./SelfCard.jsx";
import cx from 'classnames';
import CountUp from "react-countup";

const Cards = (props) => {
  if(!props.data){
    return (<h1 className={styles.container} style={{textAlign: "center"}}>LOADING DATA, PLEASE WAIT . . . </h1>);
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
        <SelfCard
            data={props.data.Global.TotalConfirmed}
            date={props.data.Date}
            style={styles.confirmados}
        />
        <SelfCard
            data={props.activeCases}
            date={props.data.Date}
            style={styles.activos}
        />
        <SelfCard
            data={props.data.Global.TotalRecovered}
            date={props.data.Date}
            style={styles.recuperados}
        />
        <SelfCard
            data={props.data.Global.TotalDeaths}
            date={props.data.Date}
            style={styles.muertos}
        />
      </Grid>
    </div>
  );
};

export default Cards;
