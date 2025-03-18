'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 text-center">
                <h1 className="text-4xl text-gray-800 mb-4">404 - Página Não Encontrada</h1>
                <p className="text-gray-700 mb-6">Desculpe, a página que você está procurando não existe.</p>
                <button
                    onClick={() => router.push('/dashboard')}
                    className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 font-medium"
                >
                    Voltar ao Dashboard
                </button>
            </div>
        </div>
    );
}
