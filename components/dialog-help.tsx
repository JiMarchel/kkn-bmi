import { HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import Image from "next/image";

export const DialogHelp = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="md:hidden">
        <Button size="icon" variant="outline" className="border-none">
          <HelpCircle />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm sm:max-w-md">
        <DialogHeader>
          <DialogTitle>BMI Calculator - Sumbersuko</DialogTitle>
          <DialogDescription>
            <Image
              alt="Logo"
              src="/logo.jpg"
              width={1000}
              height={1000}
              priority
              className="w-full h-full motion-preset-pop rounded"
            />
          </DialogDescription>
        </DialogHeader>
        <div className="">
          Body Mass Index (BMI) Calculator adalah alat yang digunakan untuk
          mengukur rasio berat badan terhadap tinggi badan seseorang guna
          menentukan kategori berat badan mereka, seperti underweight (kurang
          berat), normal, overweight (kelebihan berat), atau obese (obesitas).
          BMI dihitung dengan membagi berat badan dalam kilogram dengan kuadrat
          tinggi badan dalam meter (kg/m²). Meskipun BMI dapat memberikan
          gambaran umum tentang status kesehatan, ia tidak memperhitungkan
          faktor seperti massa otot, distribusi lemak, dan tingkat kebugaran
          individu.
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
