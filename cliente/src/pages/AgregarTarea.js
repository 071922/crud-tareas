import React, { useState } from 'react'
import clienteAxios from '../components/axios/ClienteAxios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header'
import { Box, Button, Input, Stack, Text, Textarea } from '@chakra-ui/react';

function AgregarTarea(){

    const navigate = useNavigate()

    // HOOKS
    const[indicador, setIndicador] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[estado, setEstado] = useState('pendiente')


    function addTarea(){
        
        const body = {
            indicador: indicador,
            descripcion: descripcion,
            estado: estado
        }

        if(indicador.length < 3){
            Swal.fire({
                title: 'Indicador debe contener 3 o mas letras',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#F66A0D'
              })
        }
        else if(indicador!==''){
            
            clienteAxios.post('editar/crearTarea', body)
            .then(res => {

              Swal.fire({
                title: 'Tarea agregada',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#F66A0D'
              }).then((res) => {
                navigate('/') // Realizar la redirección aquí
              });
            })
            .catch(err => {
              console.log(err);
            });

        }
        else{
            Swal.fire({
                icon: 'warning',
                title: 'Porfavor Rellene todos los campos',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#F66A0D'
            })
        }

    }

    return(
        <>
            <Header></Header>
            <div className='container cont-fondo pt-5'>
                <h3>Crear un nueva tarea</h3>

                <form className='mt-5'>

                    <Stack spacing={5}>
                        <Box>
                            <Text fontSize='20px'>
                                Indicador
                            </Text>
                            <Input variant='filled' value={indicador} onChange={(e) => {setIndicador(e.target.value)}} placeholder='Indicador' />
                        </Box>

                        <Box>
                        <Text fontSize='20px'>
                            Descripcion
                        </Text>
                        <Textarea variant='filled' value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}} placeholder='Descripcion' />
                        </Box>
                    </Stack>
                    
                    <Button colorScheme='purple' onClick={addTarea} sx={{marginTop: 5}} variant='solid'>
                        Agregar tarea
                    </Button>

                </form>

            </div>
        </>
    )
}

export default AgregarTarea