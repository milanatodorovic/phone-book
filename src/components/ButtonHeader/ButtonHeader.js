import React from "react";
import styles from "./ButtonHeader.module.css";

const ButtonHeader = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <img
            src={process.env.PUBLIC_URL + "/list.png"}
            alt="menu icon"
            className={styles.img}
          />
          <h2>Kontakti</h2>
        </div>

        <div className={styles.buttonHolder}>
          <button>Dodaj Novi</button>
        </div>
      </div>
    </>
  );
};
export default ButtonHeader;
