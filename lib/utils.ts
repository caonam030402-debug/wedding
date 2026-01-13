import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatGuestName(name: string | null): string {
  if (!name) return "Bạn";

  // Thay thế các ký tự đặc biệt như _ hoặc - thành khoảng trắng cho dễ đọc
  // Và xử lý trường hợp URL bị encode + thành khoảng trắng
  const formattedName = name.replace(/[_-]/g, " ");

  // Viết hoa chữ cái đầu của mỗi từ cho đẹp
  return formattedName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
