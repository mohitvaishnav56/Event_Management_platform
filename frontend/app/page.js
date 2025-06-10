'use client'
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/landing_page/Section";
import Section2 from "./components/landing_page/Section2";
import Section3 from "./components/landing_page/Section3";
import Footer from "./components/Footer";
export default function Home() {
  
  return (
    <div className="w-full bg-[#EEF1FB] flex flex-col items-center gap-[2vh]">
      <Nav />
      <Hero />
      <Section />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
