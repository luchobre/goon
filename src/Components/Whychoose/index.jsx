import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import axios from "axios";
import { BeatLoader } from "react-spinners";

const Whychoose = () => {
    const [data, setData] = useState([]);
    const getCardsData = async () => {
        const res = await axios.get("http://localhost:3001/cardsData");
        setData(res.data);
    };

    useEffect(() => {
        getCardsData();
    }, []);

    return (
        <div className={styles.wrapper}>
            <motion.div className={styles.titleWrapper} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2 className={styles.title}>
                    Por qué elegir <span className={styles.titleAccent}>viajar con nosotros</span>
                </h2>
            </motion.div>
            <div className={styles.cardsWrapper}>
                {data === [] ? (
                    <>
                        <div>
                            <BeatLoader color="#276098" />
                        </div>
                    </>
                ) : (
                    data.map((card, index) => {
                        return (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 2 }}>
                                <div className={styles.icon}>
                                    <img src={require(`${card.icon}`)} alt="" />
                                </div>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.text}>{card.text}</p>
                            </motion.div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Whychoose;
