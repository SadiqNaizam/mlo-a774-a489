import React from 'react';
import { Link } from 'react-router-dom';

const AuthFooter: React.FC = () => {
  console.log('AuthFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p className="mb-2 md:mb-0">
          &copy; {currentYear} SwiftAuth. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link to="#" className="hover:text-gray-800 transition-colors">
            Terms of Service
          </Link>
          <span className="select-none">•</span>
          <Link to="#" className="hover:text-gray-800 transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default AuthFooter;