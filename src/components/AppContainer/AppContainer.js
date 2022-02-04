import React, { useState, useEffect } from "react";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Navbar from "../Navbar/Navbar";
import styles from "./AppContainer.module.css";
import { /* BrowserRouter as Router,*/ Switch, Route } from "react-router-dom";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import ContactList from "../ContactList/ContactList";
import AddNewForm from "../AddNewForm/AddNewForm";
//import { v4 as uuidv4 } from "uuid";
const AppContainer = () => {
  const [userList, setUserList] = useState([]);
  const [enableAdd, setEnableAdd] = useState(false);

  //local storage
  useEffect(() => {
    const temp = localStorage.getItem("items");
    const fetchUserData = JSON.parse(temp);
    if (fetchUserData) {
      setUserList(fetchUserData);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(userList);
    localStorage.setItem("items", temp);
  }, [userList]);

  //add and delete user data
  const addUserData = (fullData) => {
    setUserList((prevSate) => {
      return [
        ...prevSate,
        {
          username: fullData.username,
          lastname: fullData.lastname,
          email: fullData.email,
          phone: fullData.phone,
          id: fullData.id,
        },
      ];
    });
  };

  const deleteUserData = (userId) => {
    setUserList([
      ...userList.filter((user) => {
        return user.id !== userId;
      }),
    ]);
  };

  //updated data
  const setUpdateUsername = (username, userId) => {
    setUserList(
      userList.map((user) => {
        if (user.id === userId) {
          user.username = username;
        }
        return user;
      })
    );
  };

  const setUpdateLastname = (lastname, userId) => {
    setUserList(
      userList.map((user) => {
        if (user.id === userId) {
          user.lastname = lastname;
        }
        return user;
      })
    );
  };

  const setUpdateEmail = (email, userId) => {
    setUserList(
      userList.map((user) => {
        if (user.id === userId) {
          user.email = email;
        }
        return user;
      })
    );
  };

  const setUpdatePhone = (phone, userId) => {
    setUserList(
      userList.map((user) => {
        if (user.id === userId) {
          user.phone = phone;
        }
        return user;
      })
    );
  };

  //add handler

  const startAddHandler = () => {
    setEnableAdd(true);
  };
  const stopAddHandler = () => {
    setEnableAdd(false);
  };
  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>
        <Switch>
          <Route exact path="/">
            <div className={styles.main}>
              <div className={styles.left}>
                <ButtonHeader startAdd={startAddHandler} />
                <ContactList
                  users={userList}
                  deleteUserDataProps={deleteUserData}
                  setUpdateUsername={setUpdateUsername}
                  setUpdateLastname={setUpdateLastname}
                  setUpdateEmail={setUpdateEmail}
                  setUpdatePhone={setUpdatePhone}
                />
              </div>

              <div className={styles.AddNewForm}>
                {enableAdd && (
                  <AddNewForm closeAdd={stopAddHandler} onAdd={addUserData} />
                )}
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
