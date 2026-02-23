import {motion} from "motion/react";
import {ExternalLink} from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    url: string;
    tags: string[];
    index: number;
}

export default function ProjectCard({title, description, image, url, tags, index,}: ProjectCardProps) {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut"}}
            className="group relative block rounded-2xl overflow-hidden border border-border
        hover:border-red-500 transition-all duration-500 cursor-pointer"
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={`Preview de ${title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    crossOrigin="anonymous"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20
          group-hover:from-black/80 group-hover:via-black/40 group-hover:to-black/10
          transition-all duration-500"/>
            </div>

            {/* Glassmorphism content overlay */}
            <div className="relative z-10 flex flex-col justify-end min-h-80 sm:min-h-90 p-6">
                {/* External link icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100
          transition-opacity duration-300">
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                        <ExternalLink size={16} className="text-foreground" strokeWidth={1.5}/>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] sm:text-xs px-4 py-2 rounded-full
                bg-white/10 backdrop-blur-sm border border-white/10
                text-foreground/80 font-sans leading-none"
                        >
              {tag}
            </span>
                    ))}
                </div>

                {/* Title & Description - glassmorphism panel */}
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                    <h3 className="font-sans font-semibold text-foreground text-lg mb-1
            group-hover:text-red-500 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </motion.a>
    );
}
