export const productos = [
    {
        id: 1,
        nombre: "Hamburguesa Clásica",
        precio: 2500,
        descripcion: "Hamburguesa con carne, lechuga, tomate y queso.",
        categoria: "Hamburguesas"
    },
    {
        id: 2,
        nombre: "Hamburguesa Doble",
        precio: 3200,
        descripcion: "Doble carne, queso cheddar, panceta y salsa especial.",
        categoria: "Hamburguesas"
    },
    {
        id: 3,
        nombre: "Pizza Muzarella",
        precio: 3500,
        descripcion: "Clásica pizza de muzarella con salsa de tomate.",
        categoria: "Pizzas"
    },
    {
        id: 4,
        nombre: "Pizza Napolitana",
        precio: 4000,
        descripcion: "Pizza con muzarella, rodajas de tomate y ajo.",
        categoria: "Pizzas"
    },
    {
        id: 5,
        nombre: "Empanada de Carne",
        precio: 800,
        descripcion: "Empanada frita o al horno con carne picada y condimentos.",
        categoria: "Empanadas"
    },
    {
        id: 6,
        nombre: "Empanada de Jamón y Queso",
        precio: 800,
        descripcion: "Empanada rellena de jamón y queso derretido.",
        categoria: "Empanadas"
    }
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos);
        }, 2000);
    });
};
//1.35m clase3