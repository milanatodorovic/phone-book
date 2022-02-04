import React from "react";
import styles from "./ButtonHeader.module.css";

const ButtonHeader = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <img
            src={process.env.PUBLIC_URL + "/list.png"}
            alt="menu icon"
            className={styles.img}
          />
          <h2>Contacts</h2>
        </div>

        <div className={styles.buttonHolder}>
          <button onClick={() => props.startAdd()}>Add New</button>
        </div>
      </div>
    </>
  );
};
export default ButtonHeader;
