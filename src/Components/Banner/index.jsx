import styles from "./index.module.css";
import React from 'react'
import Carousel from "./Carousel";
import { motion } from "framer-motion";

const index = () => {

  const images = ['./images/avion-AA1.png', './images/avion-GOL1.png', './images/avion-AV1.png', './images/avion-LAT1.png'];    //Arreglo de imagenes para carrusel

  return (
    <div className={styles.containerBanner}>
      <div>
        <></>
        <h2 className={styles.textBanner}>OFERTAS IMPERDIBLES!</h2>
        <div><br/></div>
        <h3 className={styles.textBanner}>Destino</h3>
        <h3 className={styles.textBanner}>Precio</h3>
        <div><br/></div>
        <motion.button
          className={styles.bannerButton}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}>
          LO QUIERO!
        </motion.button>
      </div>
      <Carousel images={images} autoPlay={true} showButtons={false} classname={styles.bannerImgInt}/>
    </div>
  )
}

export default index