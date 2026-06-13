"use client";

import { Heart, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useFavoritesStore } from "@/store/favoritesStore";
import type { Product, CartItem } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const cart = useCartStore((s) => s.cart);
  const addToCart = useCartStore((s) => s.addToCart);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  const favorites = useFavoritesStore((s) => s.favorites);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  const cartItem = cart.find((item) => item.id === product.id);
  const isFav = favorites.includes(product.id);

  const handleAdd = () => {
    const item: CartItem = {
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
    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 relative">
      <button
        onClick={() => toggleFavorite(product.id)}
        className="absolute top-5 right-5 z-10 cursor-pointer"
      >
        <Heart
          size={18}
          className={isFav ? "fill-primary text-primary" : "text-textGray"}
        />
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="h-24 w-full object-contain mb-2"
      />

      <p className="text-sm font-semibold text-textDark truncate">
        {product.name}
      </p>
      <p className="text-xs text-textGray">{product.weight}</p>

      <div className="flex items-center justify-between mt-2">
        <span className="font-bold text-textDark">${product.price}</span>

        {cartItem ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                cartItem.quantity > 1
                  ? updateQuantity(product.id, cartItem.quantity - 1)
                  : useCartStore.getState().removeFromCart(product.id)
              }
              className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer"
            >
              <Minus size={14} />
            </button>

            <span className="text-sm font-semibold text-textDark">
              {cartItem.quantity}
            </span>

            <button
              onClick={() =>
                updateQuantity(product.id, cartItem.quantity + 1)
              }
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
