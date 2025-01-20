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

export default function Bmi() {
  return (
    <Card className="z-50 col-span-4 h-fit">
      <CardHeader>
        <CardTitle>Form Penghitung Berat Badan</CardTitle>
        <CardDescription>
          Body Mass Index (BMI) adalah cara menghitung berat badan ideal
          berdasarkan tinggi dan berat badan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5">
          <div>
            <Label>
              Tinggi Badan (cm)<span className="text-red-600">*</span>
            </Label>
            <Input type="number" name="cm" placeholder="tinggi badan kamu" />
          </div>
          <div>
            <Label>
              Berat Badan (kg)<span className="text-red-600">*</span>
            </Label>
            <Input type="number" name="kg" placeholder="berat badan kamu" />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
