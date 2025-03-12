'use server';

import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function getUser(email: string) {
  try {
    const data = await sql`
      SELECT * FROM "User"
      WHERE "email" = ${`${email}`};
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user data.');
  }
}

export async function fetchTourism() {
  try {
    const data = await sql`
      SELECT * FROM "Tourism" JOIN "User"
      ON "Tourism"."author_id" = "User"."id"
      WHERE "Tourism"."published" = 'TRUE'
      ORDER BY "date" DESC;
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch list data.');
  }
}

export async function fetchDashboardTourism() {
  try {
    const data = await sql`
      SELECT * FROM "Tourism" JOIN "User"
      ON "Tourism"."author_id" = "User"."id"
      ORDER BY "date" DESC;
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch list data.');
  }
}

export async function fetchEachTourism(tourism_id: string) {
  try {
    const data = await sql`
      SELECT * FROM "Tourism" JOIN "User"
      ON "Tourism"."author_id" = "User"."id"
      WHERE "Tourism"."tourism_id" = ${`${tourism_id}`};
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data');
  }
}
