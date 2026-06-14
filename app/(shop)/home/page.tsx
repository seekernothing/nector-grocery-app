"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { useLocationStore } from "@/store/locationStore";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function Home() {
  var location = useLocationStore((s) => s.location);

  var exclusiveProducts = products.filter((p) => p.isExclusiveOffer === true);
  var bestSellerProducts = products.filter((p) => p.isBestSeller === true);

  var [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="px-5 py-4 max-w-7xl mx-auto">
      <div className="lg:hidden">
        <div className="flex justify-center">
          <img
            src="/assets/images/carrot-img.png"
            alt="Carrot"
            className="h-8"
          />
        </div>
        <div className="mt-2 flex items-center justify-center gap-1">
          <MapPin size={16} className="text-primary" />
          <span className="text-sm font-semibold text-textDark">
            {location ? location : "FC Road Pune"}
          </span>
        </div>
      </div>

      <Link
        href="/search"
        className="mt-4 rounded-full bg-gray-100 px-4 py-3 flex items-center gap-2 lg:hidden"
      >
        <Search size={18} className="text-gray-400" />
        <span className="text-textGray">Search Store</span>
      </Link>

      <div className="mt-4">
        <img
          src="/assets/images/banner.png"
          alt="Banner"
          className="w-full h-36 lg:h-56 object-cover rounded-2xl transition-opacity duration-300"
        />
        <div className="mt-2 flex justify-center gap-1">
          <div className="w-6 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-col">
        <div className="mt-6 lg:order-1">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-textDark">Shop by Category</h2>
            <Link href="/explore" className="text-primary text-sm font-semibold">See all</Link>
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`${category.color} w-28 h-28 flex-shrink-0 rounded-2xl flex flex-col items-center justify-center gap-2 p-2 text-center lg:w-auto lg:h-auto lg:aspect-square`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-12 w-12 object-contain lg:h-16 lg:w-16"
                />
                <span className="text-xs font-semibold text-textDark">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 lg:order-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-textDark">Exclusive Offer</h2>
            <span className="text-primary text-sm font-semibold">See all</span>
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-40 flex-shrink-0 lg:w-auto lg:flex-shrink">
                    <ProductCardSkeleton />
                  </div>
                ))
              : exclusiveProducts.map((product) => (
                  <div key={product.id} className="w-40 flex-shrink-0 lg:w-auto lg:flex-shrink">
                    <ProductCard product={product} />
                  </div>
                ))}
          </div>
        </div>

        <div className="mt-6 lg:order-3">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-textDark">Best Selling</h2>
            <span className="text-primary text-sm font-semibold">See all</span>
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-40 flex-shrink-0 lg:w-auto lg:flex-shrink">
                    <ProductCardSkeleton />
                  </div>
                ))
              : bestSellerProducts.map((product) => (
                  <div key={product.id} className="w-40 flex-shrink-0 lg:w-auto lg:flex-shrink">
                    <ProductCard product={product} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
