import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <LoginContainer>
            <LoginInnerContainer>
           <img 
           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAMAAAAvHNATAAAACVBMVEUaKDOe5db4PVB3pgX4AAAAUUlEQVR4nO3OgQkAAAQAMPx/tCdIartgEQAAAAAAAPyUA8TExMTExMTExMTExMTExMS2YsCZGiAmJiYmJiYmJiYmJiYmJia2FQMAAAAAAADea3IzFlFxieC0AAAAAElFTkSuQmCC" alt="" /> 
           <h1>Sign in to Coodash Chat</h1>
           <p>coodash.chat.com</p>

           <Button type="submit" onClick={signIn}>
               Sign in with Google
           </Button>
           </LoginInnerContainer>
        </LoginContainer>
    );
}

export default Login;

const LoginContainer = styled.div`
    background-color: #ffffff;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: #1A2833;
    color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #fc505f !important;
        color: white;
    }
`;