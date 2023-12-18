import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
<NavLink to='/' className='relative'>
  <img src={logo} alt='logo' className='w-18 h-18 object-contain max-w-full max-h-full' />
  <span className='absolute inset-0 flex items-center justify-center text-white font-semibold'>
    RA
  </span>
</NavLink>


      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;