import React from 'react'
import FacebookLogin from 'react-facebook-login';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';

const facebookStyle = makeStyles((theme) => ({
    facebookLoginButton: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
        width: '100%',
        height: '72%',
        border: "none",
        borderRadius: "3px",
        backgroundColor: "#4C69BA",
        color: "#fff",
        fontFamily: "Roboto, sans-serif",
        fontSize: "14px",
        boxShadow: "1px 3px 2px -1px rgba(189, 189, 189, 1)",
        paddingTop: "2px"
    },
}))

export default function FacebookSignIn() {
    const classes = facebookStyle()

    const responseFacebook = (response) => {
        console.log(response);
      }

    return (
        <FacebookLogin
            appId="595508001053384"
            autoLoad={false}
            size="small"
            isMobile={true}
            textButton="Facebook ile üye ol"
            cssClass={classes.facebookLoginButton}
            fields="name,email,picture"
            icon={<FacebookIcon style={{float: "left",}}/>}
            callback={responseFacebook} />
    )
}
