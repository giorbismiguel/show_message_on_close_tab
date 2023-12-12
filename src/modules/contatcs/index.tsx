import { Route, Routes } from 'react-router';
import PageContacts from './pages';
import NotFoundPage from '../../components/NotFound/NotFound';

const ContactRoutes = () => (
  <Routes>
    <Route path='/'>
      <Route path='/' element={<PageContacts />} />
      <Route path='/create' element={<PageContacts />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default ContactRoutes;
