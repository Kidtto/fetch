class   Dato{
    constructor(){
        this.Dato = [];
    }
    //metodo
    getApi(){
        fetch('https://jsonplaceholder.typicode.com/todos')// no se coloca ;
.then (respuesta => respuesta.json())// se pone .thn
.then((response) =>{
    for(let i of response){
       this.Dato.push(i.title);
    }
    return this.datos;
})
.catch((error)=>(console.error(error)))
.finally(console.log("Ha sido finalizado la peticio"));
    }
}