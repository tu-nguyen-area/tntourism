import CreateTourism from '@/app/components/custom/create-tourism';
import { auth } from '@/app/dashboard/(auth)/auth';

export default async function Page() {
  const session = await auth();

  return (
  <>

  <section>
    <CreateTourism
      author_id={`${session?.user?.id}`}
    />
  </section>

  </>
  );
}
