import ContactsContainer from '../containers/ContactsContainer';
import ContactsContextProvider from '../contexts/contacts.contents';

const PageContacts = () => (
  <ContactsContextProvider>
    <ContactsContainer />
  </ContactsContextProvider>
);
export default PageContacts;
