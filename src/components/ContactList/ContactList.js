import React from "react";
import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
const ContactList = () => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.header}>
            <td>Ime</td>
            <td>Prezime</td>
            <td>E-mail</td>
            <td>Broj telefona</td>
            <td>Akcija</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Contact />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
