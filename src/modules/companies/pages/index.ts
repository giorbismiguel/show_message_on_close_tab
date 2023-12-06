import { lazy } from 'react';

const loadContact = () => import('./PageCompanies');
const PageContacts = lazy(loadContact);

export default PageContacts;
