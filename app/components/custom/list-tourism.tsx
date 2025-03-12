import Link from 'next/link';
import styles from '@/app/modules/tourism.module.css';

export function ListTourism({
  link,
  title,
  author,
  top_content,
}: {
  link: string;
  title: string;
  author: string;
  top_content: string;
}) {
  return (
  <>

  <section className={`${styles.tourismSection} bg-indigo-100 dark:bg-neutral-900 border-2 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-500 hover:to-fuchsia-500 hover:text-white`}>
    <Link href={`${link}`}>
      <div className={`${styles.tourismLayout} truncate`}>
        <h1 className="md:text-2xl text-left md:text-center font-bold">{title}</h1>
        <p className="text-sm text-center">{`By ${author}`}</p>
        <p>{top_content}</p>
      </div>
    </Link>
  </section>

  </>
  );
}
