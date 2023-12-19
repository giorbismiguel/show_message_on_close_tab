import React from 'react'
import CompaniesProvider from '../contexts/CompaniesContext';
import CompaniesListContainer from '../containers/CompaniesListContainer';
import ListLayout from '../../../layouts/ListLayout';


const CompaniesPage = () => {
  return (
    <ListLayout>
      <CompaniesProvider>
        <CompaniesListContainer />
      </CompaniesProvider>
    </ListLayout>
  );
}

export default CompaniesPage
