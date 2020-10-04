import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import slackLogo from '../../assets/Slack_Mark.svg'
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';

const Login = () => {
    const [,dispatch] = useStateValue(); 

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            )
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={slackLogo} alt=""/>
                <h1>Sign in to Stofaya Programmer HQ</h1>
            <p>stofayaprogrammer.slack.com</p>
            <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    );
}

export default Login;