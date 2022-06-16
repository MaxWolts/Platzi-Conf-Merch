import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

function Information() {
  const { state, addToBuyer } = useContext(AppContext)
  const form = useRef(null);
  const navigate = useNavigate();
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    };
    addToBuyer(buyer);
    navigate('/checkout/payment');
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={ form }>
            <input type="text" placeholder='Nombre completo' name='name' required/>
            <input type="email" placeholder='Correo Electronico' name='email' required/>
            <input type="text" placeholder='Dirección' name='address' required/>
            <input type="number" placeholder='Apto' name='apto' required/>
            <input type="text" placeholder='Ciudad' name='city' required/>
            <input type="text" placeholder='Pais' name='country' required/>
            <input type="text" placeholder='Estado' name='state' required/>
            <input type="number" placeholder='Código postal' name='cp' required/>
            <input type="number" placeholder='Telefono' name='phone' required/>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        { cart.map( item => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Information