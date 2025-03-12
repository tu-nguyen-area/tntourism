import EditTourism from "@/app/components/custom/edit-tourism";
import { fetchEachTourism } from "@/app/lib/data";

export default async function SectionThree({ id }: { id: string }) {
  const eachTourism = await fetchEachTourism(id);

  return (
  <>

  <section>
  {eachTourism.map((tourism) => {
      return (
        <EditTourism
          key={tourism.tourism_id}
          tourism_id={tourism.tourism_id}
          author_id={tourism.author_id}
          author_name={tourism.name}
          published={tourism.published}
          title={tourism.title}
          top_content={tourism.top_content}
          mid_content={tourism.mid_content}
          bottom_content={tourism.bottom_content}
          top_img={tourism.top_img}
          mid_img={tourism.mid_img}
          bottom_img={tourism.bottom_img}
        />
      );
    })}
  </section>

  </>
  );
}
