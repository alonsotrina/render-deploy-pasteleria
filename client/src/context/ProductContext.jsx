import React, { createContext, useContext, useEffect, useState } from "react";
import { ENDPOINT } from '../config/endpoints'
import useHttp from "../hooks/useHttp";

export const ProductContext = createContext(null)

const initialState = {
    results: [],
    pagination: {},
    total: 0,
};
const initialFilter = {
    azucar: null,
    gluten: null,
    lactosa: null,
    categoria_id: null,
    porciones: null,
};

const ProductProvider = ({ children }) => {
    const { request, loading, error  } = useHttp()
    const [productsList, setProductsList] = useState(initialState)
    const [productDetail, setProductDetail] = useState({})
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("asc");
    const [filters, setFilters] = useState(initialFilter);

    // Mostrar todos los productos
    const fetchAllProducts = async () => {
        try {
            const data = await request(`${ENDPOINT.products}?page=${currentPage}&order_by=precio_${sortOrder}`, "GET");

            console.log('productsList ', data.data)
            const { results, pagination, total } = data.data;

            setProductsList({
                results: results || [],
                pagination: pagination || {},
                total: parseInt(total) || 0,
            });

        } catch (err) {
            console.error("Error fetching Productos:", err);
        }
    };

    // Mostrar productos filtrados
    const fetchFiltersProducts = async (currentFilters) => {
        try {
            // transforma la data
            const queryParams = new URLSearchParams(
                Object.fromEntries(
                    Object.entries(currentFilters).filter(([_, value]) => value !== null)
                )
            );

            const data = await request(`${ENDPOINT.filterProducts}?${queryParams.toString()}`, "GET");
            const { results, pagination, total } = data.data;

            setProductsList({
                results: results || [],
                pagination: pagination || {},
                total: parseInt(total) || 0,
            });
        } catch (err) {
            console.error("Error fetching Productos:", err);
        }
    };

     // Mostrar productos según su ID
    const fetchAllProductsDetail = async (id) => {
        try {
            const data = await request(`${ENDPOINT.products}/${id}`, "GET");
            console.log('product detalle ', data.data)
            setProductDetail(data.data)

        } catch (err) {
            console.error("Error fetching Productos:", err);
        }
    };

    useEffect(() => {
        fetchAllProducts();
    }, [currentPage, sortOrder]);


    const handleFilterChange = async (e) => {
        const { name, value } = e.target;

        const newFilters = {
            ...filters,
            [name]: value === "all" ? null : value,
        };

        setFilters(newFilters);
        setCurrentPage(1);
        await fetchFiltersProducts(newFilters);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <ProductContext.Provider value={{ productsList, loading, error, currentPage, productDetail, fetchAllProductsDetail, setCurrentPage, handleSortChange, handleFilterChange }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("useProductos debe ser usado dentro de un useProduct");
    }
    return context;
}

export default ProductProvider