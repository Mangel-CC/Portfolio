import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Home, User, Folder, Link2 } from "lucide-react";
import type { ReactNode } from "react";

const tabs = [
  { id: "Home", icon: Home, path: "/" },
  { id: "About", icon: User, path: "/about" },
  { id: "Work", icon: Folder, path: "/projects" },
  { id: "Links", icon: Link2, path: "/contact" }
];

type NavItemProps = {
  children: ReactNode;
  to: string;
};

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="relative flex items-center gap-1 p-2 rounded-full
        bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
      >
        {tabs.map(({ id, icon: Icon, path }) => (
          <NavItem key={id} to={path}>
            <Icon size={18} />
          </NavItem>
        ))}
      </nav>
    </div>
  );
}

function NavItem({ children, to }: NavItemProps) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <button
          className="group relative p-3 rounded-full 
          text-white/70 hover:text-white transition"
        >
          {isActive && (
            <motion.span
              layoutId="pill"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
              className="absolute inset-0 rounded-full bg-white/20 
              shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
          )}

          <span className="relative z-10">
            {children}
          </span>
        </button>
      )}
    </NavLink>
  );
}
