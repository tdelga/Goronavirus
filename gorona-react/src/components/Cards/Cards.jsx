import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from 'classnames';
import CountUp from "react-countup";

const Cards = (props) => {
  if(!props.data){
    return (<h1 style={{textAlign: "center"}}>LOADING DATA, PLEASE WAIT . . . </h1>);
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify="center">
        <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.confirmados)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={props.data.Global.TotalConfirmed} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(props.data.Date).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.activos)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Active</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={props.activeCases} duration={2.5} separator="," />  
            </Typography>
            <Typography color="textSecondary">{new Date(props.data.Date).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.recuperados)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={props.data.Global.TotalRecovered} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(props.data.Date).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.muertos)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={props.data.Global.TotalDeaths} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(props.data.Date).toDateString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
