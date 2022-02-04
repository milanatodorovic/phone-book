import React from "react";
import styles from "./ContactList.module.css";
import Contact from "./Contact.js";
const ContactList = (props) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr className={styles.header}>
            <td>Name</td>
            <td>Last Name</td>
            <td>E-mail</td>
            <td>Phone Number</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {props.users.map((user) => (
                <Contact
                  username={user.lastname}
                  setUpdateUsername={props.setUpdateUsername}
                  key={user.id}
                  id={user.id}
                  deleteUserData={props.deleteUserData}
                  /* startEdit={props.startEdit}*/
                />
              ))}
            </td>

            <td>
              {props.users.map((user) => (
                <Contact
                  lastname={user.lastname}
                  setUpdateLastname={props.setUpdateLastname}
                  key={user.id}
                  id={user.id}
                  deleteUserData={props.deleteUserData}
                  /* startEdit={props.startEdit}*/
                />
              ))}
            </td>

            <td>
              {props.users.map((user) => (
                <Contact
                  email={user.email}
                  setUpdateEmail={props.setUpdateEmail}
                  key={user.id}
                  id={user.id}
                  deleteUserData={props.deleteUserData}
                  /* startEdit={props.startEdit}*/
                />
              ))}
            </td>

            <td>
              {props.users.map((user) => (
                <Contact
                  phone={user.phone}
                  setUpdatePhone={props.setUpdatePhone}
                  key={user.id}
                  id={user.id}
                  deleteUserData={props.deleteUserData}
                  /* startEdit={props.startEdit}*/
                />
              ))}
            </td>

            <td>
              <Contact

              /* startEdit={props.startEdit}*/
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ContactList;

/*

lastname={user.lastname}
email={user.email}
number={user.number}


setUpdateUsername={props.setUpdateUsername}
setUpdateLastname={props.setUpdateLastname}
setUpdateEmail={props.setUpdateEmail}
setUpdateNumber={props.setUpdateNumber}*/

/*  <tr>
            {props.users.map((user) => (
              <Contact
                lastname={user.lastname}
                email={user.email}
                number={user.number}
                setUpdateUsername={props.setUpdateUsername}
                setUpdateLastname={props.setUpdateLastname}
                setUpdateEmail={props.setUpdateEmail}
                setUpdateNumber={props.setUpdateNumber}
                key={user.id}
                id={user.id}
                deleteUserData={props.deleteUserData}
                /* startEdit={props.startEdit}
                />
                ))}
              </tr> 
              
              
              
              
              
                <thead>
          <tr className={styles.header}>
            <td>Name</td>
            <td>Last Name</td>
            <td>E-mail</td>
            <td>Phone Number</td>
            <td>Action</td>
          </tr>
        </thead>
              
              */
