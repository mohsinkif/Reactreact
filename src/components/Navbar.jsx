import React, { useState } from "react";
import NavLink from "./CustomLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { TiLeaf } from "react-icons/ti";

import Home from "./Home";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Harvester",
    path: "/harvester",
  },

  {
    title: "Transporter",
    path: "/transporter",
  },
  
  // {
  //   title: "Log out",
  //   path: "/Log out",
  // },

];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
       <nav className="fixed mx-auto border border-green-700 top-0 left-0 right-0 z-10 bg-transparent  bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl text-secondary-400 md:text-5xl font-semibold"
        >
<div className="flex items-center">
  <p className="text-2xl text-green-700">Agri<span className="text-black">Drone</span></p>
  <TiLeaf color="green" size={40} />
</div>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-green-500 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-secondary-500 hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
                      <Link to="/">Logout</Link>

          </ul>

        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
 </> );
};

export default Navbar;