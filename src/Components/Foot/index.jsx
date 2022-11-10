import React from "react";
import ColFooter from "./ColFooter";
import FooterLastRow from "./FooterLastRow";
import HrLine from "./HrLine";
import useScreenSize from "./useScreenSize";
import styles from "./index.module.css";

const ServiciosAdicionales = { nombre: ["Serv 1", "Serv 2", "Serv 3", "Serv 4", "Serv 5"], enlace: ["#", "#", "#", "#", "#"] };
const AcercaDe = { nombre: ["About 1", "About 2", "About 3", "About 4", "About 5"], enlace: ["#", "#", "#", "#", "#"] };
const InfoUtil = { nombre: ["Info 1", "Info 2", "Info 3", "Info 4", "Info 5"], enlace: ["#", "#", "#", "#", "#"] };
const EnlacesRapidos = { nombre: ["Links 1", "Links 2", "Links 3", "Links 4", "Links 5"], enlace: ["#", "#", "#", "#", "#"] };
let screenW = { width: "", height: "" };

const Foot = () => {
    screenW = useScreenSize();
    return (
        <div>
            <HrLine color="#276098" />
            <div>
                <div className={styles.upperFooter}>
                    <ColFooter Titulo={"Servicios adicionales"} Listado={ServiciosAdicionales} />
                    <ColFooter Titulo={"Acerca de nosotros"} Listado={AcercaDe} />
                    <ColFooter Titulo={"Informacion util"} Listado={InfoUtil} />
                    <ColFooter Titulo={"Enlaces rapidos"} Listado={EnlacesRapidos} />
                </div>
                <HrLine color="#276098" />
                <div className={styles.footerlastrow}>
                    <FooterLastRow />
                </div>
            </div>
            <HrLine color="#276098" />
        </div>
    );
};

export default Foot;
