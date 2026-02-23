import { motion } from "motion/react";
import { Code, Globe, Server, Box, Monitor, MapPin, Mail, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Navbar from "../components/Navbar.tsx";
import SpaceBackground from "../components/SpaceBackground.tsx";

const skillCategories = [
    {
        title: "Frontend",
        icon: Monitor,
        skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        title: "Multiplataforma",
        icon: Globe,
        skills: ["Flutter", "Dart"],
    },
    {
        title: "Backend / Cloud",
        icon: Server,
        skills: ["Firebase", "APIs REST", "MySQL", "PostgreSQL"],
    },
    {
        title: "DevOps",
        icon: Code,
        skills: ["Docker", "VPS", "Linux"],
    },
    {
        title: "Otros",
        icon: Box,
        skills: ["Unity", "Realidad Virtual", "Blender", "Git"],
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function About() {
    return (
        <>
            <SpaceBackground />
            <Navbar />
            <section className="min-h-screen pt-35 px-6 sm:px-12 lg:px-20 overflow-x-hidden overflow-y-auto lg:overflow-hidden">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12">

                    {/* COLUMNA IZQUIERDA */}
                    <div className="lg:w-1/2 flex flex-col">

                        <SectionHeading
                            title="Sobre Mi"
                            subtitle="Desarrollador Fullstack apasionado por crear experiencias digitales funcionales y visualmente atractivas."
                            centered={false}
                        />

                        {/* Bio */}
                        <motion.div
                            {...fadeUp}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 mt-6"
                        >
                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                Soy Ingeniero en Sistemas con experiencia en desarrollo web,
                                aplicaciones multiplataforma y experiencias interactivas.
                                Trabajo con React, Flutter y Unity, creando soluciones
                                completas desde frontend hasta despliegue con Docker.
                            </p>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Participé en XDevLab desarrollando aplicaciones web,
                                modelos 3D y un videojuego VR utilizado en la Casa del Agua
                                en Villahermosa.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4 mt-6 border-t border-white/10 text-xs">
                                <span className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin size={14} className="text-red-500" />
                                    Tabasco, México
                                </span>
                                <span className="flex items-center gap-2 text-muted-foreground">
                                    <Mail size={14} className="text-red-500" />
                                    miguelangtee@outlook.es
                                </span>
                                <span className="flex items-center gap-2 px-4 py-1 rounded-full border border-red-500/40 text-red-500">
                                    <Sparkles size={14} />
                                    Disponible
                                </span>
                            </div>
                        </motion.div>

                        {/* Idiomas */}
                        <div className="mt-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                            <h3 className="font-semibold mb-4 text-sm">Idiomas</h3>
                            <div className="flex gap-12 text-sm">
                                <div>
                                    <p className="font-medium text-red-500">Español</p>
                                    <p className="text-muted-foreground text-xs">Nativo</p>
                                </div>
                                <div>
                                    <p className="font-medium text-red-500">Inglés</p>
                                    <p className="text-muted-foreground text-xs">Intermedio</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* COLUMNA DERECHA */}
                    <div className="lg:w-1/2 flex flex-col">

                        <div className="flex items-center gap-3 mb-8">
                            <Code size={18} className="text-red-500" />
                            <h3 className="font-semibold text-lg">Skills</h3>
                        </div>

                        <div className="flex flex-col gap-6">
                            {skillCategories.map((cat, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/40 transition"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <cat.icon size={16} className="text-red-500" />
                                        <h4 className="text-sm font-medium">{cat.title}</h4>
                                    </div>

                                    <div className="flex flex-wrap gap-2 text-xs">
                                        {cat.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 rounded-full border border-white/10 text-muted-foreground"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}