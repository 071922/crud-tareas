// import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'


function TareaIndividual(props){

    const {
        tarea,
        dataTareas,
        setDataTareas
    } = props;
    
    function borrarTarea(indicador){

        axios.delete(`http://localhost:5000/editar/borrartarea/${indicador}`)

        Swal.fire({
            title: 'Tarea',
            text: 'Tarea Eliminada',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#F66A0D'
        }).then((res) => {
            setDataTareas(dataTareas.filter((item) => item.indicador !== indicador))
        });
    }

    async function actualizarTarea(indicador){

        await axios.put(`http://localhost:5000/editar/actualizartarea/${indicador}`)

        Swal.fire({
            title: 'Tarea',
            text: 'Tarea Finalizada',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#F66A0D'
        }).then((res) => {
            setDataTareas(dataTareas.map((item) => item.indicador === indicador ? {...item, estado: 'completado'} : item) )
        });
    }

    return(
        <Card>
            <CardHeader>
                <Heading size='md'>indicador {tarea.indicador}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{tarea.descripcion}</Text>
                <Text>{tarea.estado}</Text>
            </CardBody>
            <CardFooter sx={{display: 'flex', justifyContent: 'space-between'}}>

                {tarea.estado === 'pendiente' ? <Button onClick={() => {actualizarTarea(tarea.indicador)}} colorScheme='blue'>Completar</Button>
                :<Button colorScheme='green'>Finalizada</Button>
                }
                
                <Button onClick={() => {borrarTarea(tarea.indicador)}}>Eliminar</Button>

            </CardFooter>
        </Card>
    )
}

export default TareaIndividual