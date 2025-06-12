'use client'
import Link from 'next/link'
import { ArrowLeft, Hammer } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 px-6">
            <div className="text-center max-w-xl">
                <div className="flex justify-center mb-4">
                    <Hammer size={48} className="text-blue-600 animate-bounce" />
                </div>
                <h1 className="text-[100px] font-extrabold text-blue-600 leading-none mb-2 drop-shadow-md">
                    404
                </h1>
                <h2 className="text-3xl font-bold mb-2">
                    Arey Bhai! Page nahi mila 🤯
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                    Shayad ye page <span className="font-semibold text-blue-500">abhi ban raha hai</span> ya galti se aagaye ho.
                </p>
                <p className="text-base text-gray-500 italic mb-6">
                    (Ya to under construction hai... ya koi shortcut maarne ki koshish thi 😅)
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl text-base font-semibold shadow hover:bg-blue-700 transition-all duration-300"
                >
                    <ArrowLeft size={18} />
                    Go Back to Home
                </Link>
            </div>
        </div>
    )
}
