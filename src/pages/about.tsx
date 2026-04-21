import { motion } from "motion/react";
import { Code, Globe, Server, Box, Monitor, MapPin, Mail } from "lucide-react";
import { techConfig } from "../utils/techConfig";
import SectionHeading from "../components/SectionHeading";
import Navbar from "../components/Navbar.tsx";
import SpaceBackground from "../components/SpaceBackground.tsx";
import { useLanguage } from "../i18n/LanguageContext";

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function About() {
    const { t } = useLanguage();
    const vrLabel = t.about.skillLabels.VR;
    const skillCategories = [
        {
            title: t.about.categories.frontend,
            icon: Monitor,
            skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        },
        {
            title: t.about.categories.multiplatform,
            icon: Globe,
            skills: ["Flutter", "Dart"],
        },
        {
            title: t.about.categories.backend,
            icon: Server,
            skills: ["Firebase", "APIs REST", "MySQL", "PostgreSQL"],
        },
        {
            title: t.about.categories.devops,
            icon: Code,
            skills: ["Docker", "VPS", "Linux"],
        },
        {
            title: t.about.categories.other,
            icon: Box,
            skills: ["Unity", vrLabel, "Blender", "Git", "C#", "Java", "PHP", "Python", "C++", "Kotlin"],
        },
    ];
    return (
        <>
            <SpaceBackground />
            <Navbar />
            <section className="min-h-screen pt-35 px-6 sm:px-12 lg:px-20 overflow-x-hidden overflow-y-auto lg:overflow-hidden">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12">

                    {/* LEFT COLUMN */}
                    <div className="lg:w-1/2 flex flex-col">

                        <SectionHeading
                            title={t.about.title}
                            subtitle={t.about.subtitle}
                            centered={false}
                        />

                        {/* Bio */}
                        <motion.div
                            {...fadeUp}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 mt-6 overflow-hidden"
                        >
                            {/* Red left accent */}
                            <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-linear-to-b from-red-500/70 via-red-500/30 to-transparent" />

                            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                {t.about.bio1}
                            </p>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {t.about.bio2}
                            </p>

                            <div className="flex flex-wrap gap-3 pt-4 mt-6 border-t border-white/10 text-xs">
                                <span className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin size={13} className="text-red-500" />
                                    {t.about.location}
                                </span>
                                <span className="flex items-center gap-2 text-muted-foreground">
                                    <Mail size={13} className="text-red-500" />
                                    miguelangtee@outlook.es
                                </span>
                                <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/40 text-red-400 bg-red-500/5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                    {t.about.available}
                                </span>
                            </div>
                        </motion.div>

                        {/* Languages */}
                        <motion.div
                            {...fadeUp}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mt-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
                        >
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                                {t.about.languagesTitle}
                            </h3>
                            <div className="flex gap-10 text-sm">
                                <div>
                                    <p className="font-semibold text-foreground">{t.about.spanish}</p>
                                    <p className="text-muted-foreground text-xs mt-0.5">{t.about.spanishLevel}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">{t.about.english}</p>
                                    <p className="text-muted-foreground text-xs mt-0.5">{t.about.englishLevel}</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:w-1/2 flex flex-col">

                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-1.5 rounded-lg bg-red-500/10 border border-red-500/20">
                                <Code size={15} className="text-red-500" />
                            </div>
                            <h3 className="font-semibold text-lg">{t.about.skills}</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            {skillCategories.map((cat, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp}
                                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                                    className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10
                                    hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <cat.icon size={13} className="text-red-500" />
                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            {cat.title}
                                        </h4>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map((skill) => {
                                            const cfg = techConfig[skill];
                                            const Icon = cfg?.icon;
                                            return (
                                                <span
                                                    key={skill}
                                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border
                                                    bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10
                                                    transition-all duration-200 cursor-default"
                                                    style={{
                                                        borderColor: cfg?.color
                                                            ? `${cfg.color}28`
                                                            : "rgba(255,255,255,0.08)",
                                                    }}
                                                >
                                                    {Icon && <Icon size={13} color={cfg?.color} />}
                                                    <span className="text-xs">{skill}</span>
                                                </span>
                                            );
                                        })}
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
