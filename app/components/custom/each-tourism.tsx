import styles from '@/app/modules/tourism.module.css';
import Image from 'next/image';

export function EachTourism({
  title,
  name,
  img,
  content,
}: {
  title: string;
  name: string;
  img: string;
  content: string;
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
          src={`/${img}`}
          width={3000}
          height={2}
          alt="image"
        />
      </div>
      <p className="whitespace-pre-line md:whitespace-pre-wrap">{content}</p>
      <div className="md:p-8 flex justify-center">
        <Image
          className="w-full md:w-3/4 rounded-lg"
          src={`/${img}`}
          width={3000}
          height={2}
          alt="image"
        />
      </div>
      <p className="whitespace-pre-line md:whitespace-pre-wrap">{content}</p>
      <div className="md:p-8 flex justify-center">
        <Image
          className="w-full md:w-3/4 rounded-lg"
          src={`/${img}`}
          width={3000}
          height={2}
          alt="image"
        />
      </div>
      <p className="whitespace-pre-line md:whitespace-pre-wrap">{content}</p>
    </div>
  </section>

  </>
  );
}
