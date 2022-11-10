import types from "./cart.types";
import axios from "axios";

const { ADD_TO_CART, CLEAR_CART, FETCH_CART, REMOVE_FROM_CART } = types;

export const fetchCart = async dispatch => {
    const res = await axios.get("http://localhost:3001/cartData");
    dispatch({ type: FETCH_CART, payload: res.data });
};

export const removeItem = async (dispatch, id) => {
    try {
        await axios.delete(`http://localhost:3001/cartData/${id}`);
        dispatch({ type: REMOVE_FROM_CART, payload: id });
    } catch (err) {
        console.log(err);
    }
};

export const addItem = async (dispatch, id, name, picture, price) => {
    const oldCart = await axios.get("http://localhost:3001/cartData");
    if (!oldCart.data.find(item => item.id === id)) {
        try {
            await axios.post(`http://localhost:3001/cartData`, {
                id,
                name,
                picture,
                price,
                amount: 1,
            });
            dispatch({ type: ADD_TO_CART, payload: { id, name, picture, price, amount: 1 } });
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            const oldItem = await axios.get(`http://localhost:3001/cartData/${id}`);
            await axios.patch(`http://localhost:3001/cartData/${id}`, {
                amount: oldItem.data.amount + 1,
            });
            //dispatch({ type: ADD_TO_CART, payload: { id, name, picture, price, amount: 1 } });
        } catch (err) {
            console.log(err);
        }
    }
};
