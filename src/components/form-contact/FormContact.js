import React from 'react';
import styled from 'styled-components';

import Input from '../input/input'
import { Button } from '../../shared/styled-shared'

const Form = styled.form`
    /* background:red; */
    position:relative;
    z-index:999;
    grid-column:3/5;
    grid-row:2/3;
    padding:15px;
    margin:0;
    button{
        float:right;
        margin:20px 0px;
        font-size:.85em;
    }
`

export default function FormContact() {
    return (
        <Form>
            <Input placeholder="Nome completo" type="text"></Input>
            <Input placeholder="E-mail" type="email"></Input>
            <Input placeholder="Telefone" type="text"></Input>
            <Button background="#F6A500" color="#FFF">Enviar</Button>
        </Form>
    );
}
