import React from "react";
import "./style.css";
import "./javaS";
import "bootstrap/dist/css/bootstrap.min.css";

const Ourpartner = () => {
    return (
        <div className="backgroundimg">
            <div className="static-slider3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 align-self-center text-center">
                            <h1 className="title">
                                ¿Ya conoces nuestra card con beneficios <b className="font-weight-bold">Visa Go On!?</b>, increibles descuentos en 
                                <span
                                    className="text-success-gradiant font-weight-bold typewrite"
                                    data-period="2000"
                                    data-type='[ " Vuelos", " Hoteleria", " Alquiler de autos", " Traslados" ]'></span>
                            </h1>
                            <a className="btn btn-success-gradiant btn-md text-white border-0 mt-3" href="https://www.visa.com.ar/" target={'_blank'} rel="noreferrer">
                                <span>ENTERATE!</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
      </div>);
};

export default Ourpartner;
