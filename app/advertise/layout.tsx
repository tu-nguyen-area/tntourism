import Header from '@/app/ui/header';
import BarNav from '@/app/ui/bar-nav';
import Footer from '@/app/ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>

  <div>
    <Header />
    <BarNav />
    <div className="flex justify-center">
      <h1 className="mt-8 text-2xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent w-fit">Public with Advertisement</h1>
    </div>
    {children}
    <Footer />
  </div>

  </>
  );
}
