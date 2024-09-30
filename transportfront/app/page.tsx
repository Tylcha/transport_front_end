
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import Carousel from '@/components/Carousel'
import Duyurular from '@/components/Duyurular'

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="flex-grow container mx-auto mt-32">

        <Carousel></Carousel>
        <Duyurular></Duyurular>

       


        <p>akndjkads</p>
        <p>alkjsndksd</p>
      </main>
      <Footer />
    </div>
  );
}
