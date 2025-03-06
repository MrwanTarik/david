import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedPattern() {
  // State to control animation sequence
  const [animationPhase, setAnimationPhase] = useState("initial");

  // Start animation sequence when component mounts
  useEffect(() => {
    // First phase - elements enter
    setAnimationPhase("entrance");

    // Second phase - start breathing animations
    const timer = setTimeout(() => {
      setAnimationPhase("breathing");
    }, 1500); // Wait for entrance animation to complete

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 711 699"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-auto"
    >
      {/* Main container with breathing effect */}
      <motion.g
        initial="initial"
        animate={animationPhase}
        variants={{
          initial: {},
          entrance: {},
          breathing: {
            scale: [0.99, 1.01, 0.99],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
      >
        {/* Group 1 - Left elements */}
        <motion.g
          variants={{
            initial: { x: -200, opacity: 0 },
            entrance: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
            breathing: {
              x: 0,
              y: 0,
              opacity: 1,
            },
          }}
        >
          <rect
            x="140.552"
            y="279.612"
            width="139.759"
            height="139.759"
            rx="69.8797"
            fill="#313131"
          />
          <rect
            x="0.792969"
            y="419.372"
            width="139.759"
            height="139.759"
            rx="69.8797"
            fill="#F43F54"
          />
          <rect
            x="36.5718"
            y="455.15"
            width="68.2026"
            height="68.2026"
            rx="34.1013"
            fill="white"
          />
          <path
            d="M140.552 419.372H280.312V559.131C203.125 559.131 140.552 496.559 140.552 419.372Z"
            fill="#14AAF5"
          />
          <path
            d="M140.552 559.132H280.312V698.891C203.125 698.891 140.552 636.319 140.552 559.132Z"
            fill="#FE6532"
          />
        </motion.g>

        {/* Bottom red path - FIX: directly animate without nesting */}
        <motion.path
          d="M281.43 557.969C281.43 558.157 281.429 558.345 281.429 558.533C281.429 635.411 343.836 698.933 420.715 698.933C497.593 698.933 560 635.411 560 558.533C560 558.345 560 558.157 559.999 557.969H492.913C492.915 558.157 492.915 558.345 492.915 558.533C492.915 599.059 459.85 631.848 420.715 631.848C381.579 631.848 348.514 599.059 348.514 558.533C348.514 558.345 348.514 558.157 348.516 557.969H281.43Z"
          fill="#F43F54"
          variants={{
            initial: { y: 200, opacity: 0 },
            entrance: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              },
            },
            breathing: {
              y: [-3, 3, -3],
              opacity: 1,
              transition: {
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: { duration: 0 },
              },
            },
          }}
        />

        {/* Group 3 - Right elements */}
        <motion.g
          variants={{
            initial: { x: 200, opacity: 0 },
            entrance: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              },
            },
            breathing: {
              x: 0,
              y: 0,
              opacity: 1,
            },
          }}
        >
          <motion.rect
            x="559.83"
            y="139.853"
            width="139.759"
            height="139.759"
            rx="69.8797"
            fill="#FE6532"
            variants={{
              breathing: {
                y: [-4, 4, -4],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              },
            }}
          />
          <path
            d="M593 621.962C593 595.473 614.473 574 640.962 574C660.73 574 678.473 586.128 685.651 604.547L687.074 608.198C691.833 620.41 691.961 633.942 687.434 646.242L684.968 652.943C678.1 671.602 660.326 684 640.444 684C614.241 684 593 662.759 593 636.556V621.962Z"
            stroke="#14AAF5"
            strokeWidth="30"
          />
          <path
            d="M559.83 279.612L420.07 279.612L420.07 139.853C497.257 139.853 559.83 202.425 559.83 279.612Z"
            fill="#796EFF"
          />
          <path
            d="M699.591 279.612L699.591 419.372L559.831 419.372C559.831 342.185 622.404 279.612 699.591 279.612Z"
            fill="#FCBD01"
          />
          <path
            d="M559.83 419.372H699.589V559.131C622.402 559.131 559.83 496.559 559.83 419.372Z"
            fill="#796EFF"
          />
        </motion.g>

        {/* Group 4 - Top elements */}
        <motion.g
          variants={{
            initial: { y: -200, opacity: 0 },
            entrance: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
              },
            },
            breathing: {
              x: 0,
              y: 0,
              opacity: 1,
            },
          }}
        >
          <rect
            x="418.394"
            y="140.412"
            width="136.405"
            height="276.165"
            rx="68.2026"
            transform="rotate(90 418.394 140.412)"
            stroke="#313131"
            strokeWidth="3.35423"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M354.105 149.829C353.948 149.828 353.791 149.827 353.634 149.827C321.167 149.827 294.847 176.147 294.847 208.615C294.847 241.082 321.167 267.402 353.634 267.402C353.791 267.402 353.948 267.402 354.105 267.401V149.829Z"
            fill="#313131"
          />
          <path
            d="M559.83 0.0936279H629.709C668.303 0.0936279 699.589 31.3798 699.589 69.9734C699.589 108.567 668.303 139.853 629.709 139.853C591.116 139.853 559.83 108.567 559.83 69.9734V0.0936279Z"
            fill="#FCBD01"
          />
          <rect
            x="595.608"
            y="35.872"
            width="68.2026"
            height="68.2026"
            rx="34.1013"
            fill="white"
          />
        </motion.g>

        {/* Pattern mask - centered with no animation */}
        <mask
          id="mask0_85_171"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="281"
          y="279"
          width="279"
          height="280"
        >
          <path
            d="M281.43 418.813C281.43 341.934 343.752 279.612 420.63 279.612H559.83V418.813C559.83 495.691 497.508 558.013 420.63 558.013C343.752 558.013 281.43 495.691 281.43 418.813Z"
            fill="#A7A7A7"
          />
        </mask>
        <g mask="url(#mask0_85_171)">
          <rect width="400" height="400" x="220" y="219" fill="#6CB6FF" />
        </g>
      </motion.g>
    </motion.svg>
  );
}
