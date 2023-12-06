import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import useContactHeaders from 'src/hooks/useContactHeaders';
import useGridPreferences, { GridNames } from 'src/hooks/useGridPreferences';

interface InitialStateProps {
  activeCreateContact: () => void;
  createContactModalActive: boolean;
  allowCreateContact: boolean;
  allowCreateContactHandler: (status: boolean) => void;
  progressCreationContact: number;
  progressCreationContactHandler: (progress: number) => void;
  exportContactsHandler: () => void;
  exportContactsModalActive: boolean;
  gridPreferences: ReturnType<typeof useGridPreferences>;
  columns: ReturnType<typeof useContactHeaders>['columns'];
  setColumns: ReturnType<typeof useContactHeaders>['setColumns'];
}

export const ContactsContext = createContext({} as InitialStateProps);

const ContactsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [createContactModalActive, setCreateContactModalActive] = useState(false);
  const [exportContactsModalActive, setExportContactsModalActive] = useState(false);
  const [allowCreateContact, setAllowCreateContact] = useState(true);
  const [progressCreationContact, setProgressCreationContact] = useState(0);
  const { columns, setColumns } = useContactHeaders();
  const gridPreferences = useGridPreferences(GridNames.Contacts);

  useEffect(() => {
    setColumns((cols) => gridPreferences.prepareColumns(cols));
  }, [gridPreferences.selected]);

  const activeCreateContact = () => {
    setCreateContactModalActive(!createContactModalActive);
  };

  const allowCreateContactHandler = (status: boolean) => {
    setAllowCreateContact(status);
  };

  const progressCreationContactHandler = (pregress: number) => {
    setProgressCreationContact(pregress);
  };

  const exportContactsHandler = () => {
    setExportContactsModalActive(!exportContactsModalActive);
  };

  const companiesValue = useMemo(
    () => ({
      createContactModalActive,
      activeCreateContact,
      allowCreateContact,
      allowCreateContactHandler,
      progressCreationContact,
      progressCreationContactHandler,
      exportContactsHandler,
      exportContactsModalActive,
      columns,
      setColumns,
      gridPreferences,
    }),
    [
      {
        activeCreateContact,
        createContactModalActive,
        allowCreateContact,
        allowCreateContactHandler,
        progressCreationContact,
        progressCreationContactHandler,
        exportContactsHandler,
        exportContactsModalActive,
        columns,
        setColumns,
        gridPreferences,
      },
    ],
  );

  return <ContactsContext.Provider value={companiesValue}>{children}</ContactsContext.Provider>;
};

export const useContactsContext = () => {
  const context = useContext(ContactsContext);

  if (context === undefined) {
    throw new Error('useContactsContext must be used within a ContactsContextProvider');
  }

  return context;
};

export default ContactsContextProvider;
