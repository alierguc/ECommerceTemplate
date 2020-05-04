import React from 'react'
import GoogleSignUp from './SignUp/GoogleSignUp';
import FacebookSignUp from './SignUp/FacebookSignUp'
import {Link} from 'react-router-dom'
import ReCaptcha from '../GoogleReCAPTCHA/reCaptcha'
import {Button,Divider,TextField,CssBaseline,CardContent,Card,makeStyles,withStyles,Typography,Container,Grid,FormControlLabel,Checkbox} from '@material-ui/core';

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

const CustomCheckbox = withStyles({
    root: {
      color: '#cc0e74',
      '&$checked': {
        color: '#cc0e74',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);


const signUpStyle = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(5),
    width: '100%',
  },
  slogan: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  signUpButton: {
    backgroundColor: '#cc0e74',
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#cc0e74',
    },
    height: '45px',
  },
  divider: {
    marginTop: theme.spacing(3.3)
  },
  signInButton: {
    backgroundColor: '#cc0e74',
    '&:hover': {
      backgroundColor: '#cc0e74',
      color: '#fff'
    },
  }
}))

export default function SignUpPage(props) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(event.target.checked) //State olarak True veya False dönüyor
  };

  const classes = signUpStyle()
  return (
    <Container component="main" maxWidth="xl">
      
        <CardContent >
          <CssBaseline />
          <Typography variant="h6" align="center" color="textPrimary">
            ExampleCommerce'a <br /> Üye Olun
          </Typography>
          <Typography variant="subtitle2"  color="textSecondary" align="center" className={classes.slogan}>
            E-ticaret sistemi edinin, kiralayın, eleman bulun!
          </Typography>
          <CssTextField
            margin="normal"
            fullWidth
            id="firstName"
            label="Ad"
            name="firstName"
            autoComplete="off"
            autoFocus
          />
          <CssTextField
            margin="normal"
            fullWidth
            id="lastName"
            label="Soyad"
            name="lastName"
            autoComplete="off"
          />
          <CssTextField
            margin="normal"
            fullWidth
            id="email"
            label="E-posta"
            name="email"
            autoComplete="off"
          />
          <CssTextField
            margin="normal"
            fullWidth
            id="password"
            label="Şifre"
            name="password"
            type="password"
          />
          <CssTextField
            margin="normal"
            fullWidth
            id="passwordAgain"
            label="Şifre (Tekrar)"
            name="passwordAgain"
            type="password"
          />
          <ReCaptcha/>
         { <FormControlLabel
            control={<CustomCheckbox checked={checked} onChange={handleChange} value="remember" />}
            label="Beni hatırla"
          /> }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            className={classes.signUpButton}
          >ÜYE OL</Button>
          <Grid container>
            <Grid item xs>
              <FacebookSignUp/>
            </Grid>
            <Grid item xs>
              <GoogleSignUp/>
            </Grid>
          </Grid>
          
      
        </CardContent>

    </Container>
  )
}
