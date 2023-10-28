import React, { useEffect, useState } from 'react'

import clienteAxios from '../components/axios/ClienteAxios'

import Header from '../components/Header'
import TareaIndividual from '../components/TareaIndividual'
import { SimpleGrid } from '@chakra-ui/react'

function ListaTareas(){

    const[dataTareas, setDataTareas] = useState([])

    useEffect(() => {
        
        clienteAxios.get('ver/tareas')
        .then(res => {
            console.log(res.data, "tareas")
            setDataTareas(res.data)
        })
    }, [])

    useEffect(() => {
    }, [])


    let listaTareasPen = dataTareas.map(tarea => {
        if(tarea.estado === 'pendiente'){
            return(
                <TareaIndividual key={tarea._id} dataTareas={dataTareas} setDataTareas={setDataTareas} tarea={tarea}></TareaIndividual>
            )
        }
    })

    let listaTareasFin = dataTareas.map(tarea => {
        if(tarea.estado === 'completado'){
            return(
                <TareaIndividual key={tarea._id} dataTareas={dataTareas} setDataTareas={setDataTareas} tarea={tarea}></TareaIndividual>
            )
        }
    })

    return(
        <>
            <Header></Header>
            <div className='container cont-fondo'>
                <h3 className='pb-4'>Lista de tareas</h3>

                <h4 className='pt-4 pb-1'>Tareas pendientes</h4>
                <div className='cards'>
                <SimpleGrid spacing={4} templateColumns='repeat(4, minmax(300px, 300px))'>
                    {listaTareasPen.length !== 0 ? listaTareasPen : <p className='mt-3 mb-5'>No hay tareas pendientes</p>}
                </SimpleGrid>
                </div>

                <h4 className='pt-5 pb-1'>Tareas Finalizadas</h4>
                <div className='cards'>
                <SimpleGrid spacing={4} templateColumns='repeat(4, minmax(300px, 300px))'>
                    {listaTareasFin.length !== 0 ? listaTareasFin : <p className='mt-3 mb-5'>No hay tareas finalizadas</p>}
                </SimpleGrid>
                </div>

            </div>
        </>
    )
}

export default ListaTareas