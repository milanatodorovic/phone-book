import React from "react";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const ErrorModal = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.stopEditing();
  };
  const Backdrop = (props) => {
    return (
      <div
        onClick={() => props.stopEditing()}
        className={styles.backdrop}
      ></div>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop stopEditing={props.stopEditing} />,
        document.getElementById("root-backdrop")
      )}
      <div className={styles.errorModal}>
        <div className={styles.modalExit}>
          <h3>Uredi korisnika</h3>
          <button onClick={() => props.stopEditing()}>X</button>
        </div>
        <form onSubmit={formSubmitHandler}>
          <div className={styles.input}>
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ime"
              value={props.username}
              onChange={(e) =>
                props.setUpdateUsername(e.target.value, props.id)
              }
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="userlasname"></label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Prezime"
              value={props.lastname}
              onChange={(e) =>
                props.setUpdateLastname(e.target.value, props.id)
              }
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={props.email}
              onChange={(e) => props.setUpdateEmail(e.target.value, props.id)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="phone"></label>
            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Broj Telefona"
              value={props.phone}
              onChange={(e) => props.setUpdatePhone(e.target.value, props.id)}
            />
          </div>
          <button className={styles.btn}>Sacuvaj kontakt</button>
        </form>
      </div>
    </>
  );
};

export default ErrorModal;
