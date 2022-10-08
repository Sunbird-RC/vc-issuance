import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ReactKeycloakProvider} from '@react-keycloak/web'
import keycloak from './utils/keycloak'
import {AppRouter} from "./routes";

const eventLogger = (event, error) => {
    console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens) => {
    console.log('onKeycloakTokens', tokens)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Disabled keycloak login iframe check in development environment because of cross site cookies being stored by iframe.
    //Certain browsers will have strict policies enabled for cookies.
    // <ReactKeycloakProvider
    //     initOptions={{onLoad: 'login-required', checkLoginIframe: false}}
    //     authClient={keycloak}
    //     onEvent={eventLogger}
    //     onTokens={tokenLogger}
        
    // >
        <AppRouter/>
    /* </ReactKeycloakProvider> */
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
