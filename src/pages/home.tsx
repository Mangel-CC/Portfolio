import { motion } from "motion/react";
import AnimatedBadge from "../components/AnimatedBadge";
import SocialMediaBtn from "../components/SocialMediaBtn";
import Navbar from "../components/Navbar.tsx";
import SpaceBackground from "../components/SpaceBackground.tsx";

export default function Home() {
  return (
      <section className="flex flex-col justify-center min-h-[calc(100vh-7rem)] px-8 sm:px-16 lg:px-24 text-center items-center align-middle place-content-center">
        <SpaceBackground />
        <Navbar />
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
        >
          <p className="text-muted-foreground text-sm tracking-widest uppercase font-sans">
            Fullstack Developer
          </p>

          <h1 className="font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance">
            Miguel Angel
          </h1>

          <h1 className="text-red-500 font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent leading-tight text-balance">
            Cortazar Castillo
          </h1>

          <AnimatedBadge />

          <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-lg text-muted-foreground text-sm sm:text-base leading-relaxed mt-2"
          >
            Ingeniero en Sistemas con enfoque en desarrollo web,
            aplicaciones multiplataforma y experiencias interactivas.
          </motion.p>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
          >
            <SocialMediaBtn />
          </motion.div>
        </motion.div>
      </section>
  );
}
