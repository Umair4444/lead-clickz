// "use client";
// import { motion } from "framer-motion";

// export default function ZeusThunderBolt() {
//   return (
//     <motion.svg
//       viewBox="0 0 120 420"
//       className="h-48 sm:h-64 md:h-80 w-auto"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: [0, 1, 0.8, 1] }}
//       transition={{ duration: 0.05, repeat: Infinity }}
//     >
//       {/* MAIN VERTICAL ZEUS BOLT */}
//       <path
//         d="
//           M60 10
//           L35 60
//           L80 120
//           L40 180
//           L90 240
//           L45 300
//           L75 360
//           L60 410
//         "
//         stroke="#ffffff"
//         strokeWidth="4"
//         fill="none"
//         strokeLinecap="square"
//         strokeLinejoin="miter"
//         filter="url(#zeusGlow)"
//       />

//       {/* FORKED STRIKES */}
//       <path
//         d="
//           M80 120 L110 90
//           M40 180 L10 210
//           M90 240 L115 265
//           M45 300 L15 330
//         "
//         stroke="#93c5fd"
//         strokeWidth="2.5"
//         fill="none"
//         opacity="0.9"
//       />

//       {/* CHAOTIC SECONDARY ARC */}
//       <path
//         d="
//           M60 40
//           L70 90
//           L50 150
//           L75 210
//           L55 270
//           L70 330
//           L60 380
//         "
//         stroke="#60a5fa"
//         strokeWidth="1.5"
//         fill="none"
//         opacity="0.6"
//       />

//       {/* GLOW */}
//       <defs>
//         <filter id="zeusGlow">
//           <feGaussianBlur stdDeviation="6" result="blur" />
//           <feMerge>
//             <feMergeNode in="blur" />
//             <feMergeNode in="SourceGraphic" />
//           </feMerge>
//         </filter>
//       </defs>
//     </motion.svg>
//   );
// }


"use client";
import { motion } from "framer-motion";

export default function ZeusThunderBolt() {
  return (
    <motion.svg
      viewBox="0 0 120 420"
      className="h-48 sm:h-64 md:h-80 w-auto"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0.7, 1, 0] } // sharp strike, slight flicker, then fade
      }
      transition={{ 
        duration: 1.2,           // longer for natural strike
        repeat: Infinity, 
        repeatDelay: 0.8,        // small pause between strikes
        ease: "easeInOut"        // smooth in/out
      }}
    >
      {/* MAIN VERTICAL ZEUS BOLT */}
      <path
        d="
          M60 10
          L35 60
          L80 120
          L40 180
          L90 240
          L45 300
          L75 360
          L60 410
        "
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
        filter="url(#zeusGlow)"
      />

      {/* FORKED STRIKES */}
      <path
        d="
          M80 120 L110 90
          M40 180 L10 210
          M90 240 L115 265
          M45 300 L15 330
        "
        stroke="#93c5fd"
        strokeWidth="2.5"
        fill="none"
        opacity="0.9"
      />

      {/* CHAOTIC SECONDARY ARC */}
      <path
        d="
          M60 40
          L70 90
          L50 150
          L75 210
          L55 270
          L70 330
          L60 380
        "
        stroke="#60a5fa"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />

      {/* GLOW */}
      <defs>
        <filter id="zeusGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </motion.svg>
  );
}
