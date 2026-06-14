"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function OTP() {
  const router = useRouter();
  const [digits, setDigits] = useState(["", "", "", ""]);
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  function handleChange(index: number, value: string) {
    var num = value.replace(/[^0-9]/g, "");
    if (num.length > 1) return;

    var newDigits = [...digits];
    newDigits[index] = num;
    setDigits(newDigits);

    if (num !== "" && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === "Backspace" && digits[index] === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  }

  function handleSubmit() {
    var otp = digits.join("");
    if (otp.length === 4) {
      router.push("/location");
    }
  }

  return (
    <div className="bg-white min-h-screen lg:h-screen flex flex-col lg:flex-row max-w-7xl mx-auto lg:overflow-hidden">
      <div className="hidden lg:block lg:w-1/2 lg:h-full overflow-hidden">
        <img
          src="/assets/images/signuppage.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 lg:flex-none lg:w-1/2 flex flex-col mt-10 lg:mt-0 lg:justify-center lg:overflow-y-auto">
        <div className="flex items-center px-4 py-4">
          <button
            onClick={() => router.push("/signup")}
            className="flex items-center gap-2 text-textDark cursor-pointer"
          >
            <ChevronLeft size={24} />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>

        <div className="flex flex-col items-center px-6 pt-8 mt-40 lg:mt-0">
          <h1 className="text-2xl font-bold text-textDark mb-2">Enter OTP</h1>
          <p className="text-textGray text-xl font-bold mb-8">
            We sent a 4-digit code to your phone
          </p>

          <div className="flex gap-4 mb-8">
            {digits.map((digit, index) => (
              <input
                key={index}
                placeholder="0"
                ref={inputRefs[index]}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-14 h-14 text-center text-2xl font-bold border border-gray-200 rounded-xl text-textDark focus:border-primary focus:outline-none"
                maxLength={1}
              />
            ))}
          </div>

          <Button
            label="Verify"
            variant="primary"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
