import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import LoadingScreen from './components/LoadingScreen';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Profile = lazy(() => import('./pages/Profile'));
const Contact = lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);
  return null;
};

const NotFound = () => (
  <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
    <h1 className="mb-4 text-8xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      404
    </h1>
    <h2 className="mb-4 text-3xl font-bold text-white">Page Not Found</h2>
    <p className="mb-8 max-w-md text-gray-400">
      The page you are looking for does not exist or has been moved. Let me help you get back on track.
    </p>
    <div className="flex gap-4">
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-600 hover:scale-105"
      >
        <i className="bi bi-house-fill" />
        Go Home
      </a>
      <a
        href="/contact"
        className="inline-flex items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-6 py-3 font-semibold text-gray-300 transition-all duration-200 hover:border-blue-500 hover:text-blue-400 hover:scale-105"
      >
        <i className="bi bi-envelope-fill" />
        Contact Me
      </a>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <ScrollToTop />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
