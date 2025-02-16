import { createContext, useContext } from 'react';

const initialState = { theme: 'system', setTheme: () => null };

const ThemeProviderContext = createContext(initialState);

const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export { useTheme };
