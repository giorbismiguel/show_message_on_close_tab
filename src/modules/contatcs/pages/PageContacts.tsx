import ContactsContainer from '../containers/ContactsContainer';
import ContactsContextProvider from '../contexts/ContactsContext';

const PageContacts = () => (
  <ContactsContextProvider>
    <ContactsContainer />
  </ContactsContextProvider>
);
export default PageContacts;
