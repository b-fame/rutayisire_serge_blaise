import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-8xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="mb-4 text-3xl font-bold text-white">Page Not Found</h2>
      <p className="mb-8 max-w-md text-gray-400">
        The page you are looking for does not exist or has been moved. Let me help you get back on track.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-600 hover:scale-105"
        >
          <i className="bi bi-house-fill" />
          Go Home
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-6 py-3 font-semibold text-gray-300 transition-all duration-200 hover:border-blue-500 hover:text-blue-400 hover:scale-105"
        >
          <i className="bi bi-envelope-fill" />
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
