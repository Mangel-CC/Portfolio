import {motion} from "motion/react";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeading({title, subtitle, centered}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className={`mb-12 ${centered ? "text-center" : ""}`}
        >
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-foreground text-balance">
                {title}
            </h2>
            {subtitle && (
                <p className={`mt-3 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}>
                    {subtitle}
                </p>
            )}
            <div className="mt-4 h-0.5 w-20 rounded-full bg-linear-to-r from-red-500 via-red-500/50 to-transparent" />
        </motion.div>
    );
}
