import React from "react";

const navItems = [
  {
    id: 1,
    title: "Experiencia",
    label: "experiencia",
    url: "/#experiencia",
  },
  {
    id: 2,
    title: "Proyectos",
    label: "proyectos",
    url: "/#proyectos",
  },
  {
    id: 3,
    title: "Sobre mí",
    label: "sobre-mi",
    url: "/#sobre-mi",
  },
  {
    id: 4,
    title: "Contacto",
    label: "contacto",
    url: "mailto:diego.andres.menendez@gmail.com",
  },
];

function Header() {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
      <nav className="flex px-3 text-base font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
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
