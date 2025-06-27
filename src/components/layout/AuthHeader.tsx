import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const AuthHeader: React.FC = () => {
  console.log('AuthHeader loaded');

  return (
    <header className="absolute top-0 left-0 w-full py-4">
      <div className="container mx-auto px-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800 hover:text-gray-900 transition-colors w-fit">
          <ShieldCheck className="h-6 w-6 text-blue-600" />
          <span>SwiftAuth</span>
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;