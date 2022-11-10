import React from 'react'
import './style.css'
import './JavaS.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const Surprise = () => {
  return (
    <div className="static-slider1 py-4">
    <div className="container"> 
        <div className="row">
            <div className="col-md-7 align-self-center">
                <h1 className="title">Accede a increibles ofertas en <span className="text-success-gradiant typewrite" data-period="2000" data-type='[ "Hoteles", "Pasajes", "Estadias", "Alquiler de autos" ]'></span></h1>
                <a className="btn btn-success-gradiant btn-md btn-arrow mt-3 text-white border-0" href=""><span>Mas información aqui</span></a>
            </div>
            <div className="col-md-5 mt-4">
                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/sliders/static-slider/slider1/img1.png" alt="wrapkit" className="img-fluid"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Surprise