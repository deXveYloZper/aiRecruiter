// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-30 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center py-6">
          {/* BrandName or Logo on the left */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <span className="cursor-pointer text-2xl font-bold hover:text-gray-100 transition duration-300 ease-in-out">
                BrandName
              </span>
            </Link>
          </div>

          {/* Centered navigation items */}
          <div className="hidden md:flex space-x-8">
            <Link href="/about">
              <span className="cursor-pointer text-base font-medium hover:text-gray-100 transition duration-300 ease-in-out">
                About
              </span>
            </Link>
            <Link href="/services">
              <span className="cursor-pointer text-base font-medium hover:text-gray-100 transition duration-300 ease-in-out">
                Services
              </span>
            </Link>
            {/* Add more links as needed */}
          </div>

          {/* Right-aligned items or CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <span className="cursor-pointer px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-opacity-20 hover:bg-opacity-30 transition duration-300 ease-in-out">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
