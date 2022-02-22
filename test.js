const Contenedor = require('./app');

const productos = new Contenedor('productos');

// dejo creado el archivo productos.txt por las dudas, pero tambien funciona si se elimina, se vuelve a crear.

// Ejecutar metodo save() uno a la vez ya que al ser asincronos se pisan y sale mal, se sobre escriben y queda solo 1 con el mismo id.
// uno a la vez sale perfecto

// La otra opciones es con un setTimeout para que no se pisen, lo dejo por defecto asi.

setTimeout(() => productos.save({
    title: 'Escuadra',                                                                                                                                 
    price: 123.45,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'
}),250);

setTimeout(() => productos.save({
    title: 'Calculadora',                                                                                                                              
    price: 234.56,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'
}),500);

setTimeout(() => productos.save({
    title: 'Globo Terráqueo',                                                                                                                          
    price: 345.67,                                                                                                                                     
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'
}),750);

setTimeout(() => productos.getById(2),1000);

setTimeout(() => productos.getAll(),1500);

setTimeout(() => productos.deleteById(3),2000);

setTimeout(() => productos.deleteAll(),3000);