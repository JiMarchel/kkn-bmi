import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Summary() {
  return (
    <Card className="col-span-4 xl:col-span-3 h-fit z-50">
      <CardHeader className="gap-5">
        <CardTitle>BMI Calculator - Sumbersuko</CardTitle>
        <CardDescription>
          <Image
            alt="Logo"
            src="/logo.jpg"
            width={100}
            height={100}
            priority
            className="w-full h-full motion-preset-pop motion-preset-seesaw rounded"
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
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
      </CardContent>
    </Card>
  );
}
