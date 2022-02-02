import React, { useState, useEffect } from "react";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Navbar from "../Navbar/Navbar";
import styles from "./AppContainer.module.css";
import { /* BrowserRouter as Router,*/ Switch, Route } from "react-router-dom";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import ContactList from "../ContactList/ContactList";
import AddNewForm from "../AddNewForm/AddNewForm";
import { v4 as uuidv4 } from "uuid";
const AppContainer = () => {
  /*
  const [contacts, setContacts] = useState(getContacts());
  /*
  const userData = {
    userName: userName,
    lastName: lastName,
    phone: phone,
    email: email,
  };
  const addContact = (userData) => {
    const newContactData = {
      id: uuidv4(),
      userName: userData.userName,
      lastName: userData.lastName,
      phone: userData.phone,
      email: userData.email,
    };

    setContacts([...contacts, newContactData]);
  };

  function getContacts() {
    //uzimanje podataka

    const temp = localStorage.getContactData("contacts");
    const savedContacts = JSON.parse(temp);
    return savedContacts || [];
  }
  useEffect(() => {
    //cuvanje u storage

    const temp = JSON.stringify(contacts);
    localStorage.setContactData("contacts", temp);
  }, [contacts]);*/
  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>
        <Switch>
          <Route exact path="/">
            <div className={styles.main}>
              <div className={styles.left}>
                <ButtonHeader />
                <ContactList />
              </div>

              <div className={styles.AddNewForm}>
                <AddNewForm
                /* addContactProps={addContact}*/
                /* userDataProps={userData}*/
                />
              </div>
            </div>
          </Route>
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </>
  );
};

export default AppContainer;
