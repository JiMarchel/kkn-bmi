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
import { wordsCategory } from "@/lib/utils";

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
