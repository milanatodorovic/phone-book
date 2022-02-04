import { React /*, useState*/ } from "react";
import styles from "./Contact.module.css";
//import ErrorModal from "../ErrorModal/ErrorModal";
const Contact = (props) => {
  /* const [editing, setEditing] = useState(false);

  const startEditing = () => {
    setEditing(true);
  };

  const stopEditing = () => {
    setEditing(false);
  };*/
  return (
    <>
      <tr key={props.id} className={styles.trHover}>
        <td className={styles.td}>{props.username}</td>
        <td className={styles.td}>{props.lastname}</td>
        <td className={styles.td}>{props.email}</td>
        <td className={styles.td}>{props.phone}</td>
      </tr>
    </>
  );
};

export default Contact;

/* <td key={props.id}>
        <td className={styles.td}>{props.username}</td>
        <td className={styles.td}>{props.lastname}</td>
        <td className={styles.td}>{props.email}</td>
        <td className={styles.td}>{props.phone}</td>

        <td>
          <div className={styles.btnDiv}>
            <img
              src={process.env.PUBLIC_URL + "/edit.png"}
              alt=""
              onClick={startEditing}
            />
            <img
              src={process.env.PUBLIC_URL + "/trash.png"}
              alt=""
              onClick={() => props.deleteUserData(props.id)}
            />
          </div>
        </td>
      </td> */

/*  {editing ? (
        <ErrorModal
          setUpdateUsername={props.setUpdateUsername}
          setUpdatePhone={props.setUpdatePhone}
          setUpdateEmail={props.setUpdateEmail}
          username={props.username}
          lastname={props.lastname}
          email={props.email}
          phone={props.phone}
          setUpdateLastname={props.setUpdateLastname}
          id={props.id}
          stopEditing={stopEditing}
        />
      ) : null}*/
