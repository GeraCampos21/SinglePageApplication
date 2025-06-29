// src/pages/HomePage.jsx
// pages/HomePage.jsx
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Carrusel from "../components/CarrucelMovil";
import Footer from "../components/FooterMovil";
import Carousel from "../components/CarouselDesk";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">
          <Banner />
          <Carrusel />
          <Carousel />
        </main>
      </div>
      <Footer />
    </div>
  );
}

