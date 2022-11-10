import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import './styles.css'
import tilcara from '../Instagram/images/tilcara.jpg'
import arraialdocabo from '../Instagram/images/arraial_do_cabo.jpg'
import cataratas_de_iguazu from '../Instagram/images/cataratas_de_iguazu.jpg'
import chile from '../Instagram/images/chile.jpg'
import jujuy from '../Instagram/images/jujuy.jpg'
import miami from '../Instagram/images/miami.jpg'
import paris from '../Instagram/images/paris.jpg'
import sagrada_familia from '../Instagram/images/sagrada_familia.jpg'
import san_juan from '../Instagram/images/san_juan.jpg'
import bariloche from '../Instagram/images/bariloche.jpg'


export default function App() {
    return (
        <div className="containerInstagram">
            <Carousel>               
                <Carousel.Item interval={2500}>
                    <img
                        src={tilcara}
                        alt="tilcara"
                        className="instagramPicture"
                    />
                    <Carousel.Caption>
                        <div className="containerText">
                            <h3 className="font-weight-bold h2 text-light">Tilcara, Jujuy</h3>
                            <p className="h5 text-dark">Aprovecha las promociones!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        src={san_juan}
                        alt="valle de la luna"
                        className="instagramPicture"
                    />
                    <Carousel.Caption>
                        <div className="containerText">
                            <h3 className="font-weight-bold h2 text-light">Valle de la Luna, San Juan</h3>
                            <p className="h5 text-dark">Aprovecha nuestras promociones!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        src={bariloche}
                        alt="Bariloche"
                        className="instagramPicture"
                    />
                    <Carousel.Caption>
                        <div className="containerText">
                            <h3 className="font-weight-bold h2 text-light">Bariloche</h3>
                            <p className="h5 text-dark">Aprovecha nuestras promociones!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item interval={2500}>
                    <img
                        src={cataratas_de_iguazu}
                        alt="Cataratas de Iguazú"
                        className="instagramPicture"
                    />
                    <Carousel.Caption>
                        <div className="containerText">
                            <h3 className="font-weight-bold h2 text-light">Cataratas del Iguazu, Misiones</h3>
                            <p className="h5 text-dark">Aprovecha nuestras promociones!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item interval={2500}>
                    <img
                        src={chile}
                        alt="Chile"
                        className="instagramPicture"
                    />
                    <Carousel.Caption>
                        <div className="containerText">
                            <h3 className="font-weight-bold h2 text-light">Torres del paine, Chile</h3>
                            <p className="h5 text-dark">Aprovecha nuestras promociones!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item interval={2500}>
                    <img
                        src={jujuy}
                        alt="Jujuy"
                        className="instagramPicture"
                    />
                    <Carousel.Caption>
                        <div className="containerText">
                            <h3 className="font-weight-bold h2 text-light">Purmamarca, Jujuy</h3>
                            <p className="h5 text-dark">Aprovecha nuestras promociones!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item interval={2500}>
                    <img
                        src={miami}
                        alt="Miami"
                        className="instagramPicture"
                    />
                    <Carousel.Caption>
                        <div className="containerText">
                            <h3 className="font-weight-bold h2 text-light">Miami, Estados Unidos</h3>
                            <p className="h5 text-dark">Aprovecha nuestras promociones!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item interval={2500}>
                    <img
                        src={paris}
                        alt="Paris"
                        className="instagramPicture"
                    />
                    <Carousel.Caption>
                        <div className="containerText">
                            <h3 className="font-weight-bold h2 text-light">Paris, Francia</h3>
                            <p className="h5 text-dark">Aprovecha nuestras promociones!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item interval={2500}>
                    <img
                        src={sagrada_familia}
                        alt="España"
                        className="instagramPicture"
                    />
                    <Carousel.Caption>
                        <div className="containerText">
                            <h3 className="font-weight-bold h2 text-light">Barcelona, España</h3>
                            <p className="h5 text-dark">Aprovecha nuestras promociones!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item interval={2500}>
                    <img
                        src={arraialdocabo}
                        alt="Arraial do cabo"
                        className="instagramPicture"
                    />
                    <Carousel.Caption>
                        <div className="containerText">
                            <h3 className="font-weight-bold h2 text-light">Arraial do cabo, Brasil</h3>
                            <p className="h5 text-dark">Aprovecha nuestras promociones!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
