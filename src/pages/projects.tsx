import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar.tsx";
import SpaceBackground from "../components/SpaceBackground.tsx";

const projects = [
    {
        title: "XDevLab - Aplicaciones Web",
        description:
            "Desarrollo de aplicaciones web con React, integracion con backend y bases de datos para el laboratorio de desarrollo XDevLab.",
        image: "/images/project-xdevlab.jpg",
        url: "https://github.com/Mangel-CC",
        tags: ["React", "Firebase", "Web App"],
    },
    {
        title: "Videojuego VR Día 0 - Casa del Agua",
        description:
            "Videojuego de Realidad Virtual desarrollado en Unity, utilizado en la Casa del Agua en Villahermosa, Tabasco.",
        image: "https://ik.imagekit.io/8gwphgytz/D%C3%ADa0_preview.png",
        url: "https://github.com/Mangel-CC",
        tags: ["Unity", "VR", "C#", "Blender"],
    },
    {
        title: "ZonaMarket",
        description:
            "Aplicacion fullstack multiplataforma con Flutter para Web, Desktop y Mobile, con API backend y base de datos. - Actualmente en rediseño",
        image: "https://ik.imagekit.io/8gwphgytz/ZonaMarket_preview.png",
        url: "https://zonamarket.mangelcc.dev",
        tags: ["Flutter", "API REST", "MySQL"],
    },
    {
        title: "Portfolio Personal",
        description:
            "Repositorio de github de este mismo porfolio",
        image: "https://ik.imagekit.io/8gwphgytz/Portfolio_preview.png",
        url: "https://github.com/Mangel-CC/Portfolio",
        tags: ["React", "Tailwind CSS", "Motion"],
    },
];

export default function Projects() {
    return (
        <section className="min-h-screen px-8 sm:px-16 lg:px-24 pb-20 pt-35">
            <SpaceBackground />
            <Navbar />
            <div className="max-w-5xl mx-auto">
                <SectionHeading
                    title="Proyectos"
                    subtitle="Una seleccion de proyectos en los que he trabajado, desde aplicaciones web hasta experiencias de realidad virtual."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} {...project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
