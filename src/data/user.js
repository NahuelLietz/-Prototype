
export const users = [
  {
    id: 1,
    nombre: "Ana Gómez",
    email: "ana.gomez@example.com",
    rol: "admin",
    puntos: 1500,
    activo: true
  },
  {
    id: 2,
    nombre: "Carlos López",
    email: "carlos.lopez@example.com",
    rol: "user",
    puntos: 450,
    activo: true
  },
  {
    id: 3,
    nombre: "María Rodríguez",
    email: "maria.r@example.com",
    rol: "user",
    puntos: 2300,
    activo: false
  }
];

export const obtenerUsuarioPorId = (id) => {
  return users.find((user) => user.id === id);
};