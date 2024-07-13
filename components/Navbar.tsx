"use client";

import { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(true); // Tambahkan state untuk user
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="flexBetween max-container padding-container relative z-30 py-5 bg-transparent"
      ref={menuRef}
    >
      <Link href="/">
        <Image src="/pengaduan.svg" alt="logo" width={150} height={50} />
      </Link>
      <ul
        className={`lg:flex items-center gap-12 ${
          menuOpen ? "block" : "hidden"
        } lg:block absolute top-full left-0 w-full bg-white lg:bg-transparent lg:static lg:w-auto`}
      >
        {user && // Hanya tampilkan NAV_LINKS jika user true
          NAV_LINKS.map((link) => (
            <li
              key={link.key}
              className="lg:inline-block block"
              onClick={() => setMenuOpen(false)}
            >
              <Link
                href={link.href}
                className="block lg:inline-block regular-16 text-gray-50 lg:text-white py-2 px-6 lg:py-0 lg:px-0 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        <div className="lg:flexCenter hidden">
          <Link
            href="/login"
            className="font-semibold text-[#E1AD3F] btn_dark_blue flexCenter gap-3 rounded-xl border"
            onClick={() => setUser(!user)}
          >
            <img src="user.svg" alt="" /> {user ? "Logout" : "Login"}
          </Link>
        </div>
      </ul>

      <Image
        src="/menu.svg"
        alt="menu"
        height={32}
        width={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
