import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css";
import { addItem } from "../../reducers/cart.actions";

const Card = ({ cartData, dispatch, id, img, country, lastPrice, newPrice, description }) => {
    const handleAddToCart = (id, name, picture, price) => {
        addItem(dispatch, id, name, picture, price);
    };

    return (
        <div className="offer-cardBox">
            <div className="offer-card-container">
                <div className="offer-front">
                    <div className="offer-card-cityimg-container">
                        <img src={img} alt="Foto del destino" className="offer-card-cityimg" />
                    </div>
                    <div className="offer-card-text">
                        <div className="offer-card-title">
                            <h3 className="offer-card-title-h3">{country}</h3>
                        </div>
                        <div className="offer-prices">
                            <p className="offer-new-price">{lastPrice} USD</p>
                            <p className="offer-last-price">{newPrice} USD</p>
                        </div>
                    </div>
                </div>
                <div className="offer-back">
                    <div className="offer-back-container">
                        <div className="offer-back-p-container">
                            <p className="offer-back-p">{description}</p>
                        </div>
                        <div className="offer-card-button-position">
                            <button className="offer-card-button" onClick={() => handleAddToCart(id, country, img, lastPrice)}>
                                Contratar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Offer = (cartData, dispatch) => {
    const [cardsData, setcardsData] = useState([]);

    useEffect(() => {
        const test = async () => {
            const res = await axios.get("http://localhost:3001/cards");
            setcardsData(res.data);
        };
        test();
    }, []);

    return (
        <div className="offer-container">
            {cardsData &&
                cardsData.map(item => (
                    <Card
                        key={item.id}
                        cartData={cartData.cartData}
                        dispatch={cartData.dispatch}
                        id={item.id}
                        img={item.picture}
                        country={item.name}
                        lastPrice={item.lastPrice}
                        newPrice={item.newPrice}
                        description={item.description}
                    />
                ))}
        </div>
    );
};
export default Offer;
