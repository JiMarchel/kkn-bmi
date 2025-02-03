import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colorCategory = (category: string | undefined) => {
  switch (category) {
    case "Rendah":
      return "text-red-400";
    case "Ideal":
      return "text-green-600";
    case "Berlebih":
      return "text-yellow-400";
    default:
      return "text-red-400";
  }
};
