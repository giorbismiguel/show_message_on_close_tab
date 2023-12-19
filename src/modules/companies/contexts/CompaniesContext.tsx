import React, { FC, PropsWithChildren, createContext, useMemo, useState} from 'react';

type Props = {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const CompaniesContext = createContext<Props>(null!);


const CompaniesProvider: FC<PropsWithChildren> = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const value = useMemo(() => ({
        loading,
        setLoading
    }), [loading]);

    return (
        <CompaniesContext.Provider value={value}>
            {children}
        </CompaniesContext.Provider>
    );
}

export default CompaniesProvider;

