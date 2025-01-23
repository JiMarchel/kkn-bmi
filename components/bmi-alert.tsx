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
}

export default function BmiAlert({
  setIsDialogOpen,
  isDialogOpen,
  bmi,
  category,
}: BmiAlertInterface) {
  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogContent className="motion-preset-confetti ">
        <AlertDialogHeader>
          <AlertDialogTitle>Perhitungan BMI Berhasil!</AlertDialogTitle>
          <AlertDialogDescription>
            Hasil BMI kamu adalah: <strong>{bmi}</strong>
            dengan kategori <strong>{category}</strong>.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={setIsDialogOpen}>Tutup</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
