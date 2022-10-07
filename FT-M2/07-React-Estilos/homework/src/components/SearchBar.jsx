import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.inputBar}
        placeholder="Busca tu ciudad..."
      />
      <button
        onClick={() => props.onSearch("Buscando...")}
        className={styles.botonBuscar}
      >
        Buscar
      </button>
    </div>
  );
}
