"use client";

import type { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
}: ButtonProps) {
  const base = "rounded-2xl py-4 w-full font-semibold text-center transition-colors";

  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-white border border-primary text-primary",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} flex items-center justify-center gap-2 cursor-pointer`}
    >
      {loading && (
        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}
      {!loading && label}
    </button>
  );
}
