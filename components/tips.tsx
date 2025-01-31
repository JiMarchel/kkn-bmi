import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const Tips = () => {
  return (
    <div className="hidden md:grid md:grid-cols-5 md:col-span-5 h-fit z-50 gap-3">
      <Card className="col-span-5  ">
        <CardHeader>
          <CardTitle>🍼 Pencegahan Stunting pada Anak</CardTitle>
          <CardDescription>
            Stunting adalah kondisi gagal tumbuh akibat kekurangan gizi dalam
            jangka panjang, terutama pada 1.000 hari pertama kehidupan. Berikut
            cara mencegahnya:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <strong>✅ Pemenuhan Nutrisi Sejak dalam Kandungan 🍎🥚: </strong>
            Ibu hamil perlu mengonsumsi makanan kaya protein, zat besi, kalsium,
            dan asam folat. Makan ikan, telur, daging, sayuran hijau, serta susu
            ibu hamil. Hindari makanan instan dan tinggi gula karena bisa
            menghambat perkembangan janin.
          </div>
          <div>
            <strong>✅ ASI Eksklusif & MPASI Bergizi 🍼🥗: </strong>
            Berikan ASI eksklusif selama 6 bulan pertama. Saat mulai MPASI,
            pastikan ada protein hewani (telur, ikan, daging), karbohidrat, dan
            lemak sehat. Hindari makanan rendah gizi seperti bubur instan tanpa
            protein.
          </div>
          <div>
            <strong>✅ Rutin Imunisasi & Cek Kesehatan 💉📏: </strong>
            Pastikan anak mendapatkan imunisasi lengkap dan rutin dipantau berat
            serta tinggi badannya di posyandu atau puskesmas.
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-5 ">
        <CardHeader>
          <CardTitle>⚖️ Menjaga Berat Badan agar Tetap Ideal</CardTitle>
          <CardDescription>
            Menjaga berat badan sehat bukan soal diet ketat, tapi keseimbangan
            pola hidup!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <strong>✅ Atur Pola Makan Seimbang 🥗🍚: </strong>
            Konsumsi protein tinggi seperti ayam, ikan, dan tahu. Pilih
            karbohidrat kompleks seperti nasi merah dan oatmeal. Kurangi gula
            tambahan dan minuman manis. Jangan lupa serat dari sayuran dan
            buah-buahan!
          </div>
          <div>
            <strong>✅ Hindari Kebiasaan Buruk 🚫🍔: </strong>
            Makan terlalu malam tanpa aktivitas bisa memperlambat metabolisme.
            Kurang tidur mengganggu hormon yang mengatur rasa lapar. Duduk
            terlalu lama juga memperlambat pembakaran kalori.
          </div>
          <div>
            <strong>✅ Terapkan Pola Hidup Aktif 🚶‍♀️🏃: </strong>
            Lebih banyak bergerak setiap hari! Naik tangga daripada lift,
            berjalan kaki setelah makan, dan jangan hanya fokus pada diet.
            Aktivitas fisik tetap penting!
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
