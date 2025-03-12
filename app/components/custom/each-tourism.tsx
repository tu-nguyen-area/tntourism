import styles from '@/app/modules/tourism.module.css';
import Image from 'next/image';

export function EachTourism({
  title,
  name,
  top_img,
  mid_img,
  bottom_img,
  top_content,
  mid_content,
  bottom_content,
}: {
  title: string;
  name: string;
  top_img: string;
  mid_img: string;
  bottom_img: string;
  top_content: string;
  mid_content: string;
  bottom_content: string;
}) {
  return (
  <>

  <section className={`${styles.tourismSection} bg-indigo-100 dark:bg-neutral-900 dark:text-white rounded-lg break-words`}>
    <div className={`${styles.tourismLayout}`}>
      <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent w-fit">{title}</h1>
      <p className="text-sm">{`By ${name}`}</p>
      <div className="md:p-8 flex justify-center">
        <Image
          className="w-full md:w-3/4 rounded-lg"
          src={`/${top_img}`}
          width={3000}
          height={2}
          alt="image"
        />
      </div>
      <p className="whitespace-pre-line md:whitespace-pre-wrap">{top_content}</p>
      <div className="md:p-8 flex justify-center">
        <Image
          className="w-full md:w-3/4 rounded-lg"
          src={`/${mid_img}`}
          width={3000}
          height={2}
          alt="image"
        />
      </div>
      <p className="whitespace-pre-line md:whitespace-pre-wrap">{mid_content}</p>
      <div className="md:p-8 flex justify-center">
        <Image
          className="w-full md:w-3/4 rounded-lg"
          src={`/${bottom_img}`}
          width={3000}
          height={2}
          alt="image"
        />
      </div>
      <p className="whitespace-pre-line md:whitespace-pre-wrap">{bottom_content}</p>
    </div>
  </section>

  </>
  );
}
