import Layout from "./Layout.jsx";
import LandingPage from "./LandingPage";
import ProjectFiles from "./ProjectFiles";
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    LandingPage: LandingPage,
    ProjectFiles: ProjectFiles,
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                <Route path="/" element={<LandingPage />} />
                <Route path="/LandingPage" element={<LandingPage />} />
                <Route path="/ProjectFiles" element={<ProjectFiles />} />
                {/* Add a catch-all route to handle any unmatched paths */}
                <Route path="*" element={<LandingPage />} />
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}