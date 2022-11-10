import "./App.css";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { Banner, Cart, Foot, Head, Instagram, Offer, Ourpartner, Surprise, Tellafrind, Warning, Whomakes, Whychoose } from "./Components";
import cartReducer from "./reducers/cart.reducer";
import { Navbar } from "react-bootstrap";

function App() {
    ///////////////////////////////AXIOS////////////////////////////////////
    const [showCart, setShowCart] = useState(false);
    const [cartData, dispatch] = useReducer(cartReducer, []);

    return (
        <div className="App">
            <AnimatePresence>{showCart && <Cart setShowCart={setShowCart} cartData={cartData} dispatch={dispatch} />}</AnimatePresence>
            <Warning />
            <Head setShowCart={setShowCart} />
            <Banner />
            <Offer cartData={cartData} dispatch={dispatch} />
            <Whychoose />
            <Whomakes />
            <Ourpartner />
            <Surprise />
            <Instagram />
            <Tellafrind />
            <Foot />
        </div>
    );
}

export default App;
