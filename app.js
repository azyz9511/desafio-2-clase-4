const fs = require('fs');

class Contenedor{
    
    constructor(path){
        this.path = path;
    }

    static id = 1;

    save(item){

        /* fs.promises.readFile(this.path,'utf-8')
        .then(contenido => {

            if(contenido == '[]'){
                item.id = Contenedor.id; 
                let itemStr = JSON.stringify(item,null,2);
                Contenedor.id++;
                
                fs.promises.writeFile(this.path,itemStr)
                .then( () => {
                    console.log('Guardado con exito') ;
                    console.log(`El id asignado al producto es: ${item.id}`);
                })
                .catch( e => 
                    console.log(`Ha ocurrido el siguiente error: ${e}`)
                );
            }else{
                item.id = Contenedor.id;
                Contenedor.id++;
                let contenidoObj = JSON.parse(contenido); 
                contenidoObj.push(item);
                contenidoObj = JSON.stringify(contenidoObj,null,2);

                fs.promises.writeFile(this.path,contenidoObj)
                .then( () => {
                    console.log('Guardado con exito') ;
                    console.log(`El id asignado al producto es: ${item.id}`);
                })
                .catch( e => 
                    console.log(`Ha ocurrido el siguiente error: ${e}`)
                );
            }
            
        })
        .catch(e => 
            console.log(`Ha ocurrido el siguiente error: ${e}`)
        ); */

    }

    getById(id){

        fs.promises.readFile(this.path,'utf-8')
        .then(contenido => {

            let contenidoObj = JSON.parse(contenido); 
            let validacion = false;

            for (let i = 0; i < contenidoObj.length; i++) {
                if(contenidoObj[i].id == id){
                    console.log(contenidoObj[i]);
                    validacion = true;
                }
            }
            
            if(validacion == false){
                console.log('El id ingresado no existe');
            }
        })
        .catch(e => 
            console.log(`Ha ocurrido el siguiente error: ${e}`)
        );
    }

    getAll(){

        fs.promises.readFile(this.path,'utf-8')
        .then(contenido => {
            let contenidoObj = JSON.parse(contenido);
            console.log(contenidoObj);
        })
        .catch(e => 
            console.log(`Ha ocurrido el siguiente error: ${e}`)
        );
    }

    deleteById(id){

        fs.promises.readFile(this.path,'utf-8')
        .then(contenido => {

            let contenidoObj = JSON.parse(contenido); 
            let validacion = false;

            for (let i = 0; i < contenidoObj.length; i++) {
                if(contenidoObj[i].id == id){
                    contenidoObj.splice(i);
                    console.log('Producto eliminado correctamente');
                    validacion = true;
                }
            }
            
            if(validacion == false){
                console.log('El id ingresado no existe');
            }

            contenidoObj = JSON.stringify(contenidoObj,null,2); 
            
            fs.promises.writeFile(this.path,contenidoObj)
            .then()
            .catch( e => 
                console.log(`Ha ocurrido el siguiente error: ${e}`)
            );

            })
        .catch(e => 
            console.log(`No se ha podido eliminar el producto, error: ${e}`)
        );

    }

    deleteAll(){
        fs.promises.writeFile(this.path,'[]')
        .then(() => console.log('Todos los productos han sido eliminados correctamente'))
        .catch( e => 
            console.log(`Ha ocurrido el siguiente error: ${e}`)
        );
    }
    
}

const prueba = new Contenedor('./productos.txt');

let producto = {
    foto: 12,
    nombre: 'juan'
}

prueba.save(producto);
prueba.save(producto);
prueba.save(producto);
prueba.save(producto);
prueba.save(producto);
prueba.save(producto);
prueba.save(producto);
prueba.save(producto);
prueba.save(producto);
prueba.save(producto);
prueba.save(producto);
// prueba.getById(2);
// prueba.getAll();
// prueba.deleteById(1);
// prueba.deleteAll();

/* [
    {
        "foto": 12,
        "nombre": "juan",
        "id": 1
    },
    {
        "foto": 18,
        "nombre": "david",
        "id": 2
    },
    {
        "foto": 34,
        "nombre": "anto",
        "id": 3
    }
] */ 


/* save(item){

    fs.promises.readFile(this.path,'utf-8')
    .then(contenido => {

        if(contenido == '[]'){
            item.id = Contenedor.id; 
            let itemStr = JSON.stringify(item,null,2);
            Contenedor.id++;
            
            fs.promises.writeFile(this.path,itemStr)
            .then( () => {
                console.log('Guardado con exito') ;
                console.log(`El id asignado al producto es: ${item.id}`);
            })
            .catch( e => 
                console.log(`Ha ocurrido el siguiente error: ${e}`)
            );
        }else{
            item.id = Contenedor.id;
            Contenedor.id++;
            let contenidoObj = JSON.parse(contenido); 
            contenidoObj.push(item);
            contenidoObj = JSON.stringify(contenidoObj,null,2);

            fs.promises.writeFile(this.path,contenidoObj)
            .then( () => {
                console.log('Guardado con exito') ;
                console.log(`El id asignado al producto es: ${item.id}`);
            })
            .catch( e => 
                console.log(`Ha ocurrido el siguiente error: ${e}`)
            );
        }
        
    })
    .catch(e => 
        console.log(`Ha ocurrido el siguiente error: ${e}`)
    );

} */