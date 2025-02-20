import { About, Home } from '../pages';
import MainLayout from './../layouts/MainLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/articles" element={<Articles />} /> */}
                    {/* <Route path="/projects" element={<Projects />} /> */}
                    <Route path="/about-me" element={<About />} />
                    {/* <Route path="/experience" element={<Experience />} /> */}
                    {/* <Route path="/education" element={<EducationPage />} /> */}
                    {/* <Route path="/compete" element={<Compete />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;
