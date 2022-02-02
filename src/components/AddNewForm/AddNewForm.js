import React, { useState } from "react";
import styles from "./AddNewForm.module.css";

const AddNewForm = (props) => {
  const [visible, setVisible] = useState("block");
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  /*
  const onChange = (e) => {
    setUserName(e.target.value);
    setLastName(e.target.value);
    setEmail(e.target.value);
    setPhone(e.target.value);
  };*/
  /*
  const handleSubmit = (e) => {
    e.preventDefault();


    if (userName.trim()) {
      props.addContactProps(userName);
      setUserName("");
    } else {
      alert("Please write a name");
    }
  };*/

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

          <form>
            <div className={styles.formInputs}>
              <input
                value={userName}
                type="text"
                name="userName"
                placeholder="Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className={styles.formInputs}>
              <input
                value={lastName}
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className={styles.formInputs}>
              <input
                value={email}
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.formInputs}>
              <input
                value={phone}
                type="text"
                name="phone"
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className={styles.formInputs}>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewForm;
