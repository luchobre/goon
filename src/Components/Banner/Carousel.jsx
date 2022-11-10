import React, { useState , useEffect } from 'react'
import styles from "./index.module.css";

const Carousel = ({images, autoPlay, showButtons, classname}) => {
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (autoPlay || !showButtons) {
          const interval = setInterval(() => {
            selectNewImage(selectedIndex, images);
          }, 1000);
          return () => clearInterval(interval);
        }
      });

    const selectNewImage = (index, images, next) => {
        setLoaded(false);
        setTimeout(() => {
          const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
          const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
          setSelectedImage(images[nextIndex]);
          setSelectedIndex(nextIndex);
        }, 1000);
      };

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };
    
    const next = () => {
        selectNewImage(selectedIndex, images);
    };

  return (
    <div  className={classname}>
        <img
            src={require(`${selectedImage}`)}
            alt="Imagen Aerolinea"
            className={loaded ? styles.loadedImages : styles.loadedImages2}
            onLoad={() => setLoaded(true)}
        />
        <button className= {styles.CarouselButtonContainer}>
            {showButtons ? (
            <>
                <button className={styles.CarouselButton} onClick={previous}>{"  <  "}</button>
                <button className={styles.CarouselButton} onClick={next}>{"  >  "}</button>
            </>
            ) : (
            <></>
            )}
        </button>

    </div>
  )
}

export default Carousel