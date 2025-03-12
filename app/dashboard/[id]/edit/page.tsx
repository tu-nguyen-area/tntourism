import SectionThree from '@/app/ui/dashboard/section-three';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
  <>

  <section>
    <SectionThree id={id}  />
  </section>

  </>
  );
}
