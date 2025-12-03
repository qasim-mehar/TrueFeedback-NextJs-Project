import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be at least 2 characters")
  .max(20, "Username must not be more then 20 characters")
  .regex(/^[a-zA-Z0-9]*$/, "Special symbols are not acceptable in username");

export const signUpValidation = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email!" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character" }),
});
