import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader, { ComponentLoader } from '../components/Loader';

// Lazy load layout and pages
const MainLayout = lazy(() => import('../layouts/MainLayout'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Partners = lazy(() => import('../pages/Partners'));
const Services = lazy(() => import('../pages/Services'));
const BlogList = lazy(() => import('../pages/Blogs/BlogList'));
const BlogPost = lazy(() => import('../pages/Blogs/BlogPost'));
const BlogEditor = lazy(() => import('../pages/Blogs/BlogEditor'));
const ContactUs = lazy(() => import('../pages/ContactUs'));

// Error Boundary component
function ErrorFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We're sorry for the inconvenience. Please try refreshing the page.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    // Top-level suspense wraps everything ONCE
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/what-we-do" element={<Services />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/blogs/new" element={<BlogEditor />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">Page Not Found</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      The page you're looking for doesn't exist or has been moved.
                    </p>
                    <a 
                      href="/"
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Go Home
                    </a>
                  </div>
                </div>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default AppRoutes;