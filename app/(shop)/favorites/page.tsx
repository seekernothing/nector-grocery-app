"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Heart, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useFavoritesStore } from "@/store/favoritesStore";
import { useCartStore } from "@/store/cartStore";
import Button from "@/components/ui/Button";

export default function Favorites() {
  var router = useRouter();
  var favorites = useFavoritesStore((s) => s.favorites);
  var addToCart = useCartStore((s) => s.addToCart);

  var favoriteProducts = products.filter(function (p) {
    return favorites.includes(p.id);
  });

  function handleAddAllToCart() {
    favoriteProducts.forEach(function (product) {
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        weight: product.weight,
        quantity: 1,
      });
    });
    router.push("/cart");
  }

  return (
    <div className="px-5 py-4">
      <h1 className="text-xl font-bold text-textDark text-center mb-2">
        Favourite
      </h1>
      <div className="border-t border-gray-100 mt-2 mb-4" />

      {favoriteProducts.length === 0 ? (
        <div className="mt-20 flex flex-col items-center gap-3">
          <Heart size={48} className="text-gray-300" />
          <p className="text-textGray text-sm">No favourites yet</p>
          <Link href="/explore" className="text-primary">
            Browse products
          </Link>
        </div>
      ) : (
        <>
          {favoriteProducts.map(function (product) {
            return (
              <div
                key={product.id}
                className="py-4 flex items-center gap-4 border-b border-gray-100"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 object-contain rounded-xl bg-gray-50 flex-shrink-0"
                />

                <div className="flex-1 flex flex-col gap-1">
                  <p className="font-semibold text-textDark text-sm">
                    {product.name}
                  </p>
                  <p className="text-xs text-textGray">
                    {product.weight}, Price
                  </p>
                </div>

                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => router.push("/product/" + product.id)}
                >
                  <span className="font-bold text-textDark text-sm">
                    ${product.price}
                  </span>
                  <ChevronRight size={18} className="text-gray-400" />
                </div>
              </div>
            );
          })}
        </>
      )}

      {favoriteProducts.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-40">
          <Button
            label="Add All To Cart"
            variant="primary"
            onClick={handleAddAllToCart}
          />
        </div>
      )}
    </div>
  );
}
