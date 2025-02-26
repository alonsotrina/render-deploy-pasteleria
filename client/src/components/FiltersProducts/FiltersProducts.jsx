import React from 'react'

const FiltersProducts = ({title, onChange, category, filtros}) => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4 text-gray-700">{title}</h2>

            {/* Filtro Azúcar */}
            <label className="block mb-2 text-gray-600">Azúcar:</label>
            <select name="azucar" className="w-full p-2 border rounded" onChange={onChange} value={filtros.azucar || "all"}>
                <option value="all">Todos</option>
                <option value="true">Con azúcar</option>
                <option value="false">Sin azúcar</option>
            </select>

            {/* Filtro Gluten */}
            <label className="block mt-4 mb-2 text-gray-600">Gluten:</label>
            <select name="gluten" className="w-full p-2 border rounded" onChange={onChange} value={filtros.gluten || "all"}>
                <option value="all">Todos</option>
                <option value="true">Con gluten</option>
                <option value="false">Sin gluten</option>
            </select>

            {/* Filtro Lactosa */}
            <label className="block mt-4 mb-2 text-gray-600">Lactosa:</label>
            <select name="lactosa" className="w-full p-2 border rounded" onChange={onChange} value={filtros.lactosa || "all"}>
                <option value="all">Todos</option>
                <option value="true">Con lactosa</option>
                <option value="false">Sin lactosa</option>
            </select>

            {/* Filtro Categoría */}
            <label className="block mt-4 mb-2 text-gray-600">Categoría:</label>
            <select name="categoria_id" className="w-full p-2 border rounded" onChange={onChange} value={filtros.categoria_id || "all"}>
                <option value="all">Todas</option>
                {
                    category.map((item, index) => (
                        <option key={index} value={item.id}>{item.category}</option>
                    ))
                }
            </select>

            {/* Filtro Cantidad de Porciones */}
            {/* <label className="block mt-4 mb-2 text-gray-600">Cantidad de Porciones:</label>
            <select name="porciones" className="w-full p-2 border rounded" onChange={onChange}>
                <option value="all">Todas</option>
                {[...new Set(products.flatMap((p) => p.porciones))].sort((a, b) => a - b).map((portion) => (
                    <option key={portion} value={portion}>{portion} personas</option>
                ))}
            </select> */}
        </>
    )
}

export default FiltersProducts