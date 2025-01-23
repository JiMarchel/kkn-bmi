import { z } from "zod";

const gender = ["male", "female"] as const;

export const bmiSchema = z.object({
  cm: z
    .number()
    .min(100, "Tinggi kamu minimal harus 100cm dulu ya!")
    .max(400, "Maaf kamu terlalu tinggi untuk seorang manusia."),
  kg: z
    .number()
    .min(10, "Maaf minimal berat harus 10kg ya!")
    .max(700, "Kamu hulk ya? maaf ya ini hanya untuk manusia biasa!"),
  gender: z.enum(gender),
});
