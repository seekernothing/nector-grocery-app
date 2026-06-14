"use client";

import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { useCartStore } from "@/store/cartStore";

function DesktopHeader() {
  var cartItems = useCartStore((s) => s.cart);
  var cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6 w-full">
        <div className="flex items-center">
          <img src="/assets/images/carrot-img.png" alt="nectar" className="h-8" />
          <span className="font-bold text-textDark text-xl ml-2">nectar</span>
        </div>

        <Link
          href="/search"
          className="flex-1 max-w-md rounded-full bg-gray-100 px-4 py-2 flex items-center gap-2"
        >
          <Search size={18} className="text-gray-400" />
          <span className="text-textGray text-sm">Search Store</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/favorites">
            <Heart size={22} className="text-textDark" />
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingCart size={22} className="text-textDark" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-white text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <User size={16} className="text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DesktopHeader />
      <div className="pb-24 lg:pb-0 lg:pt-16">{children}</div>
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
