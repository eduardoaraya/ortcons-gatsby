import React from 'react';
import styled from 'styled-components';

import Input from '../input/input'

const Form = styled.form`
    padding:105px 75px;
`

export default function FormContact() {
    return (
        <Form>
            <Input placeholder="Nome completo" type="text"></Input>
            <Input placeholder="E-mail" type="email"></Input>
            <Input placeholder="Telefone" type="text"></Input>
        </Form>
    );
}
