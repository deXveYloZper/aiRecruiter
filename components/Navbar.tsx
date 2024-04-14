// components/Navbar.tsx
import Link from 'next/link';
import styles from '../styles/Navbar.module.css' // Import your CSS module here

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} fixed top-0 left-0 w-full z-10`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/">
            <span className={`${styles.brandName} cursor-pointer`}>
              BrandName
            </span>
          </Link>
        </div>
        <div className="flex">
          <Link href="/about">
            <span className={`${styles.navItem} cursor-pointer`}>
              About
            </span>
          </Link>
          <Link href="/recruitment">
            <span className={`${styles.navItem} cursor-pointer`}>
              Recruitment
            </span>
          </Link>
          {/* ...other nav items */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
