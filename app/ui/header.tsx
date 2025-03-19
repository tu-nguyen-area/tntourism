import Link from 'next/link';

export default function Header() {
  return (
  <>

  <header>
    <section className="flex justify-between p-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 text-white">
      <Link href="/">
        TN TOURISM
      </Link>
      <p>tu-nguyen@tu-nguyen.com</p>
    </section>
  </header>

  </>
  );
}
