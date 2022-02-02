import React from "react";
import styles from "./Kontakt.module.css";
import emailjs from "emailjs-com";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ol9rrwi",
        "template_0ohvfrn",
        e.target,
        "user_ZPO6JiuxPP08pngtJJG9l"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.div}>
          <h1>Contact us Now!</h1>

          <form onSubmit={sendEmail}>
            <div className={styles.formInputs}>
              <label>Name</label>
              <input type="text" name="name" />
            </div>

            <div className={styles.formInputs}>
              <label>E-mail</label>
              <input type="email" name="user_email" />
            </div>

            <div className={styles.formInputs}>
              <label>Massage</label>
              <textarea name="message" rows="4" className={styles.textarea} />
              <button type="submit" value="send">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
/*
               <input type="submit" value="Send" />
import styles from "./Kontakt.module.css";
const Contact = () => {
  return (
    <div className={styles.div}>
      <h1>Contact us now!</h1>
      <form>
        <label>Name</label>
        <input type="text" name="name" />

        <label>E-mail</label>
        <input type="email" name="user_email" />

        <label>Massage</label>
        <textarea name="message" rows="4" />
        <input type="submit" value="Send">
          Type your massage here:
        </input>
      </form>
    </div>
  );
};

export default Contact;
*/
