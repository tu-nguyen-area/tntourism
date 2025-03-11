import Link from 'next/link';
import styles from '@/app/modules/tourism.module.css';

export function ListTourism({
  link,
  title,
  author,
  content,
}: {
  link: string;
  title: string;
  author: string;
  content: string;
}) {
  return (
  <>

  <section className={`${styles.tourismSection} bg-indigo-100 dark:bg-neutral-900 border-2 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500 hover:to-fuchsia-500 hover:text-white`}>
    <Link href={`/home/${link}`}>
      <div className={`${styles.tourismLayout} truncate`}>
        <h1 className="md:text-2xl text-left md:text-center font-bold">{title}</h1>
        <p className="text-sm text-center">{`By ${author}`}</p>
        <p>{content}</p>
      </div>
    </Link>
  </section>

  </>
  );
}
