// src/pages/HomePage.jsx
// pages/HomePage.jsx
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MadeForYou from "../components/MadeForYou";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4">
          <Header />
          <Banner />
          <MadeForYou />
        </main>
      </div>
      <Footer />
    </div>
  );
}

