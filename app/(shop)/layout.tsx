"use client";

import BottomNav from "@/components/BottomNav";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="pb-24">{children}</div>
      <BottomNav />
    </div>
  );
}
