import React, { useState } from "react";
import styles from "./AddNewForm.module.css";
import { v4 as uuid } from "uuid";

const AddNewForm = (props) => {
  const [visible, setVisible] = useState("block");
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const lastnameHandler = (e) => {
    setLastname(e.target.value);
    console.log(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      lastname: lastname,
      email: email,
      phone: phone,
      id: uuid(),
    };

    console.log(userData);
    props.onAdd(userData); //addUser

    setUsername("");
    setLastname("");
    setPhone("");
    setEmail("");
  };
  //form visibility
  const displaySetting = {
    display: visible,
  };
  const formChange = () => {
    setVisible((prev) => (prev = "none"));
  };

  return (
    <>
      <div className={styles.wrapperClock} style={displaySetting}>
        <div className={styles.div}>
          <div className={styles.secDiv}>
            <h1>Add new</h1>
            <img
              className={styles.img}
              src={process.env.PUBLIC_URL + "/close.png"}
              alt="iks"
              onClick={formChange}
            />
          </div>

          <form onSubmit={submitHandler}>
            <div className={styles.formInputs}>
              <input
                value={username}
                id="username"
                type="text"
                name="username"
                required
                placeholder="Name"
                onChange={usernameHandler}
              />
            </div>

            <div className={styles.formInputs}>
              <input
                value={lastname}
                id="lastname"
                required
                type="text"
                name="lastname"
                placeholder="Last name"
                onChange={lastnameHandler}
              />
            </div>

            <div className={styles.formInputs}>
              <input
                value={email}
                id="email"
                required
                type="email"
                name="email"
                placeholder="Email"
                onChange={emailHandler}
              />
            </div>

            <div className={styles.formInputs}>
              <input
                value={phone}
                id="phone"
                required
                type="text"
                name="phone"
                placeholder="Phone number"
                onChange={phoneHandler}
              />
            </div>

            <div className={styles.formInputs}>
              <button>Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewForm;
