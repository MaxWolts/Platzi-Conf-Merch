import {useState} from "react";
import initialState from "../initialState";

function useInitialState () {
    const [state, setState] = useState(initialState);
    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }
    const removeFromCart = payload => {
        const itemPosition = state.cart.findIndex((items => items.id === payload.id))
        state.cart.splice(itemPosition ,1)
        setState({
            ...state,
            cart: state.cart
        })
    }
    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }
    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }
    const cleanCartAndOrder = () => {
        setState(initialState)
    }
    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        cleanCartAndOrder,
        state
    }
}

export default useInitialState;