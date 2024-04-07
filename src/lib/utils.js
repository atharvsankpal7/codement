/* eslint-disable prefer-const */
/* eslint-disable no-prototype-builtins */
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
