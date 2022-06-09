import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/profile/Logo.png'

const Navbar = () => {

    const menuItem=<>
    <li><a href='/home'>Home</a></li>
    <li><a>My Project</a></li>
    <li><a href='/contact'>Contact Me</a></li>
    <li><a>About</a></li>
    </>
    
    return (
        <div class="navbar ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItem}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">
                    <img style={{width:'27px',borderRadius:'10px', marginRight:'15px'}} className="" src={Logo} alt=''/> AA_SUHAIL
                </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div class="navbar-end">
                <a href='https://drive.google.com/file/d/1guq0eRoMkcFAkgzGNiWQIJOj6sYF-L5i/view?usp=sharing' target='_blank' class="btn btn-primary">My Resume</a>
            </div>
        </div>
    );
};

export default Navbar;