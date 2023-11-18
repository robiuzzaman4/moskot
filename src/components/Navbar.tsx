"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navlist: Array<string> = ["Availability", "Integration", "Community"];

const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav-wrapper">
        <Image
          className="nav-brand"
          src="/brand-logo.svg"
          alt="Brand Logo"
          height={40}
          width={100}
        />

        <div className="small-device-menu">
          {/* toggle btn */}
          <button
            onClick={() => setNavbarIsOpen(!navbarIsOpen)}
            className="toggle-btn"
          >
            <Image src="/menu.svg" alt="Menu Logo" height={20} width={20} />
          </button>

          {/* avatar for small device */}
          <Image
            className="avatar-sm-device"
            src="/avatar.svg"
            alt="Avatar Logo"
            height={32}
            width={32}
          />
        </div>

        {/* navlist */}
        <div
          className={`navlist ${navbarIsOpen ? "navbar-open" : "navbar-close"}`}
        >
          {navlist?.map((item) => (
            <Link href={""} key={item} className="navlink font-sm">
              {item}
            </Link>
          ))}

          {/* notification and avatar */}
          <div className="notification-avatar">
            <Image
              className="notification"
              src="/notification.svg"
              alt="Notification Logo"
              height={32}
              width={32}
            />
            <Image
              className="avatar"
              src="/avatar.svg"
              alt="Avatar Logo"
              height={32}
              width={32}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
