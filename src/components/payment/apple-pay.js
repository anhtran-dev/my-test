import React, {useEffect, useState} from 'react';
import {useStripe, useElements, PaymentRequestButtonElement} from '@stripe/react-stripe-js'
import StatusMessages, {useMessages} from './StatusMessages';

function ApplePay(props) {
      const stripe = useStripe()
      const element = useElements()
      const [paymentRequest, setPaymentRequest] = useState(null)
      const [messages, addMessage] = useMessages();

      useEffect(() => {
            if (!stripe || !element) return;
            const pr = stripe.paymentRequest({
                  currency: 'usd',
                  country: 'US',
                  requestPayerEmail: true,
                  requestPayerName: true,
                  total: {
                        label: 'Demo payment',
                        amount: 1999
                  }
            })
            pr.canMakePayment().then((result) => {
                  console.log('result', result);
                  if (result) {
                        setPaymentRequest(pr)
                  }
            }).catch((err) => {
                  console.log('err', err);
            })

            pr.on('paymentmethod', async (e) => {
                  const {error: backendError, clientSecret} = await fetch(
                        '/create-payment-intent',
                        {
                              method: 'POST',
                              headers: {
                                    'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                    paymentMethodType: 'card',
                                    currency: 'usd',
                              }),
                        }
                  ).then((r) => r.json());

                  if (backendError) {
                        addMessage(backendError.message);
                        return;
                  }

                  addMessage('Client secret returned');

                  const {
                        error: stripeError,
                        paymentIntent,
                  } = await stripe.confirmCardPayment(clientSecret, {
                        payment_method: e.paymentMethod.id,
                  }, {handleActions: false});

                  if (stripeError) {
                        // Show error to your customer (e.g., insufficient funds)
                        addMessage(stripeError.message);
                        return;
                  }

                  // Show a success message to your customer
                  // There's a risk of the customer closing the window before callback
                  // execution. Set up a webhook or plugin to listen for the
                  // payment_intent.succeeded event that handles any business critical
                  // post-payment actions.
                  console.log('paymentIntent::', paymentIntent);
                  addMessage(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
            });


      }, [stripe, element, addMessage])

      return (
            <div>
                  <h1>Apple pay</h1>

                  {paymentRequest && <PaymentRequestButtonElement options={{paymentRequest}}/>}
            </div>
      );
}

export default ApplePay;