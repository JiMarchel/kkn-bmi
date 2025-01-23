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
import BmiAlert from "./bmi-alert";

export default function Bmi() {
  const [data, formAction, isPending] = useActionState(bmiAction, undefined);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (data?.success) {
      setIsDialogOpen(true);
    }
  }, [data]);

  return (
    <>
      <BmiAlert
        category={data?.success?.category}
        bmi={data?.success?.bmi}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={() => setIsDialogOpen(false)}
      />
      <Card className="z-50 col-span-4 h-fit">
        <CardHeader>
          <CardTitle>Form Penghitung Berat Badan</CardTitle>
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
                    <AvatarImage src="/male.png" />
                    <AvatarFallback>L</AvatarFallback>
                  </Avatar>
                  <Label>Laki-Laki</Label>
                </div>
                <div
                  className={`flex flex-col items-center gap-3 ${gender !== "female" && "opacity-40"} cursor-pointer`}
                  onClick={() => setGender("female")}
                >
                  <Avatar>
                    <AvatarImage src="/woman.png" />
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
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
