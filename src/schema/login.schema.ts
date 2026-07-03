import * as yup from "yup";

export const loginSchema = yup.object({
  userId: yup.string().required("User ID is required"),
  password: yup.string().required("Password is required"),
});

export type LoginFormData = yup.Asserts<typeof loginSchema>;
