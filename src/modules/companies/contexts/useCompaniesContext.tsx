import { useContext } from "react";
import { CompaniesContext } from "./CompaniesContext";

export const useCompaniesContext = () => {
    const context = useContext(CompaniesContext);

    if (!context) {
        throw new Error('useCompaniesContext must be used within a CompaniesContextProvider');
    }

    return context;
};