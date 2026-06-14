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
    <div className="px-5 py-4 max-w-7xl mx-auto">
      <h1 className="text-xl font-bold text-textDark text-center mb-2">
        Favourite
      </h1>
      <div className="border-t border-gray-100 mt-2 mb-4" />

      {favoriteProducts.length === 0 ? (
        <div className="mt-32 flex flex-col items-center gap-4 text-center">
          <Heart size={56} className="text-gray-200" strokeWidth={1.5} />
          <p className="text-lg font-semibold text-textDark">No favourites yet</p>
          <p className="text-sm text-textGray">Tap the heart on any product to save it here</p>
          <div className="max-w-xs w-full">
            <Link href="/explore">
              <Button label="Browse Products" variant="secondary" onClick={() => {}} />
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            {favoriteProducts.map(function (product) {
              return (
                <div
                  key={product.id}
                  className="py-4 flex items-center gap-4 border-b border-gray-100 lg:border lg:border-gray-100 lg:rounded-2xl lg:p-4"
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
          </div>

          <div className="hidden lg:block lg:mt-6 lg:max-w-xs lg:mx-auto">
            <Button
              label="Add All To Cart"
              variant="primary"
              onClick={handleAddAllToCart}
            />
          </div>
        </>
      )}

      {favoriteProducts.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 z-40 lg:hidden">
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
