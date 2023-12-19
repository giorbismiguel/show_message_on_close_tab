import { createContext, useState, useMemo } from 'react';

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

export default ContactsContextProvider;
