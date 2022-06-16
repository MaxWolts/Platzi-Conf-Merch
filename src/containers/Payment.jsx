import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';
import Meta from '../components/Meta';

function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  const navigate = useNavigate()
  const handlePaymentSuccess = (data) => {
    if(data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      navigate('/checkout/success')
    }
  }

  return (
    <>
    <Meta title="Pedido"/>
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider
            options={{
              'client-id': process.env.REACT_APP_PAYPAL_ID,
              currency: 'USD',
            }}
          >
            <PayPalButtons
              style={{ layout: 'vertical' }}
              disabled={false}
              createOrder={(data, actions) =>
                actions.order
                  .create({
                    purchase_units: [
                      {
                        amount: {
                          value: Number.parseFloat(handleSumTotal()).toFixed(2),
                        },
                      },
                    ],
                  })
                  .then((orderId) => orderId)
              }
              onApprove={(data, actions) => {
                actions.order
                .capture()
                .then((data) => handlePaymentSuccess(data))
                .catch((error) => console.log(error));
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
    </>
  );
}

export default Payment;
