import CreateTourism from '@/app/components/custom/create-tourism';
//import { auth } from '@/app/(auth)/auth';

export default async function Page() {
  //const session = await auth();

  return (
  <>

  <section>
    <CreateTourism
      author_id='7a791f99-6bed-4ede-810a-0ab386134a01'
    />
  </section>

  </>
  );
}
