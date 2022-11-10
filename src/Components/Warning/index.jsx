import React, { useState } from "react";
import styles from "./index.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Warning = () => {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <>
            <AnimatePresence>
                {showBanner && (
                    <motion.div className={styles.wrapper} initial={{ y: -30 }} animate={{ y: 0 }} exit={{ y: -30 }}>
                        <p className={styles.text}>2x1 y traslados gratis en vuelos a Ucrania!*</p>
                        <button className={styles.closeContainer} onClick={() => setShowBanner(false)}>
                            <IoCloseSharp className={styles.close} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Warning;
