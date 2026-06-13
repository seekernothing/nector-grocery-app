"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";

interface OrderFailedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}

export default function OrderFailedModal({
  isOpen,
  onClose,
  onRetry,
}: OrderFailedModalProps) {
  var router = useRouter();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-5"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-sm p-6 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="self-start mb-2 cursor-pointer">
          <X size={20} className="text-textDark" />
        </button>

        <div className="w-40 h-40 rounded-full bg-green-50 flex items-center justify-center mb-4">
          <img
            src="/assets/images/groceries-with-cucumber.png"
            alt="Groceries"
            className="h-28 w-28 object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold text-textDark text-center mt-2">
          Oops! Order Failed
        </h2>
        <p className="text-textGray text-sm text-center mt-2">
          Something went terribly wrong.
        </p>

        <div className="w-full mt-6">
          <Button
            label="Please Try Again"
            variant="primary"
            onClick={onRetry}
          />
        </div>

        <p
          className="text-center font-bold text-textDark mt-3 cursor-pointer"
          onClick={() => {
            router.push("/home");
            onClose();
          }}
        >
          Back to home
        </p>
      </div>
    </div>
  );
}
