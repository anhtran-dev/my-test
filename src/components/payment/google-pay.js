import React from 'react';
import GooglePayButton from '@google-pay/button-react'


function GooglePay(props) {
      return (
            <div>
                  <h1>LOL PAYMENT</h1>

                  <div>
                        <GooglePayButton
                              environment="TEST"
                              paymentRequest={{
                                    apiVersion: 2,
                                    apiVersionMinor: 0,
                                    allowedPaymentMethods: [
                                          {
                                                type: 'CARD',
                                                tokenizationSpecification: {
                                                      type: 'PAYMENT_GATEWAY',
                                                      parameters: {
                                                            gateway: 'example',
                                                            gatewayMerchantId: 'exampleGatewayMerchantId',
                                                      },
                                                },
                                                parameters: {
                                                      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                      allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                },

                                          },
                                    ],
                                    merchantInfo: {
                                          merchantId: 'BCR2DN4TUT277F34',
                                          merchantName: 'Mei Shop',
                                    },
                                    transactionInfo: {
                                          totalPriceStatus: 'FINAL',
                                          totalPriceLabel: 'Total',
                                          totalPrice: '1.00',
                                          currencyCode: 'USD',
                                          countryCode: 'US',
                                    },
                                    callbackIntents: ["PAYMENT_AUTHORIZATION"],
                              }}
                              onLoadPaymentData={paymentRequest => {
                                    console.log('load payment data', paymentRequest);
                              }}
                              onPaymentAuthorized={paymentData => {
                                    console.log('payment-authorized', paymentData);
                              }}
                              existingPaymentMethodRequired={false}
                              buttonColor={"black"}
                              buttonType='Buy'
                        />
                  </div>
            </div>
      );
}

export default GooglePay;