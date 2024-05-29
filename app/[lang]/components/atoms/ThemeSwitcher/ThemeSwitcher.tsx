"use client";

import React from "react";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      isIconOnly
      radius="full"
      variant="light"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme == "dark" ? (
        <MoonIcon className="text-default-500" width={24} />
      ) : (
        <SunIcon className="text-default-500" width={24} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
