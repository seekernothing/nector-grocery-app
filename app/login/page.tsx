"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";
import { useAuthStore } from "@/store/authStore";

export default function Login() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function validateEmail(value: string) {
    if (!value) {
      return "Email is required";
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      return "Please enter a valid email";
    }
    return "";
  }

  function validatePassword(value: string) {
    if (!value) {
      return "Password is required";
    }
    return "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    var emailError = validateEmail(email);
    var passwordError = validatePassword(password);

    setErrors({ email: emailError, password: passwordError });

    if (emailError || passwordError) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      login();
      router.push("/home");
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="min-h-screen lg:h-screen flex flex-col lg:flex-row lg:max-w-7xl lg:mx-auto lg:overflow-hidden">
      <div className="hidden lg:block lg:w-1/2 lg:h-full overflow-hidden">
        <img
          src="/assets/images/signuppage.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 lg:flex-none lg:w-1/2 flex flex-col lg:justify-center lg:overflow-y-auto px-6 pt-16 pb-10 relative">
        <img
          src="/assets/images/background-blur.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0 lg:hidden"
        />

        <div className="flex justify-center mb-10 z-10 lg:hidden">
          <img
            src="/assets/images/carrot.png"
            alt="Carrot"
            className="w-12 h-12 object-contain"
          />
        </div>

        <h1 className="text-[26px] font-semibold text-textDark mb-2 z-10">Loging</h1>
        <p className="text-textGray text-sm mb-14 z-10">Enter your emails and password</p>

        <form onSubmit={handleSubmit} className="flex flex-col z-10">
          <div className="flex flex-col gap-2 mb-10">
            <label className="text-sm text-textGray">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-200 py-2 text-base text-textDark focus:outline-none focus:border-primary bg-transparent"
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-2 mb-2">
            <label className="text-sm text-textGray">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-200 py-2 text-base text-textDark focus:outline-none focus:border-primary bg-transparent pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-textGray cursor-pointer"
              >
                <EyeOff size={18} />
              </button>
            </div>
            {errors.password && (
              <span className="text-sm text-red-500">{errors.password}</span>
            )}
          </div>

          <div className="flex justify-end mb-6">
            <span className="text-sm text-textGray">Forgot Password?</span>
          </div>

          <Button
            label="Log In"
            type="submit"
            variant="primary"
            loading={loading}
            onClick={() => {}}
          />
        </form>

        <p className="text-sm text-center mt-6 text-textDark z-10">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary">
            Singup
          </Link>
        </p>
      </div>
    </div>
  );
}
