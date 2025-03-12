import Form from 'next/form';
import { signOut, auth } from '@/app/dashboard/(auth)/auth';

export default async function SignoutTourism() {
  const session = await auth();

  async function handleSignOut() {
    'use server';
    await signOut({
      redirectTo: '/dashboard/signin',
    });
  }

  return (
  <>

  <section>
    <Form action={handleSignOut}>
      <label className="mr-3">{session?.user?.email}</label>
      <button className="mt-6 bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-36 h-10 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500 hover:to-fuchsia-500 hover:text-white" type="submit">Sign Out</button>
    </Form>
  </section>

  </>
  );
}
