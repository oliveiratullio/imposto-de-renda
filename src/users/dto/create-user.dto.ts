import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
