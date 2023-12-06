import { createContext, useContext, useState, useMemo } from 'react';

interface InitialStateProps {
    activeContact: boolean;
    activeContactHandler: (progress: boolean) => void;
}

export const ContactsContext = createContext({} as InitialStateProps);

const ContactsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeContact, setActiveContact] = useState<boolean>(false);


    const activeContactHandler = (active: boolean) => {
        setActiveContact(active);
    };


    const values = useMemo(
        () => ({
            activeContact,
            activeContactHandler,
        }),
        [activeContact],
    );

    return <ContactsContext.Provider value={values}>{children}</ContactsContext.Provider>;
};

export const useContactsContext = () => {
    const context = useContext(ContactsContext);

    if (context === undefined) {
        throw new Error('useContactsContext must be used within a ContactsContextProvider');
    }

    return context;
};

export default ContactsContextProvider;