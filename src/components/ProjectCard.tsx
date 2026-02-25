import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { techConfig } from "../utils/techConfig";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    url: string;
    tags: string[];
    index: number;
}

export default function ProjectCard({ title, description, image, url, tags, index }: ProjectCardProps) {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
            className="group relative block rounded-2xl overflow-hidden border border-white/10
            hover:border-red-500/50 hover:shadow-[0_0_40px_rgba(239,68,68,0.12)]
            transition-all duration-500 cursor-pointer"
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={`Preview de ${title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/92 via-black/55 to-black/10
                group-hover:from-black/85 group-hover:via-black/45 group-hover:to-transparent
                transition-all duration-500" />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col justify-end min-h-80 sm:min-h-90 p-5">

                {/* "Ver proyecto" badge - appears on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100
                translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                    bg-red-500/90 backdrop-blur-sm border border-red-400/40">
                        <ExternalLink size={11} className="text-white" strokeWidth={2} />
                        <span className="text-[10px] text-white font-medium">Ver proyecto</span>
                    </div>
                </div>

                {/* Tech tags with icons */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {tags.map((tag) => {
                        const tech = techConfig[tag];
                        const Icon = tech?.icon;
                        return (
                            <span
                                key={tag}
                                className="flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full
                                bg-black/50 backdrop-blur-sm border text-white/80 font-sans leading-none"
                                style={{
                                    borderColor: tech?.color
                                        ? `${tech.color}45`
                                        : "rgba(255,255,255,0.12)",
                                }}
                            >
                                {Icon && (
                                    <Icon
                                        size={11}
                                        color={tech?.color}
                                        style={{ flexShrink: 0 }}
                                    />
                                )}
                                {tag}
                            </span>
                        );
                    })}
                </div>

                {/* Title & Description glassmorphism panel */}
                <div className="p-4 rounded-xl bg-black/50 backdrop-blur-md border border-white/10
                group-hover:border-white/20 transition-colors duration-300">
                    <h3 className="font-sans font-semibold text-white text-base mb-1.5 leading-snug
                    group-hover:text-red-400 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-white/55 text-xs leading-relaxed line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </motion.a>
    );
}
