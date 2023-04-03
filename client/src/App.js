import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

//imports
import vatesIco from './images/vatesIco.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles.js';

const App = () => {
  const classes = useStyles();

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src ={vatesIco} alt="vatesIco" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">Vates</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  );
}

export default App;
