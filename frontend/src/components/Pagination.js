export default function Pagination({ currentPage, setCurrentPage, totalPages }) {
    return (
        <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-2">
                <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50 transition duration-200"
                >
                    Primeira
                </button>
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50 transition duration-200"
                >
                    Anterior
                </button>
            </div>
            <span className="text-gray-700">Página {currentPage} de {totalPages}</span>
            <div className="flex gap-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50 transition duration-200"
                >
                    Próxima
                </button>
                <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:opacity-50 transition duration-200"
                >
                    Última
                </button>
            </div>
        </div>
    );
}
