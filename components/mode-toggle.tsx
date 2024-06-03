"use client";

import * as React from "react";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("light")}
          className=" cursor-default"
        >
          <SunMoon />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("dark")}
          className=" cursor-default"
        >
          <SunMoon />
        </Button>
      )}

      <span className="sr-only">Toggle theme</span>
    </>
  );
}
