"use server";

import { bmiSchema } from "@/lib/schema";

export const bmiAction = async (_: unknown, formData: FormData) => {
  const bmiFormData = Object.fromEntries(formData);
  const validateBmiFormData = bmiSchema.safeParse(bmiFormData);

  if (!validateBmiFormData.success) {
    const formFieldErrors = validateBmiFormData.error.flatten().fieldErrors;
    console.log(validateBmiFormData.error);

    return {
      errors: {
        cm: formFieldErrors.cm,
        kg: formFieldErrors.kg,
        gender: formFieldErrors.gender,
      },
    };
  }

  const { gender, kg, cm } = validateBmiFormData.data;

  const calculateBMI = (
    weight: number,
    height: number,
  ): { bmi: number; category: string } => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let category = "";
    if (bmi < 18.5) {
      category = "Rendah";
    } else if (bmi < 24.9) {
      category = "Ideal";
    } else if (bmi < 29.9) {
      category = "Berlebih";
    } else {
      category = "Obesitas";
    }

    return { bmi: parseFloat(bmi.toFixed(2)), category };
  };

  const { bmi, category } = calculateBMI(kg, cm);

  return {
    success: {
      cm,
      kg,
      gender,
      bmi,
      category,
    },
  };
};
