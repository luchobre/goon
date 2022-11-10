import React from "react";
import styles from "./index.module.css";

function ListItem(props) {
  return <li className={styles.itemUpperFooter}><a href='#'>{props.value}</a></li>;
}  

function ColFooter(props) {
  const items = props.Listado.nombre;
  const listItems = items.map((item) =>
    <ListItem key={item.toString()} value={item} />  );
  return (
    <div>
      <h3 className={styles.titleUpperFooter}> {props.Titulo} </h3>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default ColFooter;
