import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={`${styles.contCard}`}>
      <div className={`${styles.contTop}`}>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt=""
          className={`${styles.nube}`}
        />
        <h3 className={`${styles.titulo}`}>{props.name}</h3>
        <button onClick={props.onClose} className={`${styles.boton}`}>
          x
        </button>
      </div>
      <div className={`${styles.cardWhite}`}>
        <div className={`${styles.contMinMax}`}>
          <div className={`${styles.temp}`}>{props.min}°</div>
          <div className={`${styles.minMax}`}>Min.</div>
        </div>
        <div className={`${styles.contMinMax}`}>
          <div className={`${styles.temp}`}>{props.max}°</div>
          <div className={`${styles.minMax}`}>Max.</div>
        </div>
      </div>
    </div>
  );
}
