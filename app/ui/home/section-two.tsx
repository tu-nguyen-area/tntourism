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
          top_img={tourism.top_img}
          mid_img={tourism.mid_img}
          bottom_img={tourism.bottom_img}
          top_content={tourism.top_content}
          mid_content={tourism.mid_content}
          bottom_content={tourism.bottom_content}
        />
      );
    })}
  </section>

  </>
  );
}
