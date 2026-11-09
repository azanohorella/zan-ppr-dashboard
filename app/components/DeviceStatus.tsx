
import { connection } from "next/server";

export default async function DeviceStatus() {
  await connection();

  const waktuRequest = new Date().toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "medium",
    timeZone: "Asia/Jakarta",
  });

  return (
    <div className="rounded-2xl border border-purple-400/20 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="text-lg font-semibold text-white">
        Status Perangkat
      </h3>

      <div className="mt-5 flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-green-400" />

        <div>
          <p className="font-medium text-green-400">
            Perangkat Online
          </p>
          <p className="text-sm text-gray-400">
            Sistem berhasil terhubung
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-white/5 p-4">
        <p className="text-sm text-gray-400">
          Waktu Request
        </p>

        <p className="mt-2 text-sm font-medium text-purple-300">
          {waktuRequest}
        </p>
      </div>
    </div>
  );
}
