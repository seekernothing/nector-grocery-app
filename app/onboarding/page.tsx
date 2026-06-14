"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Onboarding() {
  const router = useRouter();

  return (
    <div className="h-screen w-screen lg:w-full relative lg:flex lg:flex-row lg:h-screen overflow-hidden">
      <img
        src="/assets/images/welcome-background.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top z-0 lg:hidden"
      />

      <div className="hidden lg:block lg:w-1/2 lg:h-full lg:relative overflow-hidden">
        <img
          src="/assets/images/welcome-background.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[50%_25%]"
        />
      </div>

      <div className="absolute bottom-24 w-full flex flex-col items-center p-8 gap-4 z-10 lg:hidden">
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

      <div className="hidden lg:flex lg:w-1/2 lg:flex-shrink-0 lg:h-full bg-white flex-col items-center justify-center p-12 z-10">
        <img
          src="/assets/images/carrot-img.png"
          alt=""
          className="h-20 w-20 object-contain"
        />

        <h1 className="text-3xl font-bold text-textDark mt-6 text-center">
          Welcome to Nector
        </h1>

        <p className="text-textGray text-center mt-2 max-w-xs">
          Get your groceries in as fast as an hour
        </p>

        <div className="mt-10 w-full">
          <Button
            label="Get Started"
            variant="primary"
            onClick={() => router.push("/signup")}
          />
        </div>

        <p className="text-sm text-center mt-4 text-textGray">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
