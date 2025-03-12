import Link from 'next/link';
import SignoutTourism from '@/app/components/custom/signout-tourism';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>

  <div>
    <div className="flex justify-center">
      <h1 className="mt-8 text-2xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent w-fit">Public Dashboard</h1>
    </div>
    <div className="md:flex md:justify-between mx-8">
      <Link href="/dashboard/create">
        <button className="bg-black mt-6 dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500
            hover:to-fuchsia-500 hover:text-white">
          Create
        </button>
      </Link>
      <SignoutTourism />
    </div>
    {children}
  </div>

  </>
  );
}
