import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddresss from '../hooks/useGoogleAddress';
import Meta from '../components/Meta';
import '../styles/components/Success.css';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddresss(buyer[0]);
  const { name } = buyer
  return (
    <>
    <Meta title="Pedido Realizado"/>
    <div className="Success">
      <div className="Success-conent">
        <h2>{`${name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección</span>
        <div className="Success-map">
          <Map data={location}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Success