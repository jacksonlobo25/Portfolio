import React from "react";
import { cn } from "./utils";

export function Card({ className, ...props }) {
  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow", className)} {...props} />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  );
}
