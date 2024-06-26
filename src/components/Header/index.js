import React from "react";
import "./styles.css";

const navItems = [
  {
    id: 1,
    title: "Experience",
    label: "experience",
    url: "/#experiencia",
  },
  {
    id: 2,
    title: "About me",
    label: "about-me",
    url: "/#about-me",
  },
  {
    id: 3,
    title: "Contact",
    label: "contact",
    url: "mailto:diego.andres.menendez@gmail.com",
  },
];

function Header() {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex px-3 text-base font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center menu">
        {navItems.map((link) => (
          <a
            key={link.id}
            className="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
}
export default Header;
