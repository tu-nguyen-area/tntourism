'use client';

import { editTourism, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full md:w-36 h-10
        hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500 hover:to-fuchsia-500
        hover:text-white" type="submit" disabled={pending}>
      {pending ? "Confirming..." : "Confirm"}
    </button>
  );
}

export default function EditTourism({
  tourism_id,
  title,
  author_id,
  author_name,
  published,
  top_content,
  mid_content,
  bottom_content,
  top_img,
  mid_img,
  bottom_img
}: {
  tourism_id: string,
  title: string,
  author_id: string,
  author_name: string,
  published: string,
  top_content: string,
  mid_content: string,
  bottom_content: string,
  top_img: string,
  mid_img: string,
  bottom_img: string
}) {
  const initialState: State = { message: null, errors: {} };
  const editTourismId = editTourism.bind(null, tourism_id );
  const [state, formAction] = useActionState(editTourismId, initialState);

  return (
  <>

  <section className="m-8">
    <form action={formAction}>
      <div className="my-6">
          <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Title</label>
          <input name="title" defaultValue={title} placeholder="Title..." className="rounded-lg w-full border-2 p-2" required></input>
      </div>
      <div className="my-6 flex justify-between gap-3 md:gap-16">
        <div className="w-full">
          <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Author</label>
          <input name="name" defaultValue={author_name} placeholder="Author..." className="rounded-lg w-full border-2 p-2" required></input>
        </div>
        <div className="w-full">
          <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Published</label>
          <select name="published" defaultValue={published} className="rounded-lg w-full border-2 p-2" required>
            <option value="true">Public</option>
            <option value="false">Private</option>
          </select>
        </div>
      </div>
      <div className="my-6 grid grid-cols-1 md:flex justify-between gap-6 md:gap-3">
        <div className="w-full">
          <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Top Image</label>
          <input name="top_img" defaultValue={top_img} placeholder="image.png" className="rounded-lg w-full border-2 p-2" required></input>
        </div>
        <div className="w-full">
          <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Mid Image</label>
          <input name="mid_img" defaultValue={mid_img} placeholder="image.png" className="rounded-lg w-full border-2 p-2" required></input>
        </div>
        <div className="w-full">
          <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Bottom Image</label>
          <input name="bottom_img" defaultValue={bottom_img} placeholder="image.png" className="rounded-lg w-full border-2 p-2" required></input>
        </div>
      </div>
      <div>
        <input name="author_id" defaultValue={author_id} type="hidden"></input>
      </div>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Top Content</label>
        <textarea name="top_content" defaultValue={top_content} placeholder="Content..." className="rounded-lg w-full h-64 md:h-96 border-2 p-2" required></textarea>
      </div>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Mid Content</label>
        <textarea name="mid_content" defaultValue={mid_content} placeholder="Content..." className="rounded-lg w-full h-64 md:h-96 border-2 p-2" required></textarea>
      </div>
      <div className="my-6">
        <label className="text-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text font-bold text-transparent">Bottom Content</label>
        <textarea name="bottom_content" defaultValue={bottom_content} placeholder="Content..." className="rounded-lg w-full h-64 md:h-96 border-2 p-2" required></textarea>
      </div>
      <div className="grid gap-6 md:flex md:justify-between my-6 md:my-12">
        <Link href={`/dashboard/${tourism_id}`}>
          <button className="bg-black dark:bg-white rounded-lg text-white dark:text-black p-2 w-full
              md:w-36 h-10 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500
              hover:to-fuchsia-500 hover:text-white">
            Cancel
          </button>
        </Link>
        <Submit />
      </div>
    </form>
  </section>

  </>
  );
}
