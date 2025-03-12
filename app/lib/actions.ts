'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

const FormSchema = z.object({
  tourism_id: z.string(),
  title: z.string(),
  author_id: z.string(),
  author_name: z.string(),
  published: z.string(),
  top_content: z.string(),
  mid_content: z.string(),
  bottom_content: z.string(),
  date: z.string(),
});

export type State = {
  errors?: {
    title?: string[];
    author_id?: string[];
    author_name?: string[];
    published?: string[];
    top_content?: string[];
    mid_content?: string[];
    bottom_content?: string[];
  };

  message?: string | null;
};

const CreateTourism = FormSchema.omit({ tourism_id: true, date: true });
const EditPost = FormSchema.omit({ tourism_id: true, date: true });

export async function createTourism(prevState: State, formData: FormData) {
  const validatedFields = CreateTourism.safeParse({
    title: formData.get('title'),
    author_id: formData.get('author_id'),
    author_name: formData.get('name'),
    published: formData.get('published'),
    top_content: formData.get('top_content'),
    mid_content: formData.get('mid_content'),
    bottom_content: formData.get('bottom_content'),
  });

  if(!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields. Failed to create data.',
    };
  }

  const { title, author_id, top_content, mid_content, bottom_content, author_name, published } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO "Tourism" (title, published, author_id, date, top_content, mid_content, bottom_content, top_img, mid_img, bottom_img)
      VALUES(${title}, false, ${author_id}, ${date}, ${top_content}, ${mid_content}, ${bottom_content}, 'city1.png', 'city1.png', 'city1.png');
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create data.');
  }

  revalidatePath('/', 'layout');
  redirect('/dashboard');
}

export async function deleteTourism(tourism_id: string) {
  try {
    await sql`
      DELETE FROM "Tourism" WHERE "tourism_id" = ${`${tourism_id}`};
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete data.');
  }

  revalidatePath('/', 'layout');
  redirect('/dashboard');
}
