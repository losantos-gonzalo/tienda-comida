export const productos = [
    {
        id: 1,
        nombre: "Hamburguesa Clásica",
        precio: 2500,
        stock: 10,
        descripcion: "Hamburguesa con carne, lechuga, tomate y queso.",
        categoria: "Hamburguesas",
        img: "https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kqX093YV/200/200/original?country=ar"
    },
    {
        id: 2,
        nombre: "Hamburguesa Doble",
        precio: 3200,
        stock: 10,
        descripcion: "Doble carne, queso cheddar, panceta y salsa especial.",
        categoria: "Hamburguesas",
        img: "https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kqX093YV/200/200/original?country=ar"
    },
    {
        id: 3,
        nombre: "Papas Medianas",
        precio: 3500,
        stock: 10,
        descripcion: "Clásica pizza de muzarella con salsa de tomate.",
        categoria: "Papas",
        img: "https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kEXemacS/200/200/original?country=ar"
    },
    {
        id: 4,
        nombre: "Papas Grandes",
        precio: 4000,
        stock: 10,
        descripcion: "Pizza con muzarella, rodajas de tomate y ajo.",
        categoria: "Papas",
        img: "https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kEXemacS/200/200/original?country=ar"
    },
    {
        id: 5,
        nombre: "Coca Cola Grande",
        precio: 800,
        stock: 10,
        descripcion: "Empanada frita o al horno con carne picada y condimentos.",
        categoria: "Bebidas",
        img: "https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar"
    },
    {
        id: 6,
        nombre: "Coca Cola Mediana",
        precio: 700,
        stock: 10,
        descripcion: "Empanada rellena de jamón y queso derretido.",
        categoria: "Bebidas",
        img: "https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kcX6zxgK/200/200/original?country=ar"
    }
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos);
        }, 2000);
    });
};

export const getProductsByCategory = (category) => {

    return new Promise((res) => {
        const productosFiltrados = productos.filter(
            (prod) => prod.categoria === category
        );
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};

export const getProductById = (id) => {

    return new Promise((res) => {
        const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 200);
    });
};