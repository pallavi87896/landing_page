import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Home, Book, Calendar } from "lucide-react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 h-16">
        
        <div>
          <img src={logo} alt="logo" className="h-16 w-18 rounded-full"/>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 text-gray-700 font-medium text-sm items-center">
          {/* Dashboard */}
          <div className="relative group flex items-center">
            <Home size={16} className="mr-1 text-indigo-600" />
            <button
              onClick={() => navigate("/dashboard")}
              className="px-3 py-1.5 cursor-pointer rounded-md relative z-10"
            >
              Dashboard
            </button>
            <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 rounded-md transition-opacity"></div>
          </div>

          {/* Problems */}
          <div className="relative group flex items-center">
            <Book size={16} className="mr-1 text-indigo-600" />
            <button
              onClick={() => navigate("/problems")}
              className="px-3 py-1.5 cursor-pointer rounded-md relative z-10"
            >
              Problems
            </button>
            <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 rounded-md transition-opacity"></div>
          </div>

          {/* Contests */}
          <div className="relative group flex items-center">
            <Calendar size={16} className="mr-1 text-indigo-600" />
            <button
              onClick={() => navigate("/contests")}
              className="px-3 py-1.5 cursor-pointer rounded-md relative z-10"
            >
              Contests
            </button>
            <div className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 rounded-md transition-opacity"></div>
          </div>

          {/* Login/Signup with Google Icon */}
          <button
            onClick={() => navigate("/login")}
            className="ml-2 px-4 py-2 bg-indigo-500 text-white text-sm font-semibold rounded-lg shadow flex items-center space-x-2 hover:scale-105 transition-transform cursor-pointer"
          >
            Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="flex flex-col items-center space-y-2 py-2 bg-white md:hidden text-gray-700 font-medium text-sm">
          <div className="relative group flex items-center w-32 justify-center">
            <Home size={16} className="mr-1 text-indigo-600" />
            <button
              onClick={() => navigate("/dashboard")}
              className="px-4 py-1.5 cursor-pointer rounded-md relative z-10 w-full text-center"
            >
              Dashboard
            </button>
          </div>

          <div className="relative group flex items-center w-32 justify-center">
            <Book size={16} className="mr-1 text-indigo-600" />
            <button
              onClick={() => navigate("/problems")}
              className="px-4 py-1.5 cursor-pointer rounded-md relative z-10 w-full text-center"
            >
              Problems
            </button>
          </div>

          <div className="relative group flex items-center w-32 justify-center">
            <Calendar size={16} className="mr-1 text-indigo-600" />
            <button
              onClick={() => navigate("/contests")}
              className="px-4 py-1.5 cursor-pointer rounded-md relative z-10 w-full text-center"
            >
              Contests
            </button>
          </div>

          <button
            onClick={() => navigate("/signup")}
            className="py-2 px-2 bg-indigo-500 text-white text-sm font-semibold rounded-lg shadow w-28 flex items-center space-x-2 justify-center hover:scale-105 transition-transform cursor-pointer"
          >
           Signup
          </button>
        </div>
      )}
      
    </div>
  );
}
