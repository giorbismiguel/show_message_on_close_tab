import React from 'react';
import ContactsSubHeader from 'src/components/commons/subHeader/contacts';
import PageContainer from 'src/components/pageContainer/PageContainer';
import CustomFooter from 'src/components/commons/customFooter';
import NewContact from 'src/modules/contacts/components/newContact';
import { useContactsContext } from '../contexts/contacts.contexts';

import ContactsTable from '../components/table';

const ContactsContainer = () => {
  const { createContactModalActive, activeCreateContact } = useContactsContext();

  return (
    <div>
      <ContactsSubHeader />
      {createContactModalActive && <NewContact onClose={activeCreateContact} />}
      <PageContainer>
        <ContactsTable />
        <CustomFooter />
      </PageContainer>
    </div>
  );
};

export default ContactsContainer;
