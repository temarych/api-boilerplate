import { z } from 'zod';

export const updateSelfSchema = z.object({
  email: z.string().email().optional(),
});

export type IUpdateSelfSchema = z.infer<typeof updateSelfSchema>;
