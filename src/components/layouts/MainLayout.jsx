import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../index';

function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;
