'use strict';

import React, {useEffect} from 'react';

function GooglePayV1(props) {
      const onGooglePayLoaded = () => {
            const paymentsClient = new window.google.payments.api.PaymentsClient({
                  environment: 'TEST', // or 'PRODUCTION'
            });

            const tokenizationSpecification = {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
            }

            const cardPaymentMethod = {
                  type: 'CARD',
                  parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                  },
                  tokenizationSpecification: tokenizationSpecification
            }

            const googlePayConfiguration = {
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [cardPaymentMethod]
            }



            const onPaymentDataChanged = (paymentData) => {
                  console.log('onPaymentDataChanged', paymentData);
            };

            paymentsClient.isReadyToPay(googlePayConfiguration)
                  .then(response => {
                        console.log('response.result', response.result);
                        const paymentDataRequest = {
                              ...googlePayConfiguration,
                              merchantInfo: {
                                    merchantName: 'Example Merchant',
                                    merchantId: 'BCR2DN4TUT277F34',
                              },
                              transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPrice: '1.00',
                                    currencyCode: 'USD',
                                    countryCode: 'US'
                              },
                        };
                        const button = paymentsClient.createButton({
                              onClick: () => {
                                    paymentsClient.loadPaymentData(paymentDataRequest).then((paymentData) => {
                                          console.log('loadPaymentData', paymentData);
                                    });
                              },
                              buttonColor: 'black',
                              buttonType: 'long',
                              buttonSizeMode: 'fill',
                        });

                        button.addEventListener('paymentmethodchange', (event) => {
                              const paymentMethod = event.paymentMethod;
                              console.log('paymentmethodchange', paymentMethod);
                        });

                        document.getElementById('google-pay-button').appendChild(button);
                  })
                  .catch(err => {
                        console.error('error', err);
                  })
      };

      useEffect(() => {
            const script = document.createElement('script');
            script.src = 'https://pay.google.com/gp/p/js/pay.js';
            script.addEventListener('load', () => {
                  onGooglePayLoaded();
            });
            document.body.appendChild(script);
      }, [])
      return (
            <div id="google-pay-button"></div>
      );
}

export default GooglePayV1;