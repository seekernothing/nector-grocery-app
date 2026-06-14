import Skeleton from "@/components/ui/Skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-4 w-3/4 mt-3" />
      <Skeleton className="h-3 w-1/2 mt-2" />
      <div className="flex justify-between mt-3">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
}
