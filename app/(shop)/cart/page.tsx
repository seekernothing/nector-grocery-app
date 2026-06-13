"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, X, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import CheckoutModal from "@/components/CheckoutModal";

export default function Cart() {
  var cart = useCartStore((s) => s.cart);
  var removeFromCart = useCartStore((s) => s.removeFromCart);
  var updateQuantity = useCartStore((s) => s.updateQuantity);

  var [showCheckout, setShowCheckout] = useState(false);

  var total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="px-5 py-4">
      <h1 className="text-xl font-bold text-textDark text-center mb-2">
        My Cart
      </h1>
      <div className="border-t border-gray-100 mt-2 mb-4" />

      {cart.length === 0 ? (
        <div className="mt-20 flex flex-col items-center gap-3">
          <ShoppingCart size={48} className="text-gray-300" />
          <p className="text-textGray">Your cart is empty</p>
          <Link href="/home" className="text-primary font-semibold">
            Start shopping
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 py-4 border-t border-gray-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 object-contain rounded-xl bg-gray-50"
              />

              <div className="flex-1 flex flex-col gap-1">
                <p className="font-semibold text-textDark text-sm">
                  {item.name}
                </p>
                <p className="text-textGray text-xs">
                  {item.weight}, Price
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        updateQuantity(item.id, item.quantity - 1);
                      } else {
                        removeFromCart(item.id);
                      }
                    }}
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
                  >
                    <Minus size={14} className="text-textGray" />
                  </button>

                  <span className="text-base font-semibold text-textDark min-w-[20px] text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => {
                      updateQuantity(item.id, item.quantity + 1);
                    }}
                    className="w-9 h-9 rounded-full border border-primary flex items-center justify-center cursor-pointer"
                  >
                    <Plus size={14} className="text-primary" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer"
                >
                  <X size={18} className="text-gray-400" />
                </button>
                <span className="font-bold text-textDark">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-40">
        <button
          onClick={() => {
            if (cart.length > 0) {
              setShowCheckout(true);
            }
          }}
          disabled={cart.length === 0}
          className="w-full bg-primary rounded-2xl py-4 text-white font-semibold flex justify-between items-center px-6 cursor-pointer disabled:opacity-50"
        >
          <span>Go to Checkout</span>
          <span className="bg-white/20 rounded-full px-3 py-1 text-white text-sm font-semibold">
            ${total.toFixed(2)}
          </span>
        </button>
      </div>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        total={total}
      />
    </div>
  );
}
