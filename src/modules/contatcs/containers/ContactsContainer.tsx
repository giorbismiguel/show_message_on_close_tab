import React from 'react';
import { Button } from 'antd';
import { useContactsContext } from '../contexts/contacts.contents';

const ContactsContainer = () => {
  const { activeContactHandler } = useContactsContext();

  const handleOnClick = () => {
    activeContactHandler(true);
  }

  return (
    <div>
      <Button onClick={handleOnClick} >Active Contact</Button>
    </div>
  );
};

export default ContactsContainer;
