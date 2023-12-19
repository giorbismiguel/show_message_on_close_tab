import React from 'react'
import { Table } from 'antd'
import CompaniesTabsFilters from '../components/CompaniesTabsFilters/CompaniesTabsFilters'
import CompaniesListToolbar from '../components/CompaniesListToolbar/CompaniesListToolbar'
import CompaniesEditModal from '../components/CompaniesEditModal/CompaniesEditModal'

const CompaniesListContainer = () => {
  return (
    <>
      <CompaniesTabsFilters />
      <CompaniesListToolbar />
      <Table />
      <CompaniesEditModal />
    </>
  )
}

export default CompaniesListContainer