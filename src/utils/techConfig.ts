import type { ElementType } from "react";
import { Link, Gamepad2, Server } from "lucide-react";
import {
    SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
    SiFlutter, SiDart, SiFirebase, SiMysql, SiPostgresql,
    SiDocker, SiLinux, SiUnity, SiBlender, SiGit, SiSharp,
    SiFramer,
} from "react-icons/si";

export type TechInfo = { icon?: ElementType; color?: string };

export const techConfig: Record<string, TechInfo> = {
    "React":            { icon: SiReact,       color: "#61DAFB" },
    "JavaScript":       { icon: SiJavascript,  color: "#F7DF1E" },
    "HTML":             { icon: SiHtml5,       color: "#E34F26" },
    "CSS":              { icon: SiCss3,        color: "#1572B6" },
    "Tailwind CSS":     { icon: SiTailwindcss, color: "#06B6D4" },
    "Flutter":          { icon: SiFlutter,     color: "#54C5F8" },
    "Dart":             { icon: SiDart,        color: "#0175C2" },
    "Firebase":         { icon: SiFirebase,    color: "#FFCA28" },
    "APIs REST":        { icon: Link,          color: "#94a3b8" },
    "API REST":         { icon: Link,          color: "#94a3b8" },
    "MySQL":            { icon: SiMysql,       color: "#4479A1" },
    "PostgreSQL":       { icon: SiPostgresql,  color: "#336791" },
    "Docker":           { icon: SiDocker,      color: "#2496ED" },
    "VPS":              { icon: Server,        color: "#94a3b8" },
    "Linux":            { icon: SiLinux,       color: "#FCC624" },
    "Unity":            { icon: SiUnity,       color: "#dddddd" },
    "VR":               { icon: Gamepad2,      color: "#a78bfa" },
    "Realidad Virtual": { icon: Gamepad2,      color: "#a78bfa" },
    "Blender":          { icon: SiBlender,     color: "#F5792A" },
    "Git":              { icon: SiGit,         color: "#F05032" },
    "C#":               { icon: SiSharp,       color: "#9B4F96" },
    "Motion":           { icon: SiFramer,      color: "#0055FF" },
};
