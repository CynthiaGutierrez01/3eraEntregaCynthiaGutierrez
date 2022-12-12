// Variables

const gustoAlfajor = document.getElementById("gustoAlfajor");
const verCarrito = document.getElementById("verCarrito");
const carritoContainer = document.getElementById("carrito-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Cards de Productos // Fetch


fetch("./data.json")
.then(response => response.json())
.then(data => {
    data.forEach((alfajor) => {
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
        <img src = "${alfajor.img}">
        <h3>${alfajor.nombre}</h3>
        <p class="price"> $ ${alfajor.precio}</p>
        `
        gustoAlfajor.append(content);
    
    
// Boton de Comprar

    let comprar = document.createElement("button")

    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{

// Cantidad de productos en el carrito

    const repetir = carrito.some((repetirAlfajor) => repetirAlfajor.id === alfajor.id);

        if(repetir){
            carrito.map((alfa) =>{
                if(alfa.id === alfajor.id){
                    alfa.cantidad++;
                }
            })
        }else {
            carrito.push({
                id: alfajor.id,
                nombre: alfajor.nombre,
                img: alfajor.img,
                precio: alfajor.precio,
                cantidad: alfajor.cantidad,
            });
        }
    console.log(carrito);
    carritoCounter();
    guardar();
    swal ( " Producto Agregado! " , "", "success" , {   
        botón : " ¡Aww yiss! " , 
    });
    
    });
});
});




// LocalStorage

const guardar = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("carrito"));
