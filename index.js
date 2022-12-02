// Variables

const gustoAlfajor = document.getElementById("gustoAlfajor");
const verCarrito = document.getElementById("verCarrito");
const carritoContainer = document.getElementById("carrito-container");


// Productos
const alfajores = [
    {id:1, nombre:"Alfajor de Chocolate Negro, relleno de Dulce de Leche", precio:300, img: "./assets/img/alfajorChocoNDdl.png"},
    {id:2, nombre:"Alfajor de Chocolate Negro, relleno con Nutella", precio:350, img: "./assets/img/alfajorChocoNNut.png"},
    {id:3, nombre:"Alfajor de Chocolate Blanco, relleno de Dulce de Leche", precio:300, img: "./assets/img/alfajorChocoBDdl.png"},
    {id:4, nombre:"Alfajor de Chocolate Blanco, relleno con Nutella", precio:350, img: "./assets/img/alfajorChocoBNut.png"},
    {id:5, nombre:"Alfajor de Maicena con Dulce de Leche", precio:250, img: "./assets/img/alfajorMaicena.png"},
];

let carrito = []

// Cards de Productos

alfajores.forEach((alfajor)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src = "${alfajor.img}">
    <h3>${alfajor.nombre}</h3>
    <p class="price"> $ ${alfajor.precio}</p>
    `;

    gustoAlfajor.append(content);

// Boton de Comprar

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: alfajor.id,
            nombre: alfajor.nombre,
            img: alfajor.img,
            precio: alfajor.precio,
        })
    console.log(carrito)
    })
});

// Carrito

verCarrito.addEventListener("click", () =>{
    carritoContainer.innerHTML = ""; 
    carritoContainer.style.display = "flex";
    const carritoHeader = document.createElement("div");
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = `
    <h1 class=carrito-header-title">Carrito.</h1>
    `;
    carritoContainer.append(carritoHeader);

    const carritobutton = document.createElement("h1");
    carritobutton.innerText = "x";
    carritobutton.className = "carrito-header-button";

    carritobutton.addEventListener("click", ()=>{
        carritoContainer.style.display = "none";
    });

    carritoHeader.append(carritobutton);

    carrito.forEach((alfajor) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "carrito-content";
        carritoContent.innerHTML = `
            <img src="${alfajor.img}">
            <h3>${alfajor.nombre}</h3>
            <p> $ ${alfajor.precio}</p>
            `;

        carritoContainer.append(carritoContent);

    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement ("div");
    totalBuying.class = "total-Content";
    totalBuying.innerHTML = `total a pagar: $ ${total} `;
    carritoContainer.append(totalBuying);
});