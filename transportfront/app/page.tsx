import Image from "next/image";
import Header from '@/components/header'
import Footer from "@/components/footer";

export default function Home({children}:{children:React.ReactNode}) {
  return (
    <div className="container mx-auto">
      <Header/>
      <main className="flex-grow container mx-auto">
        {/* Ana içerik buraya gelecek */}
        <p>akndjkads</p>
      </main>
      <Footer/>
    </div>
  );
}
