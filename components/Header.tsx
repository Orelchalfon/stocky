import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";
const Header = () => {
  return (
    <header className=' header'>
      <div className='container header-wrapper '>
        <Link href='/'>
          <Image
            src='/assets/icons/logo.svg'
            alt='StocksApp Logo'
            width={140}
            height={32}
            className='h-8 w-auto cursor-pointer'
          />
        </Link>
        <nav className='hidden sm:block'>
          <NavLinks />
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
