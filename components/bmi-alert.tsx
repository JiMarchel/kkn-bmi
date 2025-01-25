import { CircleX, PartyPopper } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface BmiAlertInterface {
  isDialogOpen: boolean;
  setIsDialogOpen: () => void;
  bmi: number | undefined;
  category: string | undefined;
  cm: number | undefined;
  kg: number | undefined;
}

export default function BmiAlert({
  setIsDialogOpen,
  isDialogOpen,
  bmi,
  cm,
  kg,
  category,
}: BmiAlertInterface) {
  const colorCategory = (category: string | undefined) => {
    switch (category) {
      case "Rendah":
        return "text-red-400";
      case "Ideal":
        return "text-green-600";
      case "Berlebih":
        return "text-yellow-400";
      default:
        return "text-red-400";
    }
  };

  const wordsCategory = (category: string | undefined) => {
    switch (category) {
      case "Rendah":
        return "Berat badan Anda berada di bawah normal. Pastikan Anda mendapatkan asupan nutrisi yang cukup dan konsultasikan dengan ahli gizi untuk mencapai berat badan ideal. Jangan khawatir! Dengan pola makan sehat dan olahraga teratur, Anda bisa mencapai berat badan yang lebih baik. Cobalah untuk meningkatkan asupan kalori dengan makanan bergizi tinggi seperti protein, lemak sehat, dan karbohidrat kompleks. Selain itu, perbanyak konsumsi makanan kaya nutrisi seperti daging tanpa lemak, kacang-kacangan, dan sayuran berkalori tinggi untuk membantu menambah berat badan secara sehat.";
      case "Ideal":
        return "Selamat! Berat badan Anda berada dalam kategori ideal. Pertahankan pola makan sehat dan gaya hidup aktif untuk menjaga kesehatan Anda. Anda dalam kondisi yang baik, dan dengan menjaga kebiasaan yang sudah baik, Anda dapat tetap bugar dan berenergi setiap hari. Pastikan untuk menjaga pola makan seimbang dengan mengonsumsi makanan bergizi serta tetap aktif dengan olahraga rutin seperti jogging atau bersepeda. Hindari pola makan yang berlebihan dan tetap fokus pada gaya hidup sehat agar berat badan tetap stabil.";
      case "Berlebih":
        return "Berat badan Anda sedikit berlebih. Cobalah untuk mengatur pola makan dan tingkatkan aktivitas fisik untuk mencapai berat badan ideal. Tetap semangat! Dengan sedikit perubahan gaya hidup, Anda bisa mencapai berat badan yang lebih sehat. Kurangi konsumsi makanan tinggi gula dan lemak, serta perbanyak aktivitas fisik seperti berjalan kaki atau berenang. Fokus pada pola makan sehat dan aktif bergerak setiap hari untuk mencegah risiko penyakit terkait obesitas, seperti diabetes dan tekanan darah tinggi.";
      default:
        return "Berat badan Anda berada dalam kategori obesitas. Mulailah perubahan kecil menuju hidup yang lebih sehat untuk mencegah risiko kesehatan yang lebih serius. Jangan berkecil hati! Dengan dukungan dan komitmen, Anda bisa mencapai berat badan yang lebih sehat. Pertimbangkan untuk berkonsultasi dengan ahli gizi atau dokter untuk menyusun rencana penurunan berat badan yang sehat dan berkelanjutan. Fokus pada pola makan rendah kalori dan perbanyak aktivitas fisik secara bertahap untuk mendapatkan hasil yang lebih baik dan mencegah komplikasi kesehatan di masa depan.";
    }
  };
  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogContent className="motion-preset-confetti ">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl flex items-center gap-2">
            <PartyPopper />
            Hasil Perhitungan
            <PartyPopper />
          </AlertDialogTitle>
          <AlertDialogDescription className="grid gap-2">
            <span>
              Tinggi (cm) {cm} - Berat (kg) {kg}
            </span>
            <span className={`text-xl ${colorCategory(category)} font-bold`}>
              Berat {category} - {bmi} BMI
            </span>
            {wordsCategory(category)}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={setIsDialogOpen}>
            Tutup <CircleX />
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
