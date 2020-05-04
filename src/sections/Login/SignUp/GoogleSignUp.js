import React from 'react'
import GoogleLogin from 'react-google-login';
import { makeStyles } from '@material-ui/core/styles';

const googleStyle = makeStyles((theme) => ({
    googleLoginButton: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1),
        width: '95%',
        height: '72%',
    },
}))
export default function GoogleSignIn() {
    const responseGoogle = (response) => {
        console.log(response);
        var res = response.profileObj;
        console.log(res);
    }
    const classes = googleStyle()

    return (
        <GoogleLogin
            className={classes.googleLoginButton}
            clientId="794635542200-pdikiplqnvckbsbk3177h8i0miakggu4.apps.googleusercontent.com"
            buttonText="Google ile üye ol"
            onSuccess={responseGoogle}
            onFailure={responseGoogle} >
        </GoogleLogin>
    )
}
