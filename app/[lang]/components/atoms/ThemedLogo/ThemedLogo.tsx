"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import PayoskyLogo from "../PaysokyLogo/PaysoskyLogo";

const ThemedLogo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <PayoskyLogo type="logotype" contrast="lg" />;

  return (
    <PayoskyLogo
      type="logotype"
      contrast="sm"
      theme={theme as "light" | "dark"}
    />
  );
};

export default ThemedLogo;
