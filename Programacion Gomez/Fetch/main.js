fetch('https://jsonplaceholder.typicode.com/todos')// no se coloca ;
.then (respuesta => respuesta.json())// se pone .thn
.then((response) =>{
    console.log(response);
})
.catch((error)=>(console.error(error)))
.finally(console.log("Ha sido finalizado la peticio"));