"use client";
import { useActionState, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { bmiAction } from "@/action/bmi";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import BmiAlert from "./bmi-alert";
import { Loader2, PartyPopper, Rocket } from "lucide-react";
import { DialogHelp } from "./dialog-help";
import { colorCategory } from "@/lib/utils";
import { WordsCategory } from "@/lib/tsx-utils";
import Image from "next/image";

export default function Bmi() {
  const [data, formAction, isPending] = useActionState(bmiAction, undefined);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (data?.success) {
      setResult(true);
    }
  }, [data]);

  if (result) {
    return (
      <div className="grid h-fit col-span-12 md:col-span-4 z-50 gap-3">
        <Card className="motion-preset-blur-right ">
          <CardHeader>
            <CardTitle className="flex items-center justify-between md:block ">
              <div className="flex items-center gap-1 text-xl md:text-2xl ">
                <PartyPopper /> Hasil Penhitungan Berat Badan <PartyPopper />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Tinggi (cm) {data?.success?.cm} - Berat (kg) {data?.success?.kg}
            </p>
            <h1
              className={`text-xl md:text-2xl ${colorCategory(data?.success?.category)} font-bold mb-5`}
            >
              Berat Badan Anda {data?.success?.category} - {data?.success?.bmi}{" "}
              BMI
            </h1>
            <WordsCategory category={data?.success?.category} />
            <Button
              className="w-full block mt-5"
              onClick={() => setResult(false)}
            >
              Hitung Ulang
            </Button>
          </CardContent>
        </Card>
        <Card className="motion-preset-blur-right">
          <CardHeader>
            <CardTitle className="flex items-center justify-between md:block">
              💡 Tips Kesehatan & Kebiasaan Baik
            </CardTitle>
            <CardDescription>
              Jaga kesehatan dengan kebiasaan sederhana setiap hari.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Minumlah air putih 💧 minimal 8 gelas sehari agar tubuh tetap
              terhidrasi dengan baik. Konsumsilah makanan sehat seperti sayuran
              🥦 dan buah 🍓 setiap hari untuk memenuhi kebutuhan nutrisi tubuh.
              Jangan lupa untuk berolahraga secara rutin, seperti jogging atau
              bersepeda 🚴‍♂️ selama minimal 30 menit per hari guna menjaga
              kebugaran fisik. Pastikan juga Anda mendapatkan tidur yang cukup
              😴 sekitar 7-9 jam per malam untuk meningkatkan sistem imun dan
              energi harian Anda.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <Card className="col-span-12 z-50 md:col-span-4 h-fit motion-preset-slide-right ">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between md:block ">
                <p>Form Penghitung Berat Badan</p>
                <DialogHelp />
              </div>
              <Image
                alt="Logo"
                src="/logo.jpg"
                width={1000}
                height={1000}
                priority
                className="md:hidden w-full h-full motion-preset-pop rounded"
              />
            </div>
          </CardTitle>
          <CardDescription>
            Body Mass Index (BMI) adalah cara menghitung berat badan ideal
            berdasarkan tinggi dan berat badan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" action={formAction}>
            <input
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value as "male" | "female")}
              className="hidden"
            />
            <div>
              <Label>
                Pilih jenis kelamin anda<span className="text-red-600">*</span>
              </Label>
              <div className="flex justify-center gap-5 ">
                <div
                  className={`flex flex-col items-center gap-3 ${gender !== "male" && "opacity-40"} cursor-pointer`}
                  onClick={() => setGender("male")}
                >
                  <Avatar>
                    <AvatarImage src="/male.png" alt="male" />
                    <AvatarFallback>L</AvatarFallback>
                  </Avatar>
                  <Label>Laki-Laki</Label>
                </div>
                <div
                  className={`flex flex-col items-center gap-3 ${gender !== "female" && "opacity-40"} cursor-pointer`}
                  onClick={() => setGender("female")}
                >
                  <Avatar>
                    <AvatarImage src="/woman.png" alt="woman" />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  <Label>Perempuan</Label>
                </div>
              </div>
            </div>
            <div>
              <Label>
                Tinggi Badan (cm)<span className="text-red-600">*</span>
              </Label>
              <Input type="number" name="cm" placeholder="tinggi badan kamu" />
              <p className="text-red-700">{data?.errors?.cm}</p>
            </div>
            <div>
              <Label>
                Berat Badan (kg)<span className="text-red-600">*</span>
              </Label>
              <Input type="number" name="kg" placeholder="berat badan kamu" />
              <p className="text-red-700">{data?.errors?.kg}</p>
            </div>
            <Button type="submit" className="w-full " disabled={isPending}>
              Submit {isPending ? <Loader2 /> : <Rocket />}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }
}
