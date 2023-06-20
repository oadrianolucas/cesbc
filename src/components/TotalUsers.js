import React, { useState } from "react";
import { BsPersonGear, BsPersonBadge } from "react-icons/bs";
import { GiTeacher, GiHealthNormal } from "react-icons/gi";
import { FaChalkboardTeacher, FaUserFriends } from "react-icons/fa";
import { RiMapPinUserLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { IoSchool } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

export function TotalUsers() {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const [showAllCategories, setShowAllCategories] = useState(false);

  const categories = [
    {
      id: 1,
      title: "usuários",
      icon: <FaUserFriends />,
      isVisible: true,
    },
    {
      id: 2,
      title: "professores",
      icon: <GiTeacher />,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 3,
      title: "administradores",
      icon: <BsPersonGear />,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 4,
      title: "coordenadores",
      icon: <FaChalkboardTeacher />,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 5,
      title: "gestores locais",
      icon: <RiMapPinUserLine />,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 6,
      title: "estagiários",
      icon: <IoSchool />,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 7,
      title: "salva vidas",
      icon: <GiHealthNormal />,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 8,
      title: "contratados",
      icon: <BsPersonBadge />,
      isVisible: showAllCategories || !isMobile,
    },
  ];

  const toggleVisibility = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4 gap-4 uppercase">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`${
              category.isVisible ? "block" : "hidden"
            } bg-white text-blue-900 dark:bg-gray-800 shadow-lg rounded-md
                flex items-center justify-between p-3 dark:border-gray-600 font-medium group`}
          >
            <div
              className="flex justify-center items-center w-14 h-14
              bg-blue-900 rounded-full transition-all duration-300
              transform group-hover:rotate-12"
            >
              <span className="text-white text-3xl">{category.icon}</span>
            </div>
            <div className="text-right">
              <p className="text-2xl">0</p>
              <p className="text-sm font-medium">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:hidden md:hidden lg:hidden">
        <button
          className="bg-gray-100 text-gray-500 font-medium w-full p-2 mb-4 rounded"
          onClick={toggleVisibility}
        >
          {categories.every((category) => category.isVisible) ? (
            <span className="flex items-center">
              <RiEyeOffLine className="mr-2" /> Categorias
            </span>
          ) : (
            <span className="flex items-center">
              <RiEyeLine className="mr-2" /> Categorias
            </span>
          )}
        </button>
      </div>
    </>
  );
}
