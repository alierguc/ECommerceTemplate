import React, { Component } from 'react'
import GoogleSignIn from './SignIn/GoogleSignIn';
import FacebookSignIn from './SignIn/FacebookSignIn'

import ReCaptcha from '../GoogleReCAPTCHA/reCaptcha'
import { Button, Divider, TextField, CssBaseline, CardContent, Card, makeStyles, withStyles, Typography, Container, Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';



const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#000',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#cc0e74',
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));


const CustomCheckbox = withStyles({
  root: {
    color: '#cc0e74',
    '&$checked': {
      color: '#cc0e74',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const loginStyle = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(5),
    width: '100%',
  },
  slogan: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  loginButton: {
    backgroundColor: '#cc0e74',
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#cc0e74',
    },
    height: '45px',
  },
  forgotPassword: {
    marginTop: theme.spacing(1.2),
    float: "right"
  },
  divider: {
    marginTop: theme.spacing(3.3)
  },
  signUpButton: {
    backgroundColor: '#cc0e74',
    '&:hover': {
      backgroundColor: '#cc0e74',
      color: '#fff'
    },
  }
}))



export default function LoginPage(props) {

  const handleChange = (event) => {
    setChecked(event.target.checked);

    console.log(event.target.checked) //State olarak True veya False dönüyor
  };


  const emailHandle = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  }

  const passwordHandle = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  }

  const [isLogged, setIsLogged] = React.useState(false);
  let history = useHistory()
  const loginFunction = (isLogged, setIsLogged) => {

    if (email == "123" && password == "123") {
      alert("Doğru") /* Giriş Doğru Olduğunda */
      setIsLogged(true);

      history.push("/SignMainPage"); /* Eğer kullanıcı adı veya şifre doğruysa yönlendir. */
    }
    else {
      setIsLogged(false);
      alert("yanlış kullanıcı adı veya şifre");
   
    }
  }




  const classes = loginStyle()
  const [checked, setChecked] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [alertHata, setAlertHata] = React.useState(false);
  return (


    <CardContent>
      <CssBaseline />
      <Typography variant="h6" align="center" color="textPrimary">
        ExampleCommerce'a <br /> Giriş Yapın
          </Typography>
      <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.slogan}>
        E-ticaret sistemi edinin, kiralayın, eleman bulun
          </Typography>
      <CssTextField
        margin="normal"
        fullWidth

        id="email"
        value={email}
        onChange={emailHandle}
        label="E-posta"
        name="email"
        autoComplete="off"
        autoFocus
      />
      <CssTextField
        margin="normal"
        fullWidth
        id="password"
        value={password}
        onChange={passwordHandle}
        label="Şifre"
        name="password"
        type="password"
      />
      <FormControlLabel
        control={<CustomCheckbox checked={checked} onChange={handleChange} value="remember" />}
        label="Beni hatırla"
      />
      <Button onClick={props.sifremiUnuttumClick} style={{ float: 'right' }}>Şifremi Unuttum</Button>
      <ReCaptcha />

      <Button
        type="submit"
        fullWidth
        onClick={() => loginFunction(isLogged, setIsLogged)}
        variant="contained"
        color="primary"
        className={classes.loginButton}
      >GİRİŞ YAP
      </Button>
      
      <Grid container>
        <Grid item xs>
          <FacebookSignIn />
        </Grid>
        <Grid item xs>
          <GoogleSignIn />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs>
          <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.slogan}>
            veya
              </Typography>
        </Grid>
        <Grid item xs>
          <Divider className={classes.divider} />
        </Grid>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.signUpButton}
        onClick={props.signIn}
      >ÜYE OL</Button>
    </CardContent>
  )

}

