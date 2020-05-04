import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

function getValue(value) {
    
    console.log("Captcha value:", value);
    
    
}

export default function reCaptcha() {

    return (
        <ReCAPTCHA
            sitekey="6LcZ_uYUAAAAAIk1apsKri18ck6xqEnjot0-7I79"
            onChange={getValue}
            style={{marginTop: '20px'}}
        />
    )
}
