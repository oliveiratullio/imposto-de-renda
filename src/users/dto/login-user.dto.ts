import { z } from 'zod';

export const LoginUserSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string(),
});

export type LoginUserDto = z.infer<typeof LoginUserSchema>;
