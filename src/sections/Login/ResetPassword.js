import React from 'react';
import {Button, TextField, CssBaseline, CardContent, Card, makeStyles,withStyles,Typography, Container} from '@material-ui/core';
import ReCaptcha from '../GoogleReCAPTCHA/reCaptcha'


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


const resetPasswordStyle = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(5),
    width: '100%',
  },
  sendButton: {
    marginTop: theme.spacing(1),
    backgroundColor: '#cc0e74',
    '&:hover': {
      backgroundColor: '#cc0e74',
      color: '#fff'
    },
  },
  infoText: {
      marginTop: theme.spacing(2.5)
  }
}))

export default function ResetPassword() {
  const classes = resetPasswordStyle()

  return (
    <Container component="main" maxWidth="xs">
     
        <CardContent >
          <CssBaseline />
          <Typography variant="h6" align="center" color="textPrimary">
            ExampleCommerce <br />
          </Typography>
          <Typography variant="subtitle2"  color="textSecondary" align="center" className={classes.infoText}>
            Şifrenizi yenilemek için lütfen e-posta adresinizi yazın
          </Typography>
          <CssTextField
            margin="normal"
            fullWidth
            id="email"
            label="E-posta"
            name="email"
            autoComplete="off"
            autoFocus
          />
          <ReCaptcha/>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.sendButton}
            href="#"
          >Gönder</Button>
          
        </CardContent>
     
    </Container>
  )
}

