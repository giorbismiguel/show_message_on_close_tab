import { useContext } from "react";
import { ContactsContext } from "./ContactsContext";


export const useContactsContext = () => {
    const context = useContext(ContactsContext);

    if (!context) {
        throw new Error('useContactsContext must be used within a ContactsContextProvider');
    }

    return context;
};