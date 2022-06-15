import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AppContext from "../context/AppContext";
import '../styles/components/Header.css';

function Header() {
    const { state } = useContext(AppContext);
    const { cart } = state;
    return (
        <div className="Header">
            <h1 className="Header-title">
                <Link to='/'>
                    PlatziConf Merch
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket"/>
                    { cart.length > 0 && <div className="Handler-alert"><p>{cart.length}</p></div> }
                </Link>
            </div>
        </div>
    )
}
export default Header;