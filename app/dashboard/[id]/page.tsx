import SectionTwo from '@/app/ui/dashboard/section-two';
import { DeleteTourism } from '@/app/ui/dashboard/buttons';
import Link from 'next/link';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
  <>

  <main>
    <SectionTwo id={id}/>

    <div className="grid gap-6 md:flex md:justify-between m-6 md:m-8">
      <Link href="/dashboard">
        <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500
            hover:to-fuchsia-500 hover:text-white">
          Back
        </button>
      </Link>
      <DeleteTourism id={id} />
    </div>
  </main>

  </>
  );
}
