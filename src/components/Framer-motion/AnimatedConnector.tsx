import { motion } from "framer-motion";

export default function AnimatedConnector() {
  return (
    <>
      {/* MOBILE / TABLET */}
      <motion.div className="lg:hidden relative h-1 lg:h-2 w-40 md:w-28 lg:w-32 mx-6 mt-5 overflow-hidden">
        {/* Base polygon */}
        <div
          className="absolute inset-0 bg-blue-500/20"
          style={{
            clipPath:
              "polygon(0 50%, 6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%)",
          }}
        />

        {/* Flowing gradient inside polygon */}
        <motion.div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(0 50%, 6% 0, 94% 0, 100% 50%, 94% 100%, 6% 100%)",
            background:
              "linear-gradient(90deg, transparent, #3B82F6, #60A5FA, transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </motion.div>

      {/* DESKTOP */}
      <motion.div className="hidden lg:block relative h-1 w-24 xl:w-32 ml-6 overflow-hidden">
        {/* Base polygon */}
        <div
          className="absolute inset-0 bg-blue-500/20"
          style={{
            clipPath:
              "polygon(0 50%, 8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%)",
          }}
        />

        {/* Flowing gradient inside polygon */}
        <motion.div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(0 50%, 8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%)",
            background:
              "linear-gradient(90deg, transparent, #3B82F6, #60A5FA, transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
      </motion.div>
    </>
  );
}
