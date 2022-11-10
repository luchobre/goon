import types from "./cart.types";

const { ADD_TO_CART, CLEAR_CART, FETCH_CART, REMOVE_FROM_CART } = types;

export default function cartReducer(state, action) {
    switch (action.type) {
        case FETCH_CART:
            return action.payload;
        case REMOVE_FROM_CART:
            return state.filter(trip => trip.id !== action.payload);
        case ADD_TO_CART:
            return [...state, { ...action.payload }];

        default:
            return state;
    }
}
