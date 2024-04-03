import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Header,
  ContactList,
  SearchBox,
  ContactForm,
  Loader,
} from "./components";
import "./App.css";

import { fetchContacts } from "./redux/contactsOps";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <ContactForm />
          <SearchBox />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default App;
