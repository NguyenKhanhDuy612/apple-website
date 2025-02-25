import { ThemeProvider } from './components/contexts/ThemeContext';
import AppRouter from './components/routers/AppRouter';
const App = () => {
    return (
        <>
            <ThemeProvider>
                <AppRouter />
            </ThemeProvider> 
        </>
    );
};

export default App;
