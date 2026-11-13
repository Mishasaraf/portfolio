import { useState } from "react";
import { navLinks, profile } from "../data/profile";
import { IconClose, IconMenu } from "./Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = navLinks.map((link) => (
    <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
      {link.label}
    </a>
  ));

  return (
    <header className="nav">
      <div className="container nav-row">
        <a href="#top" className="nav-name">
          {profile.name}
        </a>
        <nav className="nav-links">{links}</nav>
        <button
          className="btn-icon nav-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <IconClose className="icon" /> : <IconMenu className="icon" />}
        </button>
      </div>
      {open && <nav className="container nav-mobile">{links}</nav>}
    </header>
  );
}
