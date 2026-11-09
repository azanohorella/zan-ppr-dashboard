
export default function Loading() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl animate-pulse">
      <div className="mb-6 space-y-2">
        <div className="h-6 w-48 rounded-lg bg-white/10" />
        <div className="h-3 w-64 rounded-lg bg-white/10" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Skeleton Card 1 */}
        <div className="min-h-[130px] rounded-xl border border-white/5 bg-white/5 p-4">
          <div className="h-4 w-16 rounded bg-cyan-400/20" />
          <div className="mt-5 h-8 w-24 rounded-lg bg-cyan-400/20" />
          <div className="mt-3 h-3 w-20 rounded bg-white/10" />
        </div>

        {/* Skeleton Card 2 */}
        <div className="min-h-[130px] rounded-xl border border-white/5 bg-white/5 p-4">
          <div className="h-4 w-24 rounded bg-blue-400/20" />
          <div className="mt-5 h-8 w-20 rounded-lg bg-blue-400/20" />
          <div className="mt-3 h-3 w-16 rounded bg-white/10" />
        </div>

        {/* Skeleton Card 3 */}
        <div className="min-h-[130px] rounded-xl border border-white/5 bg-white/5 p-4">
          <div className="h-4 w-28 rounded bg-green-400/20" />
          <div className="mt-5 h-8 w-24 rounded-lg bg-green-400/20" />
          <div className="mt-3 h-3 w-20 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}
