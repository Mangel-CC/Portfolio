import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar.tsx";
import SpaceBackground from "../components/SpaceBackground.tsx";
import { useLanguage } from "../i18n/LanguageContext";

const projectMeta = [
    {
        image: "https://ik.imagekit.io/8gwphgytz/Aventura%20Jurasica.jpeg",
        url: "#",
        tags: ["Unity", "VR", "C#", "Blender"],
        showLink: false,
    },
    {
        image: "https://ik.imagekit.io/8gwphgytz/D%C3%ADa0_preview.png",
        url: "#",
        tags: ["Unity", "VR", "C#", "Blender"],
        showLink: false,
    },
    {
        image: "https://ik.imagekit.io/8gwphgytz/ZonaMarket_preview.png",
        url: "https://zonamarket.mangelcc.dev",
        tags: ["Flutter", "API REST", "MySQL"],
    },
    {
        image: "https://ik.imagekit.io/8gwphgytz/Portfolio_preview.png",
        url: "https://github.com/Mangel-CC/Portfolio",
        tags: ["React", "Tailwind CSS", "Motion"],
        useRepoLabel: true,
    },
];

export default function Projects() {
    const { t } = useLanguage();
    const projects = projectMeta.map((meta, i) => ({
        ...meta,
        title: t.projects.items[i].title,
        description: t.projects.items[i].description,
        linkLabel: meta.useRepoLabel ? t.projects.viewRepo : t.projects.viewProject,
    }));

    return (
        <section className="min-h-screen px-8 sm:px-16 lg:px-24 pb-20 pt-35 overflow-hidden">
            <SpaceBackground />
            <Navbar />
            <div className="max-w-5xl mx-auto">
                <SectionHeading
                    title={t.projects.title}
                    subtitle={t.projects.subtitle}
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} {...project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
