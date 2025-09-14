"use client";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useColorMode } from "@/components/ui/color-mode";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);

export default function BackgroundGrid() {
  const { colorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  // ensure client-side render only
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || colorMode !== "dark") return null;

  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={-1}
      overflow="hidden"
      pointerEvents="none"
      bg="black"
    >
      <MotionBox
        w="300%"
        h="300%"
        bgSize="60px 60px"
        bgImage={`linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                   linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`}
        style={{
          transform: "perspective(800px) rotateX(60deg) rotateZ(0deg)",
          transformOrigin: "center top",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 6, // faster movement
          ease: "linear",
        }}
      />
    </Box>
  );
}
