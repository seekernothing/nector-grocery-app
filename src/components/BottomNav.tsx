"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, ShoppingCart, Heart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

const navItems = [
  { href: "/home", label: "Home", Icon: Home },
  { href: "/explore", label: "Explore", Icon: LayoutGrid },
  { href: "/cart", label: "Cart", Icon: ShoppingCart },
  { href: "/favorites", label: "Favorites", Icon: Heart },
];

export default function BottomNav() {
  const pathname = usePathname();
  const cartQuantity = useCartStore((s) =>
    s.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-3 z-30">
      {navItems.map(({ href, label, Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 relative"
          >
            <Icon
              size={20}
              className={isActive ? "text-primary" : "text-gray-400"}
            />

            {label === "Cart" && cartQuantity > 0 && (
              <span className="absolute -top-2 -right-3 bg-primary text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {cartQuantity}
              </span>
            )}

            <span
              className={`text-xs ${
                isActive ? "text-primary" : "text-gray-400"
              }`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
