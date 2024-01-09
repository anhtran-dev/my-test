import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

document.addEventListener('DOMContentLoaded', async () => {
      // const {publishableKey} = await fetch('/config').then((r) => r.json())
      const publishableKey =  process.env.REACT_APP_STRIPE_PUBLISH_KEY
      console.log('publishableKey', publishableKey);
      const stripePromise = loadStripe(publishableKey)

      ReactDOM.render(
            <React.StrictMode>
                  <Elements stripe={stripePromise} >
                        <App />
                  </Elements>
            </React.StrictMode>,
            document.getElementById('root')
      );
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
