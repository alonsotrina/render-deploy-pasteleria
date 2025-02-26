import ProductImage from "../../assets/products.jpg";

export const products = [
  { 
    id: '1', 
    name: 'Tarta de Chocolate Supremo', 
    price: 10999, 
    category: 'Sin gluten', 
    category_id: 1,
    href: '/product-detail', 
    src: ProductImage,
    azucar: "Sí",
    gluten: "No",
    lactosa: "Sí",
    descripcion: "Deliciosa tarta de chocolate sin gluten con un sabor intenso y suave textura.",
    porciones: [10, 15, 20, 25]
  },
  { 
    id: '2', 
    name: 'Pie de Limón Cremoso', 
    price: 12999, 
    category: 'Pie', 
    category_id: 2,
    href: '/product-detail', 
    src: ProductImage,
    azucar: "Sí",
    gluten: "Sí",
    lactosa: "Sí",
    descripcion: "Un clásico pie de limón con base crujiente y crema de limón refrescante.",
    porciones: [10, 15, 20]
  },
  { 
    id: '3', 
    name: 'Kuchen de Frambuesa Artesanal', 
    price: 13999, 
    category: 'Kuchen', 
    category_id: 4,
    href: '/product-detail', 
    src: ProductImage,
    azucar: "Sí",
    gluten: "Sí",
    lactosa: "Sí",
    descripcion: "Kuchen artesanal con frambuesas frescas y masa suave.",
    porciones: [10, 20]
  },
  { 
    id: '4', 
    name: 'Torta Tres Leches', 
    price: 14999, 
    category: 'Tortas', 
    category_id: 3,
    href: '/product-detail', 
    src: ProductImage,
    azucar: "Sí",
    gluten: "Sí",
    lactosa: "Sí",
    descripcion: "Clásica torta empapada en tres tipos de leche, con un toque de canela.",
    porciones: [10, 15]
  },
  { 
    id: '5', 
    name: 'Brownie Sin Gluten', 
    price: 8999, 
    category: 'Sin gluten',
    category_id: 1,
    href: '/product-detail', 
    src: ProductImage,
    azucar: "Sí",
    gluten: "No",
    lactosa: "Sí",
    descripcion: "Brownie intenso de chocolate sin gluten, perfecto para los amantes del cacao.",
    porciones: [10, 15]
  },
  { 
    id: '6', 
    name: 'Pie de Manzana Clásico', 
    price: 11999, 
    category: 'Pie', 
    category_id: 2,
    href: '/product-detail', 
    src: ProductImage,
    azucar: "Sí",
    gluten: "Sí",
    lactosa: "Sí",
    descripcion: "Pastel de manzana con canela y crujiente base de masa.",
    porciones: [25, 20]
  },
  { 
    id: '7', 
    name: 'Kuchen de Nuez y Caramelo', 
    price: 15999, 
    category: 'Kuchen',
    category_id: 4,
    href: '/product-detail', 
    src: ProductImage,
    azucar: "Sí",
    gluten: "Sí",
    lactosa: "Sí",
    descripcion: "Exquisito kuchen con nueces tostadas y caramelo artesanal.",
    porciones: [10,20]
  },
  { 
    id: '8', 
    name: 'Torta de Zanahoria Esponjosa', 
    price: 13999, 
    category: 'Tortas', 
    category_id: 3,
    href: '/product-detail', 
    src: ProductImage,
    azucar: "Sí",
    gluten: "Sí",
    lactosa: "Sí",
    descripcion: "Torta de zanahoria con especias y cobertura de queso crema.",
    porciones: [10, 15, 20]
  },
  { 
    id: '9', 
    name: 'Galletas de Avena Sin Gluten', 
    price: 7999, 
    category: 'Sin gluten',
    category_id: 1,
    href: '/product-detail', 
    src: ProductImage,
    azucar: "Sí",
    gluten: "No",
    lactosa: "No",
    descripcion: "Galletas crujientes de avena sin gluten y un toque de miel.",
    porciones: [15, 20]
  },
  { 
    id: '10', 
    name: 'Pie de Queso Frutal', 
    price: 13499, 
    category: 'Pie', 
    category_id: 2,
    href: '/product-detail', 
    src: ProductImage,
    azucar: "No",
    gluten: "Sí",
    lactosa: "Sí",
    descripcion: "Delicioso pie de queso con frutas de estación.",
    porciones: [10, 15]
  }
];


export const categoryProducts = [
  { 
    category: 'Sin gluten', 
    id: 1,
  },
  { 
    category: 'Pie', 
    id: 2,
  },
  { 
    category: 'Kuchen', 
    id: 4,
  },
  { 
    category: 'Tortas', 
    id: 3,
  }
];
