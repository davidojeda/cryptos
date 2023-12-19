import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'


const InputSubmit = styled.input`
    background-color: #9497ff;
    border:none;
    display:block;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;   
    transition: background-color .3s ease-in-out;
    
    
    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`


const Formulario = () => {



    const [SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);

    return (
        <form>
        <SelectMonedas/>
        <InputSubmit type="submit" value="Cotizar" />
        </form>
    )
}

export default Formulario
