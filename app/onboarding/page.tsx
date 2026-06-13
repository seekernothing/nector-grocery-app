"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function Onboarding() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen relative">
      <img
        src="/assets/images/welcome-background.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute bottom-24 w-full flex flex-col items-center p-8 gap-4 z-10">
        <img
          src="/assets/images/carrot-img.png"
          alt=""
          className="h-14"
        />

        <h1 className="text-white text-4xl font-bold text-center max-w-[280px]">
          Welcome to our store
        </h1>

        <p className="text-white/70 text-base text-center">
          Get your groceries in as fast as an hour
        </p>

        <Button
          label="Get Started"
          variant="primary"
          onClick={() => router.push("/signup")}
        />
      </div>
    </div>
  );
}
