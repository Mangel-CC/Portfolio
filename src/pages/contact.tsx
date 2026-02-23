import { motion } from "motion/react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import GithubIcon from "../assets/github.svg?react";
import LinkedinIcon from "../assets/linkedin.svg?react";
import SectionHeading from "../components/SectionHeading";
import Navbar from "../components/Navbar.tsx";

const contactLinks = [
    {
        label: "GitHub",
        value: "Mangel-CC",
        url: "https://github.com/Mangel-CC",
        icon: GithubIcon,
    },
    {
        label: "LinkedIn",
        value: "Miguel Angel Cortazar",
        url: "#",
        icon: LinkedinIcon,
    },
    {
        label: "Email",
        value: "miguelangtee@outlook.es",
        url: "mailto:miguelangtee@outlook.es",
        icon: Mail,
    },
];

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function Contact() {
    return (
        <section className="min-h-screen flex items-center justify-center px-8 sm:px-16 lg:px-24 py-20 pt-35">
            <Navbar />
            <div className="max-w-xl w-full mx-auto text-center">
                <SectionHeading
                    title="Contacto"
                    subtitle="Si quieres hablar sobre un proyecto o simplemente saludar, no dudes en escribirme."
                    centered
                />

                {/* Location */}
                <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="flex items-center justify-center gap-2.5 mb-14 text-muted-foreground text-sm"
                >
                    <MapPin size={16} strokeWidth={1.5} className="text-red-500" />
                    <span>Tabasco, Mexico</span>
                </motion.div>

                {/* Contact links */}
                <div className="flex flex-col gap-5 mb-14">
                    {contactLinks.map((link, i) => (
                        <motion.a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            {...fadeUp}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl
                bg-card backdrop-blur-sm border border-border
                hover:border-red/20 transition-all duration-300"
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center
                  bg-red-500 border border-red-800 text-red
                  group-hover:bg-red-800 transition-colors duration-300">
                                    <link.icon size={20} strokeWidth={1.5} />
                                </div>
                                <div className="text-left">
                                    <p className="font-sans font-semibold text-foreground text-sm">
                                        {link.label}
                                    </p>
                                    <p className="text-muted-foreground text-xs mt-0.5">{link.value}</p>
                                </div>
                            </div>
                            <ArrowUpRight
                                size={18}
                                strokeWidth={1.5}
                                className="text-muted-foreground group-hover:text-red-500
                  group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                  transition-all duration-300"
                            />
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="p-10 sm:p-12 rounded-2xl bg-card backdrop-blur-sm border border-border"
                >
                    <h3 className="font-sans font-semibold text-foreground text-xl mb-4">
                        Trabajemos juntos
                    </h3>
                    <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto leading-relaxed">
                        Estoy abierto a oportunidades de trabajo, colaboraciones en
                        proyectos y nuevos retos en desarrollo de software.
                    </p>
                    <a
                        href="mailto:miguelangtee@outlook.es"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full
              bg-red-500 text-red-500-foreground font-sans font-semibold text-sm
              hover:bg-red-900 transition-colors duration-300
              shadow-lg shadow-red-700"
                    >
                        <Mail size={18} strokeWidth={1.5} />
                        Enviar email
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
