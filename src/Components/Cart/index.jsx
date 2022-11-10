import React, { useEffect, useReducer, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { fetchCart, removeItem } from "../../reducers/cart.actions";

const Cart = ({ setShowCart, cartData, dispatch }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCart(dispatch);
        setLoading(false);
    }, []);

    const totalPrice = cartData.reduce((total, trip) => {
        return total + trip.price * trip.amount;
    }, 0);

    const handleClose = () => {
        setShowCart(false);
        document.body.style.overflow = "unset";
    };

    const handleRemoveItem = id => {
        removeItem(dispatch, id);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.modalWrapper}>
            <div className={styles.cartWrapper}>
                <div className={styles.titleRow}>
                    <h3 className={styles.title}>Tu carrito</h3>
                    <IoCloseSharp className={styles.close} onClick={() => handleClose()} />
                </div>
                <div className={styles.rowWrapper}>
                    {loading && <BeatLoader className={styles.loader} color="#276098" />}
                    {!loading &&
                        cartData.map(trip => {
                            return (
                                <div className={styles.row} key={trip.id}>
                                    <div className={styles.imageWrapper}>
                                        <img src={trip.picture} alt="Product" />
                                    </div>
                                    <div className={styles.details}>
                                        <div className={styles.name}>{trip.name}</div>
                                        <div className={styles.remove} onClick={() => handleRemoveItem(trip.id)}>
                                            Remover del carrito
                                        </div>
                                    </div>
                                    <div className={styles.rigthColumn}>
                                        <div className={styles.amount}>{`Cantidad: ${trip.amount}`}</div>
                                        <div className={styles.total}>{`$${trip.price * trip.amount} USD`}</div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                {!loading && <div className={styles.totalRow}>{`Total: $${totalPrice} USD`}</div>}
                <button className={styles.checkoutButton}>Checkout</button>
            </div>
        </motion.div>
    );
};

export default Cart;
