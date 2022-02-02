import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerOne}>
          <h1 className={styles.h1}>Introduction to the app</h1>
          <p className={styles.p}>
            This is a simple phone book web application. It's whole principe of
            work is to add a new contact by clicking on button 'Add New'. You
            need to fill out the form, click the button Add, and all of the data
            will show in the contact list. All of the contacts will be saved in
            local storage. On the page 'Contact' there's another form in case
            you want to contact me. Your massage is going to be sent straight to
            my email (thanks to email.js).
          </p>
        </div>

        <div className={styles.containerTwo}>
          <h1>Who made the app?</h1>

          <p className={styles.p}>
            App was made by Milana Todorovic, as a part of a project which was
            given on Frontend React.js course. I'm a 16 years old developer,
            who's trying to learn as much as it's possible.
          </p>
        </div>
        <div className={styles.containerOne}>
          <h1>How did I made this app?</h1>
          <p className={styles.p}>
            App was made using a Java Script Library called React.js.
            Application's graphics were all found on web, and were taken
            legally.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
