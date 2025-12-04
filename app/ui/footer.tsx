import Link from 'next/link';

export default function Footer() {
  return (
  <>

  <footer className="flex justify-center bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 text-white p-6">
    <section>
      <p>Privacy Polity | Terms of Use</p>
      <p>A product from <Link href="https://tu-nguyen.org/" target="_blank">TN ADVANCEMENT</Link></p>
      <p>&#169; 2025 TN Tourism <span className="hidden md:inline-block">Project</span>. All rights reserved.</p>
    </section>
  </footer>

  </>
  );
}
