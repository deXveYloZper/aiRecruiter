// pages/index.tsx
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Luxury Fashion Recruitment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>

        <main className="flex-grow">
        <div className="relative">
  {/* Use a video tag if you prefer a video */}
  <img 
    src="/path-to-catwalk-image.jpg" 
    alt="Catwalk show" 
    className="w-full object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    {/* Overlay text */}
    <h1 className="text-white text-3xl font-semibold">
      The Future of Fashion Recruitment
    </h1>
  </div>
</div>

        </main>

        <footer className="bg-black text-white p-4 text-center">
          {/* Footer content */}
        </footer>
      </div>
    </>
  );
}
