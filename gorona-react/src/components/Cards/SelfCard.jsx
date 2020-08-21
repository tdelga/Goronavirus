import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from 'classnames';
import CountUp from "react-countup";

const SelfCard = (props) => {
  return (
        <Grid item component={Card} xs={12} md={4} className={cx(styles.card, props.style)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{props.name}</Typography>
                <Typography variant="h5">
                <CountUp start={0} end={props.data} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(props.date).toDateString()}</Typography>
            </CardContent>
        </Grid>
  );
};

export default SelfCard;
