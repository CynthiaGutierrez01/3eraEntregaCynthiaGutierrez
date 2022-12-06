// Carrito

    const pintarCarrito = () => {
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
            <span class="resta"> ➖ </span>
            <p>Cantidad: ${alfajor.cantidad}</p>
            <span class="suma"> ➕ </span>
            <p>Total: ${alfajor.cantidad * alfajor.precio}</p>
            <span class="eliminar-producto"> ❌ </span>
            `;

        carritoContainer.append(carritoContent);

        // sumar y restar alfajores

        let resta = carritoContent.querySelector(".resta")

        resta.addEventListener("click", ()=> {
            if(alfajor.cantidad !==1){
            alfajor.cantidad--;
        }
        guardar();
        pintarCarrito();
        });

        let suma = carritoContent.querySelector (".suma");

        suma.addEventListener("click", () =>{
            alfajor.cantidad++;
            guardar();
            pintarCarrito();
        });

        // eliminar alfajores

        let eliminar = carritoContent.querySelector(".eliminar-producto");

        eliminar.addEventListener("click", () => {
            eliminarProducto(alfajor.id);
        });


        console.log(carrito.length);

    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement ("div");
    totalBuying.class = "total-Content";
    totalBuying.innerHTML = `total a pagar: $ ${total} 
    <button id="vaciar-carrito">Vaciar Carrito</button>
    `;
    carritoContainer.append(totalBuying);
}

verCarrito.addEventListener("click", pintarCarrito);

// Eliminar productos del carrito

const eliminarProducto = (id) => {
    const foundId = carrito.find ((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    guardar();
    pintarCarrito();
};


const carritoCounter = () =>{
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();

// vaciar carrito

const botonVaciar = totalBuying.querySelector ("#vaciar-carrito");

botonVaciar.addEventListener("click", vaciarCarrito);


function vaciarCarrito () {
    carrito.length = 0;
    localStorage.setItem(carritoLength, JSON.stringify(carrito));
    pintarCarrito();
}


