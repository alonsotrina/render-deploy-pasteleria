import React from 'react'
import headerImage from "../../assets/header.jpg";
import { CardProduct, CaregoryCard, CustomButtom, Footer, HeaderHome, NavBar } from '../../components';
import { categories } from "../../utils/constants/categories";
import { products } from "../../utils/constants/products";


const Home = () => {
  return (
    <>
      <div className="bg-white mb-10">
        <NavBar className="container-custom py-5 px-5" />
      </div>

      <HeaderHome
        title='Tarta de Chocolate Supremo'
        desc='Bizcocho esponjoso de cacao, relleno con ganache de chocolate y avellanas caramelizadas. Irresistible y perfecta para cualquier ocasión.'
        href={`/product-detail/10`}
        src={`url(${headerImage})`}
      />

      <main>
        <div className="container-custom grid grid-cols-4 gap-4 my-7">

          <div className='justify-center flex-col items-stretch'>
            <div>
              <h2 className='text-base text-slate-600 mb-2'>
                Nuestras
              </h2>
              <h2 className='text-5xl font-light text-slate-800'>
                Categorías
              </h2>
            </div>
          </div>

          <div className='col-span-2 rounded-2xl justify-center p-12'>
            <p className='text-base/8 font-light text-slate-600 text-justifywind s'>Explora nuestra selección de delicias artesanales, desde irresistibles tortas hasta opciones sin gluten.
              Cada categoría ha sido cuidadosamente creada para brindarte el mejor sabor y calidad en cada bocado.
              ¡Descubre tu favorita y disfruta!</p>
          </div>

          <div className='justify-center '>
            <CustomButtom
              color="default"
              size="large"
              name="Ver otras categorias"
              href={`/product-detail/10`}
              variant='link'
            />
          </div>

          {
            categories.map((item) => (
              <CaregoryCard
                key={item.id}
                src={item.src}
                nameCategory={item.name}
                href={item.href}
              />
            ))
          }
        </div>

        <div className="container-custom grid grid-cols-4 gap-4 my-12">
          <div className='col-span-4 '>
            <div>
              <h2 className='text-base text-slate-600 mb-2'>
                Productos
              </h2>
              <h2 className='text-5xl font-light text-slate-800'>
                Destacados
              </h2>
            </div>
          </div>
          {
            products.slice(0, 4).map((item) => (
              <CardProduct
                key={item.id}
                name={item.name}
                src={item.src}
                href={`/product-detail/${item.id}`}
                category={item.category}
                price={item.price}
              />
            ))
          }
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home