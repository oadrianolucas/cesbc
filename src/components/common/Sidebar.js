import React, { useState } from "react";
import { MdClose, MdMenu, MdSchool, MdLocationOn } from "react-icons/md";
import { BsBookmarksFill, BsFillPersonFill, BsKeyFill } from "react-icons/bs";
import { GiRunningShoe } from "react-icons/gi";
import { AiOutlineDashboard, AiTwotoneHome } from "react-icons/ai";
import Image from "next/image";
import DarkModeToggle from "../ui/DarkModeToggle";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { id: 1, title: "Início", icon: <AiTwotoneHome />, link: "#" },
    { id: 2, title: "Dados", icon: <AiOutlineDashboard />, link: "#" },
    { id: 3, title: "Usuários", icon: <BsFillPersonFill />, link: "#" },
    { id: 4, title: "Inscrições", icon: <BsBookmarksFill />, link: "#" },
    { id: 5, title: "Modalidades", icon: <GiRunningShoe />, link: "#" },
    { id: 6, title: "Turmas", icon: <MdSchool />, link: "#" },
    { id: 7, title: "Usuários", icon: <BsFillPersonFill />, link: "#" },
    { id: 8, title: "Permições", icon: <BsKeyFill />, link: "#" },
    { id: 9, title: "Locais", icon: <MdLocationOn />, link: "#" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full bg-blue-900
       dark:bg-gray-800 dark:border-gray-700 dark:border-b"
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {isOpen ? <MdClose /> : <MdMenu />}
              </button>
              <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                <Image
                  src="/img/logo.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-64 h-screen pt-20
        transition-transform bg-white border-r
        border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="flex items-center text-lg p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="mr-3">{link.icon}</span> {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
