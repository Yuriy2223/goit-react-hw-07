import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <h2 className={styles.title}>List of contacts</h2>
      <ul className={styles.list}>
        {contacts?.map((contact) => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
