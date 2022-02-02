import React from "react";
import styles from "./Contact.module.css";

const Contact = (/*props*/) => {
  /*const { id } = props.contact;*/
  return (
    <>
      <td className={styles.td}>name</td>
      <td className={styles.td}>lastName</td>
      <td className={styles.td}>email</td>
      <td className={styles.td}>phoneNumber</td>
      <td>
        <div className={styles.btnDiv}>
          <img
            src={process.env.PUBLIC_URL + "/edit.png"}
            alt=""
            /* onClick={() => props.deleteTodoProps(id)}*/
          />
          <img src={process.env.PUBLIC_URL + "/trash.png"} alt="" />
        </div>
      </td>
    </>
  );
};

export default Contact;
