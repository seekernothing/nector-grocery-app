"use client";

import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import type { Product, CartItem } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  var cart = useCartStore((s) => s.cart);
  var addToCart = useCartStore((s) => s.addToCart);
  var updateQuantity = useCartStore((s) => s.updateQuantity);

  var cartItem = cart.find((item) => item.id === product.id);

  var handleAdd = () => {
    var item: CartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      weight: product.weight,
      quantity: 1,
    };
    addToCart(item);
  };

  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-24 w-full object-contain mb-2"
        />

        <p className="text-sm font-semibold text-textDark truncate">
          {product.name}
        </p>
        <p className="text-xs text-textGray">{product.weight}</p>
      </Link>

      <div className="flex items-center justify-between mt-2">
        <span className="font-bold text-textDark">${product.price}</span>

        {cartItem ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                var item = cart.find((i) => i.id === product.id);
                if (!item) return;
                if (item.quantity > 1) {
                  updateQuantity(product.id, item.quantity - 1);
                } else {
                  useCartStore.getState().removeFromCart(product.id);
                }
              }}
              className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer"
            >
              <Minus size={14} />
            </button>

            <span className="text-sm font-semibold text-textDark">
              {cartItem.quantity}
            </span>

            <button
              onClick={() => {
                var item = cart.find((i) => i.id === product.id);
                if (!item) return;
                updateQuantity(product.id, item.quantity + 1);
              }}
              className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer"
            >
              <Plus size={14} />
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="text-sm text-primary font-semibold cursor-pointer"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
