"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  pretitle?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  pretitle,
  title,
  description,
  alignment = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mx-auto mb-12",
        alignment === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {pretitle && (
        <p className="inline-block px-3 py-1 text-sm font-medium text-blue-600 rounded-full bg-blue-100 dark:bg-blue-900 dark:text-blue-200 mb-4">
          {pretitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 