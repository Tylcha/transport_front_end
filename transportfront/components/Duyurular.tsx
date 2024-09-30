import React from 'react'

function Duyurular() {
    return (
        <div>
            {/* Bildirim yeri */}
            <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white underline decoration-2">Duyurular</h1>
            <div className="mt-10 flex space-x-4 justify-center">
                <a href="#" className="block max-w-sm p-14 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ders Bildirimi</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">30.09.2024 Pazartesi günü ders olucaktır.</p>
                </a>
                <a href="#" className="block max-w-sm p-14 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ders Bildirimi</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">30.09.2024 Pazartesi günü ders olucaktır.</p>
                </a>
                <a href="#" className="block max-w-sm p-14 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ders Bildirimi</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">30.09.2024 Pazartesi günü ders olucaktır.</p>
                </a>
            </div>
        </div>
    )
}

export default Duyurular