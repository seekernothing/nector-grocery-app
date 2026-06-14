"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  ChevronLeft,
  Share2,
  Heart,
  Minus,
  Plus,
  ChevronDown,
  ChevronRight,
  Star,
} from "lucide-react";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useFavoritesStore } from "@/store/favoritesStore";
import Button from "@/components/ui/Button";

export default function ProductDetail() {
  var router = useRouter();
  var params = useParams();
  var id = params.id as string;

  var cart = useCartStore((s) => s.cart);
  var addToCart = useCartStore((s) => s.addToCart);
  var updateQuantity = useCartStore((s) => s.updateQuantity);
  var removeFromCart = useCartStore((s) => s.removeFromCart);
  var favorites = useFavoritesStore((s) => s.favorites);
  var toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  var [quantity, setQuantity] = useState(1);

  var foundProduct = products.find((p) => p.id === id);

  if (!foundProduct) {
    return (
      <div className="px-5 py-4">
        <p className="text-textGray text-center mt-10">Product not found</p>
      </div>
    );
  }

  var product = foundProduct;

  var cartItem = cart.find((i) => i.id === product.id);

  var displayQuantity = cartItem ? cartItem.quantity : quantity;

  var isFav = favorites.includes(product.id);
  var totalPrice = (product.price * displayQuantity).toFixed(2);

  function handleMinus() {
    if (cartItem) {
      if (cartItem.quantity > 1) {
        updateQuantity(product.id, cartItem.quantity - 1);
      } else {
        removeFromCart(product.id);
      }
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  }

  function handlePlus() {
    if (cartItem) {
      updateQuantity(product.id, cartItem.quantity + 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  function handleAddToBasket() {
    if (!cartItem) {
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        weight: product.weight,
        quantity: quantity,
      });
    }
    router.push("/cart");
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="px-5 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => router.back()} className="cursor-pointer">
            <ChevronLeft size={24} className="text-textDark" />
          </button>
          <Share2 size={20} className="text-textDark" />
        </div>
      </div>

      <div className="lg:flex lg:gap-16 lg:items-start lg:px-12 lg:py-10">
        <div className="lg:w-1/2 px-5 lg:px-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-contain mt-2 lg:h-96"
          />
          <div className="mt-2 flex justify-center gap-1">
            <div className="w-6 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>

        <div className="lg:w-1/2 px-5 lg:px-0">
          <div className="mt-4 flex justify-between items-start">
            <h1 className="text-2xl font-bold text-textDark flex-1">
              {product.name}
            </h1>
            <button
              onClick={() => toggleFavorite(product.id)}
              className="cursor-pointer ml-2"
            >
              <Heart
                size={24}
                className={
                  isFav ? "fill-primary text-primary" : "text-textGray"
                }
              />
            </button>
          </div>

          <p className="text-textGray">{product.weight}</p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleMinus}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer"
              >
                <Minus size={16} className="text-textGray" />
              </button>

              <span className="text-lg font-semibold text-textDark">
                {displayQuantity}
              </span>

              <button
                onClick={handlePlus}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer"
              >
                <Plus size={16} className="text-primary" />
              </button>
            </div>

            <span className="text-2xl font-bold text-textDark">
              ${totalPrice}
            </span>
          </div>

          <div className="border-t border-gray-100 my-4" />

          <div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-textDark">Product Detail</span>
              <ChevronDown size={18} className="text-textDark" />
            </div>
            <p className="text-textGray text-sm leading-relaxed mt-2">
              {product.description}
            </p>
          </div>

          <div className="border-t border-gray-100 my-4" />

          <div className="flex items-center justify-between">
            <span className="font-bold text-textDark">Nutritions</span>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-gray-100 text-textGray px-2 py-1 rounded">
                100gr
              </span>
              <ChevronRight size={18} className="text-textDark" />
            </div>
          </div>

          <div className="border-t border-gray-100 my-4" />

          <div className="flex items-center justify-between lg:mb-0">
            <span className="font-bold text-textDark">Review</span>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                <Star size={14} className="text-orange-400 fill-orange-400" />
                <Star size={14} className="text-orange-400 fill-orange-400" />
                <Star size={14} className="text-orange-400 fill-orange-400" />
                <Star size={14} className="text-orange-400 fill-orange-400" />
                <Star size={14} className="text-orange-400 fill-orange-400" />
              </div>
              <ChevronRight size={18} className="text-textDark" />
            </div>
          </div>

          <div className="hidden lg:block lg:mt-8 lg:w-full">
            <Button
              label="Add To Basket"
              variant="primary"
              onClick={handleAddToBasket}
            />
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 z-40 lg:hidden">
          <Button
            label="Add To Basket"
            variant="primary"
            onClick={handleAddToBasket}
          />
        </div>
      </div>
    </div>
  );
}
