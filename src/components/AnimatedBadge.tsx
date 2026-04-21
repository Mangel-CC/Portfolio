import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function AnimatedBadge() {
    const { t } = useLanguage();
    const titles = t.badge.titles;
    const [index, setIndex] = useState(0);

    /* Cycles the array index at a fixed time interval */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        /* Animated container */
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
                    {/* Renders the current title from the array */}
                    {titles[index]}
                </motion.span>
            </AnimatePresence>

            <span className="opacity-0 whitespace-nowrap">
                {titles[index]}
            </span>
        </motion.div>
    );
}
