'use server';

import { z } from 'zod';
import { signIn } from '@/app/dashboard/(auth)/auth';

const authFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export interface SigninActionState {
  status: 'idle' | 'in_progress' | 'success' | 'failed' | 'invalid_data';
}

export const signin = async (
  _: SigninActionState,
  formData: FormData,
): Promise<SigninActionState> => {
  try {
    const validatedFields = authFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', {
      email: validatedFields.email,
      password: validatedFields.password,
      redirect: false,
    });

    return { status: 'success' };
  } catch (error) {
    if(error instanceof z.ZodError) {
      return { status: 'invalid_data' };
    }

    return { status: 'failed' };
  }
};