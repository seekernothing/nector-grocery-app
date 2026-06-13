"use client";

import type { ReactNode, InputHTMLAttributes } from "react";

interface InputProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  icon?: ReactNode;
}

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  icon,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <span className="text-sm text-textDark">{label}</span>}

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full border rounded-xl px-4 py-3 text-sm text-textDark focus:outline-none focus:border-primary transition-colors ${
            error ? "border-red-400" : "border-gray-200"
          }`}
        />
        {icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-textGray">
            {icon}
          </span>
        )}
      </div>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
