import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ListItem = ({ children }) => {
    const { width } = useWindowDimensions();
    return (
        <motion.li
            className={styles.itemContainer}
            initial={{ x: width > 1000 ? -500 : 0, opacity: 0 }} //arreglo para que aparezcan en tamaño mobile
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            <div className={styles.tick}>
                <img src={require("./images/tick.png")} alt="tick" />
            </div>
            <p className={styles.itemText}>{children}</p>
        </motion.li>
    );
};

const Whomakes = ({ setShowCart }) => {
    const { width } = useWindowDimensions();
    return (
        <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
                <motion.h2 className={styles.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <span className={styles.titleAccent}>Quién prepara</span>&nbsp;tu experiencia?
                </motion.h2>
                <motion.p className={styles.subtitle} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iste in deleniti similique?
                </motion.p>
                <ul className={styles.listWrapper}>
                    <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo esse dolor nostrum nam?</ListItem>
                    <ListItem>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae.</ListItem>
                    <ListItem>Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</ListItem>
                    <ListItem>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur</ListItem>
                    <ListItem>Consequatur rerum amet fuga expedita sunt et</ListItem>
                </ul>
                <motion.button
                    className={styles.button}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}>
                    Descubre nuestros planes
                </motion.button>
            </div>
            {width > 1000 && (
                <motion.div
                    className={styles.pictureWrapper}
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <img src={require("./images/travel.jpg")} alt="" height={750} />
                </motion.div>
            )}
        </div>
    );
};

export default Whomakes;
