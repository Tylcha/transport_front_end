import next from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-white p-3 border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Image src="https://sefine.com.tr/img/logo.svg" alt="logo" width={200} height={70}></Image>
        </div>
        <ul className="flex space-x-16">
          <li>
            <a href="#" className="text-black hover:text-blue-600">Ana Sayfa</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600">Hakkında</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600">Hizmetler</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-600">İletişim</a>
          </li>
        </ul>
        <div>
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Giriş Yap</a>
        </div>
      </div>
    </nav>
  );
}
