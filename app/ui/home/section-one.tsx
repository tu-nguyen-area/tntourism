import { ListTourism } from '@/app/components/custom/list-tourism';
import { fetchTourism } from '@/app/lib/data';

export default async function SectionOne() {
  const listTourism = await fetchTourism();

  return (
  <>

  <section>
    {listTourism.map((tourism) => {
      return (
        <ListTourism
          key={tourism.tourism_id}
          link={`/home/${tourism.tourism_id}`}
          title={tourism.title}
          author={tourism.name}
          top_content={tourism.top_content}
        />
      );
    })}
  </section>

  </>
  );
}
