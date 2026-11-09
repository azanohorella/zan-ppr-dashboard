
import { connection } from "next/server";

async function getSensorData() {
  // Menunggu request masuk sebelum membuat data dinamis
  await connection();

  // Nilai sensor dibuat saat request berlangsung
  const suhu = Number((20 + Math.random() * 10).toFixed(2));

  return {
    suhu,
    kelembapan: 75,
    kualitasUdara: "Baik",
    status: "Online",
  };
}

export default async function SensorData() {
  const data = await getSensorData();

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white">
        Data Sensor Real-Time
      </h3>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm text-gray-400">Suhu</p>
          <h4 className="mt-2 text-2xl font-bold text-cyan-400">
            {data.suhu}°C
          </h4>
        </div>

        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm text-gray-400">Kelembapan</p>
          <h4 className="mt-2 text-2xl font-bold text-blue-400">
            {data.kelembapan}%
          </h4>
        </div>

        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm text-gray-400">Kualitas Udara</p>
          <h4 className="mt-2 text-2xl font-bold text-green-400">
            {data.kualitasUdara}
          </h4>
        </div>

        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm text-gray-400">Status Sensor</p>
          <h4 className="mt-2 text-2xl font-bold text-green-400">
            {data.status}
          </h4>
        </div>
      </div>
    </div>
  );
}
