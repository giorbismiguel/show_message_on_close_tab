import { lazy } from "react";

const loadCompanies = () => import("./CompaniesPage");
export const PageCompanies = lazy(loadCompanies);

const loadCreateCompany = () => import("./CreatePage");
export const CreateCompany = lazy(loadCreateCompany);

const loadEditCompany = () => import("./EditPage");
export const EditCompany = lazy(loadEditCompany);

const loadDetailCompany = () => import("./DetailPage");
export const DetailCompany = lazy(loadDetailCompany);
