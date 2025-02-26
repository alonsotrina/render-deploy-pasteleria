import React, { useEffect, useState } from 'react'
import { Counter, CustomButtonAction } from '../../components'
import { ShoppingOutlined } from '@ant-design/icons';
import { formatter } from "../../utils/formatters";
import { useBasket } from '../../hooks/useBasket';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../context/ProductContext';
import ProductImage from "../../assets/products.jpg";
import { Select } from 'antd';

const ProductInfo = ({ label, value }) => {
  const displayValue = value ? 'Sí' : 'No';

  return (
    <div className='justify-center flex-col'>
      <h3 className={`text-base text-gray-500`}>{label}</h3>
      <h4 className={`text-2xl font-light`}>{displayValue}</h4>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { productDetail, porcion, setPorcion, fetchAllProductsDetail} = useProduct()
  const {open, dispatch } = useBasket();
  const [counter, setCounter] = useState(1);

  const nuevoProducto = {
    ...productDetail,
    precio: productDetail.precio * porcion 
  };
  
  useEffect(()=>{
    fetchAllProductsDetail(id)
  },[id])

  const handleAddToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        count: counter
      }
    });
  };

  const handleChange = (value) => {
    setPorcion(value)
  };

  const handleAddBasket = () => {
    open("basketOpen")
    setCounter(1)
    handleAddToCart(nuevoProducto)
  }

  return (
    <>
      <header className="grid grid-cols-9 gap-4">
        <div className="relative col-span-6 bg-white rounded-4xl p-12 px-6">
          <h2 className='text-base text-slate-600 mb-2'>{productDetail.nombre_categoria} - sku:00{productDetail.id}</h2>
          <h3 className='text-5xl font-light text-slate-800'>{productDetail.nombre_producto}</h3>

          <div className="justify-between">
            <h3 className="text-xl font-light text-slate-600 my-4">stock {productDetail.stock}</h3>
            <h3 className="text-4xl font-light text-red-500 my-4">${formatter.format(productDetail.precio * porcion)}</h3>
          </div>

          <div className='grid grid-cols-3 my-9'>
            <ProductInfo
              label="Azúcar"
              value={productDetail.azucar}
            />

            <ProductInfo
              label="Gluten"
              value={productDetail.gluten}
            />

            <ProductInfo
              label="Lactosa"
              value={productDetail.lactosa}
            />
          </div>

          {/* <p className='text-base/7 font-light pt-8'>{productDetail.descripcion}</p> */}
          <div className='grid grid-cols-2 mt-9'>
            <div className='justify-center flex-col'>
              <h4 className="text-2xl font-light text-slate-600 my-4">Porción:</h4>

              <Select
                id="porciones"
                onChange={handleChange}
                placeholder="Seleccionar"
                className="!input-field w-40"
                size="large"
                options={[
                  {value: 1, label: '10'},
                  {value: 1.5, label: '20'},
                  {value: 2.5, label: '30'}
                ]}
                defaultValue={1}
              />
            </div>

            <div className='justify-center flex-col !border-l-[0.5px]'>
              <Counter
                counter={counter}
                setCounter={setCounter}
                disabled={counter <= 1}
              />
            </div>
          </div>
        </div>

        <div className="col-span-3 gap-2">
          <div className='relative rounded-2xl'>
            <img
              alt="example"
              src={ProductImage}
              className='w-full h-[55vh] object-cover object-left rounded-4xl'
            />

            <div className="absolute h-[55vh] inset-0 bg-gradient-to-br from-teal-800/100 via-black/20 to-teal-700/30 rounded-4xl z-2"></div>

            <div className="bg-[#F5F5F5] w-[90px] h-[90px] absolute -right-1 -bottom-1 z-4 justify-center rounded-tl-4xl">
              <CustomButtonAction
                color="default"
                onClick={handleAddBasket}
                shape="circle"
                size='large'
                icon={<ShoppingOutlined className="!text-[32px]" />}
                className="!p-8"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default ProductDetail
