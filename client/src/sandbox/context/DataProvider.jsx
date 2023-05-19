import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export default function DataProvider({ children }) {
    const data = { data1: 100, data2: 200 };
    return <MyContext.Provider value={data}>{children}</MyContext.Provider>
}

export const useDAta = () => {
    const context = useContext(MyContext);
    if (!context) throw new Error('UseDAta must be used within a NameProvider');
    return context;
}

