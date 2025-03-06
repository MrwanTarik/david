"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Logo from "@/components/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="pt-8 pb-5 px-4 md:px-8 lg:px-20 max-w-[1440px] mx-auto relative   ">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Products", "Be a Partner", "FAQ", "Client Area"].map(
            (item, index) => (
              <Link
                key={index}
                href="#"
                className="text-[#2e3b7d] z-10 hover:text-[#39b4ff] transition-colors"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center space-x-4 z-10 menu-icon-login">
          <Button
            asChild
            className="bg-gradient-to-r from-[#14AAF5] to-[#7ECEFF] hover:opacity-90 transition-opacity text-white rounded-[15px] px-6 w-[123px] h-[46px] flex justify-center items-center font-inter"
          >
            <Link href="#">Dashboard</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden "
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full z-20 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "max-h-[300px] mx-[20px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-2">
          {["Home", "Products", "Be a Partner", "FAQ", "Client Area"].map(
            (item, index) => (
              <Link
                key={index}
                href="#"
                className="block text-[#2e3b7d] hover:bg-[#f3f7fc] px-4 py-2 transition-colors"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
