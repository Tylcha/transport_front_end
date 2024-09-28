import React from 'react'

export default function Footer () {
  return (
    <footer className="bg-white p-3 border-t-2">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <p>&copy; {new Date().getFullYear()} Şirket Adı. Tüm hakları saklıdır.</p>
      </div>
      <ul className="flex space-x-6">
        {['Gizlilik Politikası', 'Kullanım Şartları', 'İletişim'].map((item) => (
          <li key={item}>
            <a href="#" className="text-black hover:text-blue-600">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
  );
}