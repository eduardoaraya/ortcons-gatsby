import React from 'react';

import styled from 'styled-components';

import Input from '../input/input'
import { Button, TitleAbout } from '../../shared/styled-shared'

const Form = styled.form`
    position:relative;
    z-index:999;
    padding:15px;
    margin:0;
    max-width:640px;
    margin:0 auto;
    button{
        float:right;
        margin:20px 0px;
        font-size:.85em;
    }
`

const Wrapper = styled.div`
    padding:105px 45px;
    position:relative;
    width:100%;
    height:auto;
    background:#131416;
    border-top:solid 5px #F6A500;
`

export default function FormRequestWorking() {
    return (
        <Wrapper>
            <Form>
                <TitleAbout>Trabalhe conosco</TitleAbout>
                <Input placeholder="Nome completo" type="text"></Input>
                <Input placeholder="E-mail" type="email"></Input>
                <Input placeholder="Telefone" type="text"></Input>
                <Input type="file"></Input>
                <Button background="#F6A500" color="#FFF">Enviar</Button>
            </Form>
        </Wrapper>
    );
}
