export type Lang = "es" | "en";

export interface Translation {
    nav: {
        home: string;
        about: string;
        projects: string;
        contact: string;
        switchTo: string;
    };
    home: {
        role: string;
        description: string;
    };
    badge: {
        titles: string[];
    };
    about: {
        title: string;
        subtitle: string;
        bio1: string;
        bio2: string;
        location: string;
        available: string;
        languagesTitle: string;
        spanish: string;
        spanishLevel: string;
        english: string;
        englishLevel: string;
        skills: string;
        categories: {
            frontend: string;
            multiplatform: string;
            backend: string;
            devops: string;
            other: string;
        };
        skillLabels: {
            VR: string;
        };
    };
    contact: {
        title: string;
        subtitle: string;
        location: string;
        ctaTitle: string;
        ctaText: string;
        sendEmail: string;
    };
    projects: {
        title: string;
        subtitle: string;
        viewProject: string;
        viewRepo: string;
        items: { title: string; description: string }[];
    };
}

export const translations: Record<Lang, Translation> = {
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre Mí",
            projects: "Proyectos",
            contact: "Contacto",
            switchTo: "English",
        },
        home: {
            role: "Web Developer",
            description:
                "Ingeniero en Sistemas con enfoque en desarrollo web, aplicaciones multiplataforma y experiencias interactivas.",
        },
        badge: {
            titles: [
                "Product Builder",
                "Desarrollador Frontend",
                "Diseñador UI",
                "Especialista React",
                "Desarrollador de Videojuegos Unity",
                "Artista Blender",
                "Desarrollador de Software",
            ],
        },
        about: {
            title: "Sobre Mí",
            subtitle:
                "Desarrollador Frontend apasionado por crear experiencias digitales funcionales y visualmente atractivas.",
            bio1: "Soy Ingeniero en Sistemas con experiencia en desarrollo web, aplicaciones multiplataforma y experiencias interactivas. Trabajo con React, Flutter y Unity, creando soluciones completas desde frontend hasta despliegue con Docker.",
            bio2: "Participé en XDevLab desarrollando aplicaciones web, modelos 3D y un videojuego VR utilizado en la Casa del Agua en Villahermosa.",
            location: "Tabasco, México",
            available: "Disponible",
            languagesTitle: "Idiomas",
            spanish: "Español",
            spanishLevel: "Nativo",
            english: "Inglés",
            englishLevel: "Intermedio",
            skills: "Skills",
            categories: {
                frontend: "Frontend",
                multiplatform: "Multiplataforma",
                backend: "Backend / Cloud",
                devops: "DevOps",
                other: "Otros",
            },
            skillLabels: {
                VR: "Realidad Virtual",
            },
        },
        contact: {
            title: "Contacto",
            subtitle:
                "Si quieres hablar sobre un proyecto o simplemente saludar, no dudes en escribirme.",
            location: "Tabasco, México",
            ctaTitle: "Trabajemos juntos",
            ctaText:
                "Estoy abierto a oportunidades de trabajo, colaboraciones en proyectos y nuevos retos en desarrollo de software.",
            sendEmail: "Enviar email",
        },
        projects: {
            title: "Proyectos",
            subtitle:
                "Una selección de proyectos en los que he trabajado, desde aplicaciones web hasta experiencias de realidad virtual.",
            viewProject: "Ver proyecto",
            viewRepo: "Ver repositorio",
            items: [
                {
                    title: "Videojuego VR Aventura Jurásica",
                    description:
                        "Diseño y programación de experiencia VR de un mundo jurásico con dinosaurios.",
                },
                {
                    title: "Videojuego VR Día 0 - Casa del Agua",
                    description:
                        "Participación en diseño y programación de la experiencia VR desarrollada en Unity, utilizada en la Casa del Agua en Villahermosa, Tabasco.",
                },
                {
                    title: "ZonaMarket",
                    description:
                        "Aplicación fullstack multiplataforma con Flutter para Web, Desktop y Mobile, con API backend y base de datos. - Actualmente en rediseño",
                },
                {
                    title: "CineTrack",
                    description:
                        "App Android de catálogo y reproducción de películas con Jetpack Compose, ExoPlayer y la API de TMDB, con favoritos, watchlist y progreso de reproducción persistente.",
                },
                {
                    title: "Portfolio Personal",
                    description: "Repositorio de GitHub de este mismo portfolio.",
                },
            ],
        },
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
            switchTo: "Español",
        },
        home: {
            role: "Web Developer",
            description:
                "Systems Engineer focused on web development, cross-platform applications and interactive experiences.",
        },
        badge: {
            titles: [
                "Product Builder",
                "Frontend Developer",
                "UI Designer",
                "React Specialist",
                "Unity Game Developer",
                "Blender Artist",
                "Software Developer",
            ],
        },
        about: {
            title: "About Me",
            subtitle:
                "Frontend Developer passionate about building functional and visually engaging digital experiences.",
            bio1: "I'm a Systems Engineer with experience in web development, cross-platform applications and interactive experiences. I work with React, Flutter and Unity, delivering complete solutions from frontend to Docker deployment.",
            bio2: "I worked at XDevLab building web apps, 3D models and a VR game deployed at the Casa del Agua in Villahermosa.",
            location: "Tabasco, Mexico",
            available: "Available",
            languagesTitle: "Languages",
            spanish: "Spanish",
            spanishLevel: "Native",
            english: "English",
            englishLevel: "Intermediate",
            skills: "Skills",
            categories: {
                frontend: "Frontend",
                multiplatform: "Cross-platform",
                backend: "Backend / Cloud",
                devops: "DevOps",
                other: "Other",
            },
            skillLabels: {
                VR: "Virtual Reality",
            },
        },
        contact: {
            title: "Contact",
            subtitle:
                "If you'd like to talk about a project or just say hi, feel free to reach out.",
            location: "Tabasco, Mexico",
            ctaTitle: "Let's work together",
            ctaText:
                "I'm open to job opportunities, project collaborations and new challenges in software development.",
            sendEmail: "Send email",
        },
        projects: {
            title: "Projects",
            subtitle:
                "A selection of projects I've worked on, from web applications to virtual reality experiences.",
            viewProject: "View project",
            viewRepo: "View repository",
            items: [
                {
                    title: "VR Game - Jurassic Adventure",
                    description:
                        "Design and programming of a VR experience set in a Jurassic world with dinosaurs.",
                },
                {
                    title: "VR Game - Day 0 - Casa del Agua",
                    description:
                        "Contributed to the design and programming of the Unity VR experience used at the Casa del Agua in Villahermosa, Tabasco.",
                },
                {
                    title: "ZonaMarket",
                    description:
                        "Cross-platform fullstack application built with Flutter for Web, Desktop and Mobile, with backend API and database. - Currently being redesigned.",
                },
                {
                    title: "CineTrack",
                    description:
                        "Android movie catalog and playback app built with Jetpack Compose, ExoPlayer and the TMDB API, with favorites, watchlist and persistent playback progress.",
                },
                {
                    title: "Personal Portfolio",
                    description: "GitHub repository for this portfolio.",
                },
            ],
        },
    },
};
