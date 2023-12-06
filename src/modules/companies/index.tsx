import { Route, Routes } from 'react-router';
import NotFoundPage from '../../components/NotFound/NotFound';
import PageCompanies from './pages/PageCompanies';

const CompanyRoutes = () => (
  <Routes>
    <Route path='/'>
      <Route path='/' element={<PageCompanies />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default CompanyRoutes;
