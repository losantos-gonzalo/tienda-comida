export const productos = [
    {
        id: 1,
        nombre: "Hamburguesa Clásica",
        precio: 2500,
        descripcion: "Hamburguesa con carne, lechuga, tomate y queso.",
        categoria: "Hamburguesas",
        img: "https://imgs.search.brave.com/c66uKkF3RcfCIN1BDdqvxNA9iAdDFC-fAu0h3WNC1I4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bGljZS1jcmlzcHkt/cGl6emEtd2l0aC1t/ZWF0LWNoZWVzZV8x/NDA3MjUtNjk3NC5q/cGc_c2VtdD1haXNf/aHlicmlk"
    },
    {
        id: 2,
        nombre: "Hamburguesa Doble",
        precio: 3200,
        descripcion: "Doble carne, queso cheddar, panceta y salsa especial.",
        categoria: "Hamburguesas",
        img: "https://imgs.search.brave.com/c66uKkF3RcfCIN1BDdqvxNA9iAdDFC-fAu0h3WNC1I4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bGljZS1jcmlzcHkt/cGl6emEtd2l0aC1t/ZWF0LWNoZWVzZV8x/NDA3MjUtNjk3NC5q/cGc_c2VtdD1haXNf/aHlicmlk"
    },
    {
        id: 3,
        nombre: "Pizza Muzarella",
        precio: 3500,
        descripcion: "Clásica pizza de muzarella con salsa de tomate.",
        categoria: "Pizzas",
        img: "https://imgs.search.brave.com/c66uKkF3RcfCIN1BDdqvxNA9iAdDFC-fAu0h3WNC1I4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bGljZS1jcmlzcHkt/cGl6emEtd2l0aC1t/ZWF0LWNoZWVzZV8x/NDA3MjUtNjk3NC5q/cGc_c2VtdD1haXNf/aHlicmlk"
    },
    {
        id: 4,
        nombre: "Pizza Napolitana",
        precio: 4000,
        descripcion: "Pizza con muzarella, rodajas de tomate y ajo.",
        categoria: "Pizzas",
        img: "https://imgs.search.brave.com/c66uKkF3RcfCIN1BDdqvxNA9iAdDFC-fAu0h3WNC1I4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bGljZS1jcmlzcHkt/cGl6emEtd2l0aC1t/ZWF0LWNoZWVzZV8x/NDA3MjUtNjk3NC5q/cGc_c2VtdD1haXNf/aHlicmlk"
    },
    {
        id: 5,
        nombre: "Empanada de Carne",
        precio: 800,
        descripcion: "Empanada frita o al horno con carne picada y condimentos.",
        categoria: "Empanadas",
        img: "https://imgs.search.brave.com/c66uKkF3RcfCIN1BDdqvxNA9iAdDFC-fAu0h3WNC1I4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bGljZS1jcmlzcHkt/cGl6emEtd2l0aC1t/ZWF0LWNoZWVzZV8x/NDA3MjUtNjk3NC5q/cGc_c2VtdD1haXNf/aHlicmlk"
    },
    {
        id: 6,
        nombre: "Empanada de Jamón y Queso",
        precio: 800,
        descripcion: "Empanada rellena de jamón y queso derretido.",
        categoria: "Empanadas",
        img: "https://imgs.search.brave.com/c66uKkF3RcfCIN1BDdqvxNA9iAdDFC-fAu0h3WNC1I4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bGljZS1jcmlzcHkt/cGl6emEtd2l0aC1t/ZWF0LWNoZWVzZV8x/NDA3MjUtNjk3NC5q/cGc_c2VtdD1haXNf/aHlicmlk"
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