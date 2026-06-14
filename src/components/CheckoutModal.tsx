"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useCartStore } from "@/store/cartStore";
import OrderFailedModal from "@/components/OrderFailedModal";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  total,
}: CheckoutModalProps) {
  var router = useRouter();
  var clearCart = useCartStore((s) => s.clearCart);

  var [loading, setLoading] = useState(false);
  var [showFailed, setShowFailed] = useState(false);

  if (!isOpen) {
    return null;
  }

  function handlePlaceOrder() {
    setLoading(true);

    setTimeout(function () {
      var isSuccess = Math.random() > 0.3;
      setLoading(false);

      if (isSuccess) {
        clearCart();
        onClose();
        router.push("/order-success");
      } else {
        setShowFailed(true);
      }
    }, 1500);
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-end"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-t-3xl w-full p-6 z-50 max-h-screen overflow-y-auto transition-transform duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-textDark flex-1">
              Checkout
            </h2>
            <button onClick={onClose} className="cursor-pointer">
              <X size={20} className="text-textDark" />
            </button>
          </div>
          <div className="border-t border-gray-100 mt-4" />

          <div className="flex justify-between items-center py-4 border-b border-gray-100">
            <span className="text-textGray">Delivery</span>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-textDark">
                Select Method
              </span>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          </div>

          <div className="flex justify-between items-center py-4 border-b border-gray-100">
            <span className="text-textGray">Payment</span>
            <div className="flex items-center gap-1">
              <div className="inline-flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full" />
                <div className="w-4 h-4 bg-yellow-400 rounded-full -ml-2" />
              </div>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          </div>

          <div className="flex justify-between items-center py-4 border-b border-gray-100">
            <span className="text-textGray">Promo Code</span>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-textDark">
                Pick discount
              </span>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          </div>

          <div className="flex justify-between items-center py-4 border-b border-gray-100">
            <span className="text-textGray">Total Cost</span>
            <div className="flex items-center gap-1">
              <span className="font-bold text-textDark">
                ${total.toFixed(2)}
              </span>
              <ChevronRight size={18} className="text-gray-400" />
            </div>
          </div>

          <p className="mt-4 text-xs text-textGray text-center">
            By placing an order you agree to our{" "}
            <strong className="text-textDark">Terms</strong> And{" "}
            <strong className="text-textDark">Conditions</strong>
          </p>

          <div className="mt-4">
            <Button
              label="Place Order"
              variant="primary"
              loading={loading}
              onClick={handlePlaceOrder}
            />
          </div>
        </div>
      </div>

      <OrderFailedModal
        isOpen={showFailed}
        onClose={() => setShowFailed(false)}
        onRetry={() => {
          setShowFailed(false);
          setLoading(false);
        }}
      />
    </>
  );
}
