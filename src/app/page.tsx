import Image from "next/image";
import Opening from "@/components/Opening";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Opening />
      <Footer />
    </div>
  );
}