
export default function DeviceLoading() {
  return (
    <div className="rounded-2xl border border-purple-400/20 bg-white/5 p-6">
      <div className="flex items-center gap-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-purple-400 border-t-transparent" />

        <p className="text-sm text-purple-300">
          Memeriksa status perangkat...
        </p>
      </div>
    </div>
  );
}
