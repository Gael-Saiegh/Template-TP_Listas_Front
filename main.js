/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);
    comidas = data;                   // Asignar el JSON a la variable comidas
    mostrarComidas(comidas)
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = []



function mostrarComidas(lista) {
  const comidaContainer = document.getElementById("comidaContainer")

  
   lista.forEach( comida=> {

    comidaContainer.innerHTML +=
 `    
 <article class= "card" > 
      <h2> ${comidas.nombre}</h2>  

 <ul> 
      ${comida.ingredientes.map(ingrediente => `<li>${ingrediente} </li>`).join('')}
      
  </ul>
  </article>
`
   
   }) 

   }

   const agregarComidaForm = document.getElementById("agregarComidaForm")

   agregarComidaForm.addEventListener("submit", (event) => {

    event.preventDefault()

     alert("comida agregada: " + event.target.nombre.value) ;

     let nuevaComida = {
     nombre: event.target.nombre.value,
     provincia: event.target.provincia.value,
     categoria: event.target.categoria.value,
     ingredientes: event.target.ingredientes.value.split(",")
    }

   
    comidas.push(nuevaComida)
     
    mostrarComidas(comidas)

    event.target.reset()
      })
  

  const filtroCategoría = document.getElementById("filtroCategoría")

  filtroCategoría.addEventListener("change", () => {

let comidasFiltradas = comidas.filter(comida => {

return comida.categoria.includes(filtroCategoría.value)
})

mostrarComidas(comidasFiltradas)
  })