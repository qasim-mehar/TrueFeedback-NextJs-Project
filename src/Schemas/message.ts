import { z } from "zod";

export const messageSchema = z
  .string()
  .min(10, "Message must be at least 10 characters")
  .max(300, "Message must not be more then 300 characters");
