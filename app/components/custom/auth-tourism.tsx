'use client';

import Form from 'next/form';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function Submit({ isSuccessful }: { isSuccessful: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button className="my-8 md:mr-16 bg-black dark:bg-white rounded-lg text-white dark:text-black w-full
        md:w-48 h-10 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500 hover:to-fuchsia-500
        hover:text-white" type="submit" disabled={pending|| isSuccessful}>
      {pending ? "Confirming..." : "Confirm"}
    </button>
  );
}

export function AuthTourism({ action, children, defaultEmail, isSuccessful, url, content, }: {
  action: NonNullable<string | ((formData: FormData) => void | Promise<void>) | undefined>;
  children: React.ReactNode;
  defaultEmail: string;
  isSuccessful: boolean;
  url: string;
  content: string;
}) {
  return (
  <>

  <section className="grid h-dvh place-content-center bg-neutral-200 md:bg-white dark:bg-black">
    <Form action={action}>
      <div className="rounded-lg bg-neutral-200 dark:bg-neutral-900">
        {children}
      <div className="p-6 w-dvw md:w-auto flex flex-col gap-3">

        <label htmlFor="email" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent w-fit">Email</label>
        <input id="email" name="email" type="email" className="rounded-lg p-3 bg-white dark:bg-black" defaultValue={`${defaultEmail}`} placeholder="user@email.com" autoComplete="email" required></input>

        <label htmlFor="password" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent w-fit">Password</label>
        <input id="password" name="password" type="password" className="rounded-lg p-3 bg-white dark:bg-black" placeholder="password" required></input>

      </div>
      <div className="px-6">
        <Submit isSuccessful={isSuccessful}/>
        <Link href="/" className="md:ml-16">
          <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black w-full md:w-48 h-10 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500 hover:to-fuchsia-500 hover:text-white">Cancel</button>
        </Link>
      </div>
      <Link href={`${url}`}><h1 className="text-center m-6">{content}</h1></Link>
      
      
      </div>
    </Form>
  </section>

  </>
  );
}
