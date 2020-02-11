import React from 'react';
import Input from '../input/input';
import styled from 'styled-components';

import { Button } from '../../shared/styled-shared';
const Form = styled.form`
    background:#131416;
    position:relative;
    z-index:999;
    grid-column:3/5;
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    min-height:750px;
    padding-left:105px;
    h3,label,input{
        color:#FFF;
    }
    .header-form{
        h3{
            color:#F6A500;
            font-size:1.2em;
            text-transform:uppercase;
            font-weight:bold;
        }
    }
    button{
        float:right;
        margin:20px 0px;
        font-size:.85em;
    }
    .group{
        padding:20px 0px;
        label{
            font-weight:bold;
        }
    }
`

export default function FormHaveInterest() {
    return (
        <Form>
            <div className="center">
                <div className="header-form">
                    <h3>Tenho Interesse</h3>
                </div>
                <div className="group">
                    <label for="name">Nome completo:</label>
                    <Input id="name" name="name" type="text"></Input>
                </div>
                <div className="group">
                    <label for="tel">Telefone:</label>
                    <Input id="tel" name="tel" type="text"></Input>
                </div>
                <div className="group">
                    <label for="email">E-mail:</label>
                    <Input id="email" name="email" type="text"></Input>
                </div>
                <Button> Enviar </Button>
            </div>
        </Form>
    )
}
