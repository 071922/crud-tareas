const express = require('express');

const app = express()


app.listen(5000, () => {
    // console.log('server corriendo en puerto 5000')
});

let lista = []
let opcion


const mostrarMenu = () => {

    return new Promise ( resolve => {
        console.clear()
        console.log("Lista de tareas\n", lista, '\n')

        console.log("1) Añadir tareas")
        console.log("2) Eliminar tarea")
        console.log("3) Completar tarea")
        console.log("4) Salir\n")

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion: ', (opt) => {
            opcion = opt
            readline.close()
            resolve(opt)
        })
    });

}

const ejecutarOpcion = async () => {
    switch (opcion) {
        case '1':
            await agregarTarea()
            break

        case '2':
            await borrarTarea()
            break

        case '3':
            await completarTarea()
            break
    }
}

const agregarTarea = () => {
    return new Promise ( resolve => {

        console.log("Agregando tarea")

        let indicador, descripcion, estado = 'pendiente'

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Escriba indicador: ', (texto1) => {
            indicador = texto1

            readline.question('Escriba descripcion: ', (texto2) => {
                descripcion = texto2

                console.log('Tarea agregada')
                lista.push({indicador, descripcion, estado})
                readline.close()
                resolve()
            })
        })
    });
}

const borrarTarea = () => {
    return new Promise ( resolve => {

        console.log("Borrando tarea")

        let indicador

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Escriba indicador: ', (texto1) => {
            indicador = texto1

            lista = lista.filter((item) => item.indicador !== indicador)
            console.log("tarea eliminada")
            readline.close()
            resolve()
        })
    });
}

const completarTarea = () => {
    return new Promise ( resolve => {

        console.log("Borrando tarea")

        let indicador

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Escriba indicador: ', (texto1) => {
            indicador = texto1

            for(let i = 0; i < lista.length; i++) {
                if(lista[i].indicador === indicador){
                    lista[i].estado = 'completado'
                }
            }

            console.log("tarea eliminada")
            readline.close()
            resolve()
        })
    });
}

const main = async() => {

    do {
        await mostrarMenu()
        await ejecutarOpcion()

    } while (opcion !== '4');
    
    console.log("fin del programa")
}

main();
