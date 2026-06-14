"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  function handleGoogle() {
    router.push("/otp");
  }

  function handleFacebook() {
    router.push("/otp");
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

      <div className="w-full h-[50vh] overflow-hidden relative lg:hidden">
        <img
          src="/assets/images/signuppage.jpg"
          alt=""
          className="w-full h-full object-cover object-top-right"
          style={{ transform: "rotate(-50deg) scale(1.5) scaleX(-1) scaleY(-1)" }}
        />
      </div>

      <div className="flex flex-col flex-1 lg:flex-none lg:w-1/2 px-6 pt-8 pb-10 lg:justify-center lg:overflow-y-auto">
        <h1 className="text-3xl font-bold text-textDark leading-tight mb-6">
          Get your groceries<br />with nectar
        </h1>

        <div className="flex items-center gap-3 border-b border-gray-200 py-3 mb-6">
          <span className="text-lg">🇮🇳</span>
          <span className="text-textDark text-sm">+91</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              var val = e.target.value.replace(/[^0-9]/g, "");
              setPhone(val);
            }}
            placeholder="Enter your number"
            className="flex-1 text-sm text-textDark focus:outline-none"
          />
        </div>

        <button
          onClick={() => router.push("/otp")}
          className="w-full bg-primary text-white rounded-2xl py-4 flex items-center justify-center font-semibold mb-6 cursor-pointer"
        >
          Continue with Phone
        </button>

        <p className="text-xs text-textGray text-center mb-6">
          Or connect with social media
        </p>

        <button
          onClick={handleGoogle}
          className="w-full bg-blue-500 text-white rounded-2xl py-4 flex items-center justify-center gap-3 mb-4 cursor-pointer"
        >
          <span className="w-6 h-6 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold text-sm">G</span>
          <span className="font-semibold">Continue with Google</span>
        </button>

        <button
          onClick={handleFacebook}
          className="w-full bg-blue-700 text-white rounded-2xl py-4 flex items-center justify-center gap-3 cursor-pointer"
        >
          <span className="w-6 h-6 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold text-sm">f</span>
          <span className="font-semibold">Continue with Facebook</span>
        </button>

        <p className="text-sm text-center mt-6 text-textGray">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
