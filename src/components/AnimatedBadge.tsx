import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

{/* Arreglo con textos para la barra*/ }
const titles = [
    "Product Builder",
    "Full-Stack Developer",
    "UI Designer",
    "React Specialist",
    "Unity Game Developer",
    "Blender Artist",
    "Software Developer"
];

export default function AnimatedBadge() {
    const [index, setIndex] = useState(0);

    /* Función que cambia el indice del arrleglo en un determinado intervalo de tiempo */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        /* Contenedor con animaciones */
        <motion.div
            layout="size"
            transition={{ duration: 0.25, ease: "easeOut" }}
            initial={false}
            className="font-mono relative mt-4 items-center justify-center overflow-hidden whitespace-nowrap inline-flex font-semibold text-white text-base xs:text-lg iphone15promax:text-[16px] sm:text-xl ipad11:text-[18px] bg-red-500 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 min-w-fit">
            <AnimatePresence mode="sync">
                <motion.span
                    key={titles[index]}
                    initial={{ y: 5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -5, opacity: 0 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="whitespace-nowrap absolute font-semibold"
                >
                    {/* Muestra los textos de la lista del arreglo */}
                    {titles[index]}
                </motion.span>
            </AnimatePresence>

            <span className="opacity-0 whitespace-nowrap">
                {titles[index]}
            </span>
        </motion.div>
    );
}
