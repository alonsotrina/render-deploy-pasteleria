import React from 'react';
import { CardProduct, FiltersProducts, Pagination } from '../../components';
import { categoryProducts } from "../../utils/constants/products";
import { useProduct } from '../../context/ProductContext';
import ProductImage from "../../assets/products.jpg";
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const { productsList, loading, error, currentPage, setCurrentPage, handleSortChange, handleFilterChange } = useProduct()
  const navigate = useNavigate();

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div className="app-container center">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {/* Sidebar de Filtros */}
      <aside className="col-span-1 bg-gray-100 p-4 rounded-md shadow-md">
        <FiltersProducts
          title="Filtros"
          onChange={handleFilterChange}
          category={categoryProducts}

        />
      </aside>

      {/* Sección de Productos */}
      <div className="col-span-4">
        {/* Ordenamiento */}
        <div className="flex justify-end mb-4">
          <label className="mr-2 text-gray-700">Ordenar por precio:</label>
          <select className="p-2 border rounded" onChange={handleSortChange}>
            <option value="asc">Menor a mayor</option>
            <option value="desc">Mayor a menor</option>
          </select>
        </div>

        {/* Productos */}
        <div className="container-custom grid grid-cols-4 gap-4 my-6">
          {productsList.results.length > 0 ? (
            productsList.results.map((item) => (
              <CardProduct
                key={item.id}
                name={item.nombre_producto}
                src={ProductImage}
                href={() => navigate(`/product-detail/${item.id}`)}
                category={item.nombre_categoria}
                price={item.precio}
              />
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500">
              No hay productos que coincidan con los filtros seleccionados.
            </div>
          )}
        </div>

        {/* Paginación */}
        {productsList.pagination.total_pages > 1 && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            productsList={productsList}
          />
        )}
      </div>
    </div>
  );
};

export default Products;