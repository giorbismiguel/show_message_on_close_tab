import { Route, Routes } from 'react-router';
import NotFoundPage from '../../components/NotFound/NotFound';
import CompaniesPage from './pages/CompaniesPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import DetailPage from './pages/DetailPage';

const CompanyRoutes = () => (
  <Routes>
    <Route path='/'>
      <Route path='/' element={<CompaniesPage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/edit' element={<EditPage />} />
      <Route path='/detail' element={<DetailPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default CompanyRoutes;
