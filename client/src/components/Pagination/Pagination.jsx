import React from 'react'

const Pagination = ({ currentPage, setCurrentPage, productsList }) => {
    return (
        <>
            <div className="flex justify-center space-x-2 mt-6">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>

                {Array(productsList.pagination.total_pages).fill().map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 border rounded ${currentPage === index + 1 ? "bg-gray-200" : ""}`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, productsList.pagination.total_pages))}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                    disabled={currentPage === productsList.pagination.total_pages}
                >
                    Siguiente
                </button>
            </div>
        </>
    )
}

export default Pagination