"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/puclic/logo.svg';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation'

import axios from 'axios';

function Login() {
    const [tc, setTc] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('') //hata yonetimi
    const [mounted, setMounted] = useState(false); // Mount kontrolü
    const router = useRouter();

    useEffect(() => {
        setMounted(true); // Bileşen tarayıcıda yüklendiğinde true yapıyoruz
    }, []);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Formun varsayılan davranışını engelliyoruz

        try {
            const response = await axios.post('http://localhost:3000/users/login', {
                tc,
                password
            });
            // Eğer giriş başarılıysa token'ı kaydediyoruz
            const { accessToken } = response.data.user;
            if (accessToken) {
                localStorage.setItem('accessToken', accessToken);
                console.log('Login successful:', response.data);

                // Giriş başarılı olduğunda kullanıcıyı yönlendiriyoruz
                router.push('/adminDashboard');
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Eğer giriş başarısızsa kullanıcıya hata mesajı gösterebilirsin
            setErrorMessage('TC veya şifre hatalı. Lütfen tekrar deneyin.');
        }
    };
    return (
        <div>
            <Header />
            <section className="bg-gray-50 dark:bg-gray-900 mt-26">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <Image className="w-8 h-8 mr-2" src={logo} alt="logo" width={200} height={200} /> {/* Genişlik ve yükseklik ekledik */}
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Hesabiniza Giris Yapin
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kullanici Adi</label>
                                    <input type="text" name="tc" id="tc" value={tc} onChange={(e) => setTc(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="kullanici adi" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sifre</label>
                                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Beni Hatirla</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Sifremi Unuttum?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Giris Yap</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
