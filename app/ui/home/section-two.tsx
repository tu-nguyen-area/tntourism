import { fetchEachTourism } from '@/app/lib/data';
import { EachTourism } from '@/app/components/custom/each-tourism';

export default async function SectionTwo({ id }: { id: string }) {
  const eachTourism = await fetchEachTourism(id);

  return (
  <>

  <section>
    {eachTourism.map((tourism) => {
      return (
        <EachTourism
          key={tourism.tourism_id}
          title={tourism.title}
          name={tourism.name}
          img={tourism.img}
          content={tourism.content}
        />
      );
    })}
  </section>

  </>
  );
}
