import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Header,
  ContactList,
  SearchBox,
  ContactForm,
  Loader,
} from "./components";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { ToastContainer } from "react-toastify";
import "./App.css";

import { fetchContacts } from "./redux/contactsOps";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <ContactForm />
          <SearchBox />
          <ContactList />
          <ErrorMessage message={error} />
        </>
      )}
    </div>
  );
};

export default App;
