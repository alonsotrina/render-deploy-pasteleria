export const URLBASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api';

export const ENDPOINT = {
  // Login OK
  login: `${URLBASE}/auth/login`, 
  // Registrase OK
  register: `${URLBASE}/auth/register`,
  // listar productos - OK
  products: `${URLBASE}/productos`,
  // Filtrar productos .OK
  filterProducts: `${URLBASE}/productos/filter`,
  // Registar orden POST 
  order: `${URLBASE}/ordenes`,
  // Obtener las ordenes  según ID - GET
  order_user: `${URLBASE}/ordenes`,
 // Obtener las ordenes  según el orden_id  - GET
 order_user2: `${URLBASE}/ordenes/:userId/detalle/:ordenIds`,
  // Mostar perfil - OK
  userProfile: `${URLBASE}/auth/me`,
  // Listas comunas - OK
  listComuna: `${URLBASE}/comunas`,
};7