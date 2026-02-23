import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { Home, User, Folder, Mail } from "lucide-react";

const tabs = [
    { id: "Home", icon: Home, path: "/" },
    { id: "About", icon: User, path: "/about" },
    { id: "Work", icon: Folder, path: "/projects" },
    { id: "Links", icon: Mail, path: "/contact" },
];

export default function Navbar() {
    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav
                className="relative flex items-center gap-2 px-3 py-2.5 rounded-full
          bg-[#1a1a24]/80 backdrop-blur-xl border border-white/6
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                role="navigation"
                aria-label="Main navigation"
            >
                {tabs.map(({ id, icon: Icon, path }) => (
                    <NavLink key={id} to={path} aria-label={id}>
                        {({ isActive }) => (
                            <button
                                className="group relative flex items-center justify-center w-12 h-12 rounded-full
                  cursor-pointer transition-colors duration-200"
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 28,
                                        }}
                                        className="absolute inset-0 rounded-full bg-white/8
                      border border-white/8"
                                    />
                                )}
                                <Icon
                                    size={20}
                                    strokeWidth={1.6}
                                    className={`relative z-10 transition-colors duration-200
                    ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/70"}`}
                                />
                            </button>
                        )}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
