"use client"
import store from '@/store/store';
import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    );
};

export default AppProvider;