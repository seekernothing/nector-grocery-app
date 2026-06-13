"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function Splash() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        router.push("/home");
      } else {
        router.push("/onboarding");
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-primary flex items-center justify-center">
      <img
        src="/assets/images/nectar-logo-with-text.png"
        alt="Nector"
        className="w-40"
      />
    </div>
  );
}
