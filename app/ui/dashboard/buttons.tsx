import { deleteTourism } from '@/app/lib/actions';

export function DeleteTourism({ id }: { id: string }) {
  const deleteTourismId = deleteTourism.bind(null, id);

  return (
  <>

  <form action={deleteTourismId}>
    <button type="submit"
      className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500 hover:to-fuchsia-500
        hover:text-white">
      Delete
    </button>
  </form>

  </>
  );
}
