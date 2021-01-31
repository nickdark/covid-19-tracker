import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import cx from 'classnames';
import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
   if (!confirmed) {
      return 'Loading...';
   }
   if (recovered.value === 0) {
      return (
         <div className={styles.container}>
            <Grid container spacing={2} justify='center'>
               <Grid
                  item
                  component={Card}
                  xs={12}
                  md={5}
                  className={cx(styles.card, styles.infected)}>
                  <CardContent>
                     <Typography color='textSecondary' gutterBottom>
                        Infected
                     </Typography>
                     <Typography variant='h5'>
                        <CountUp
                           start={0}
                           end={confirmed.value}
                           duration={2}
                           separator=','></CountUp>
                     </Typography>
                     <Typography color='textSecondary'>
                        {new Date(lastUpdate).toDateString()}
                     </Typography>
                     <Typography variant='body2'>
                        Number of active cases of COVID-19
                     </Typography>
                  </CardContent>
               </Grid>
               <Grid
                  item
                  component={Card}
                  xs={12}
                  md={5}
                  className={cx(styles.card, styles.deaths)}>
                  <CardContent>
                     <Typography color='textSecondary' gutterBottom>
                        Deaths
                     </Typography>
                     <Typography variant='h5'>
                        <CountUp
                           start={0}
                           end={deaths.value}
                           duration={2}
                           separator=','></CountUp>
                     </Typography>
                     <Typography color='textSecondary'>
                        {new Date(lastUpdate).toDateString()}
                     </Typography>
                     <Typography variant='body2'>
                        Number of death cases of COVID-19
                     </Typography>
                  </CardContent>
               </Grid>
            </Grid>
         </div>
      );
   } else {
      return (
         <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
               <Grid
                  item
                  component={Card}
                  xs={12}
                  md={3}
                  className={cx(styles.card, styles.infected)}>
                  <CardContent>
                     <Typography color='textSecondary' gutterBottom>
                        Infected
                     </Typography>
                     <Typography variant='h5'>
                        <CountUp
                           start={0}
                           end={confirmed.value}
                           duration={2}
                           separator=','></CountUp>
                     </Typography>
                     <Typography color='textSecondary'>
                        {new Date(lastUpdate).toDateString()}
                     </Typography>
                     <Typography variant='body2'>
                        Number of active cases of COVID-19
                     </Typography>
                  </CardContent>
               </Grid>
               <Grid
                  item
                  component={Card}
                  xs={12}
                  md={3}
                  className={cx(styles.card, styles.recovered)}>
                  <CardContent>
                     <Typography color='textSecondary' gutterBottom>
                        Recovered
                     </Typography>
                     <Typography variant='h5'>
                        <CountUp
                           start={0}
                           end={recovered.value}
                           duration={2}
                           separator=','></CountUp>
                     </Typography>
                     <Typography color='textSecondary'>
                        {new Date(lastUpdate).toDateString()}
                     </Typography>
                     <Typography variant='body2'>
                        Number of recovered cases of COVID-19
                     </Typography>
                  </CardContent>
               </Grid>
               <Grid
                  item
                  component={Card}
                  xs={12}
                  md={3}
                  className={cx(styles.card, styles.deaths)}>
                  <CardContent>
                     <Typography color='textSecondary' gutterBottom>
                        Deaths
                     </Typography>
                     <Typography variant='h5'>
                        <CountUp
                           start={0}
                           end={deaths.value}
                           duration={2}
                           separator=','></CountUp>
                     </Typography>
                     <Typography color='textSecondary'>
                        {new Date(lastUpdate).toDateString()}
                     </Typography>
                     <Typography variant='body2'>
                        Number of death cases of COVID-19
                     </Typography>
                  </CardContent>
               </Grid>
            </Grid>
         </div>
      );
   }
};

export default Cards;
