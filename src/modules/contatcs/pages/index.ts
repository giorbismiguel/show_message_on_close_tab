import { lazy } from 'react';

const loadContact = () => import('./PageContacts');
const PageContacts = lazy(loadContact);

export default PageContacts;
