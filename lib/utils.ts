import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatGuestName(name: string | null): string {
  if (!name) return "Bạn";

  // 1. Chuyển chữ "and" thành " + "
  // 2. Chuyển khoảng trắng (do trình duyệt giải mã dấu + trong URL) thành " + "
  // 3. Chuyển dấu gạch ngang "-" thành khoảng trắng
  const formattedName = name
    .replace(/\band\b/gi, " + ")
    .replace(/ /g, " + ")
    .replace(/-/g, " ");

  return formattedName
    .split(" ")
    .filter(Boolean)
    .map((word) =>
      word === "+"
        ? "+"
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ")
    .replace(/\s\+\s/g, " + "); // Đảm bảo khoảng cách dấu + đẹp
}
