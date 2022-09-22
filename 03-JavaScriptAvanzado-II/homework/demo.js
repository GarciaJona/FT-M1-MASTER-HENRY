function counter(){
    var contador = 0
    return function(){
        contador++
        return contador;
    }
} 

const nuevoContador = counter()
    nuevoContador()     
    nuevoContador()     
    nuevoContador()

    console.log(counter)

  /*
    Ejercicio 1
  
    La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.
  
    Ejemplo:
    const nuevoContador = counter()
    nuevoContador()     // 1
    nuevoContador()     // 2
    nuevoContador()     // 3
  
    const otroContador = counter()
    otroContador()      // 1
    otroContador()      // 2
    otroContador()      // 3
     */

