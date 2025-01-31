import Bmi from "@/components/bmi";
import Summary from "@/components/summary";
import { Tips } from "@/components/tips";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <BackgroundLines className="grid grid-cols-12 p-4 gap-5">
      <Summary />
      <Bmi />
      <Tips />
    </BackgroundLines>
  );
}
