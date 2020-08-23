import { Link } from "react-router-dom";
import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Grid, Button, AppBar, Toolbar, Avatar} from "@material-ui/core";

const styles = theme =>({

  row:{
    flexGrow:1
  },
  grow:{
    flexGrow:1
  },
  container:{
    width:1170,
    margin:"auto"
  },
  buttonFontSize:{
    fontSize:"15px",
    color:"#a1a1a1",
    padding: " 10px 30px"
  },

  AppBar:{
    backgroundColor:"#fff",
    backgroundSize:"cover"
  },
  mainLogo:{
    color: "#a1a1a1",
    justifyContent:"left",
    '&:hover':{
      background:"transparent"
    }
  },

  avatar:{
    height:"100%",
    borderRadius:0,
  },
  root:{
    paddingBottom: "30px"
  },

  loginButton:{
    background:"#e91e63",
    color:"#fff",
    borderRadius:"25px",
    padding:"10px 30px",

    '&:hover':{
      background: 'blue',
      boxShadow: "0px 2px 10px #888888"
    }
  }

});

@withStyles(styles)

class Navbar extends React.Component{

  render(){

    const {classes} = this.props;

    return(
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.AppBar}>
          <Grid item sm={14} xs={14} className={classes.container}>
            <Toolbar>
              <Grid className={classes.grow}>
                <Button className={[classes.mainLogo]}>
                  <Avatar src="./coronaIcon.png" onClick={()=> alert('Que aseeeeeee xd aca iria un efecto piolita')} className={classes.avatar} />
                </Button>
              </Grid>
              <Button color="inherit" component={Link} to="/extra-info" className={classes.buttonFontSize}>Extra Info</Button>
              <Button color="inherit" component={Link} to="/calendar" className={classes.buttonFontSize}>Calendar</Button>
              <Button color="inherit" component={Link} to="/cards" className={classes.buttonFontSize}>Carts</Button>
              <Button color="inherit" component={Link} to="/charts" className={classes.buttonFontSize}>Charts</Button>
              <Button color="inherit" target="_blank" href="https://github.com/tdelga/Goronavirus" className={classes.buttonFontSize}>Github</Button>
              <Button color="inherit" component={Link} to="/" className={[classes.buttonFontSize,classes.loginButton]}>Home</Button>
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    )
  }
}

export default Navbar;
