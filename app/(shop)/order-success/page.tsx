"use client";

import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

export default function OrderSuccess() {
  var router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12 bg-gradient-to-br from-pink-50 via-white to-green-50">
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute top-4 left-1/2 w-4 h-4 rounded-full bg-primary" />
          <div className="absolute top-6 left-2/3 w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="absolute top-1/3 right-2 w-5 h-5 rounded-full border-2 border-blue-400" />
          <div className="absolute bottom-1/3 left-3 w-4 h-4 rounded-full border-2 border-purple-300" />
          <div className="absolute bottom-8 left-1/3 w-5 h-5 rounded-full border-2 border-primary" />
          <div className="absolute bottom-4 right-1/3 w-5 h-5 rounded-full bg-blue-500" />
          <div className="absolute top-1/2 right-0 w-8 h-8 rounded-full border-b-4 border-orange-400 rotate-45" />
          <div className="absolute left-0 top-1/2 w-10 h-10 rounded-full border-l-4 border-blue-400 border-b-4" />
          <div className="absolute top-4 right-8 w-8 h-8 rounded-full border-r-4 border-t-4 border-red-400 rotate-12" />

          <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center">
            <div className="w-28 h-28 rounded-full border-4 border-white/50 flex items-center justify-center">
              <Check size={48} className="text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-textDark text-center max-w-xs">
          Your Order has been accepted
        </h1>
        <p className="text-textGray text-sm text-center max-w-xs">
          Your items has been placed and is on its way to being processed
        </p>
      </div>

      <div className="w-full flex flex-col gap-4">
        <Button
          label="Track Order"
          variant="primary"
          onClick={() => router.push("/home")}
        />
        <p
          className="text-center font-bold text-textDark cursor-pointer"
          onClick={() => router.push("/home")}
        >
          Back to home
        </p>
      </div>
    </div>
  );
}
