import Link from 'next/link';

export default function Footer() {
  const year = new Date();

  return (
  <>

  <footer className="flex justify-center bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 text-white p-6 text-sm md:text-base">
    <section>
      <p>Privacy Policy | Terms of Use</p>
      <p>Powered by <Link
        href="https://tnadvancement.tn-technology.com/"
        target="_blank"
      >
        TN ADVANCEMENT</Link>
      </p>
      <p>&#169; {year.getFullYear()} TN Tourism Project. All rights reserved</p>
    </section>
  </footer>

  </>
  );
}
