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

  const parsedData = validateBmiFormData.data;

  console.log(parsedData);
};
