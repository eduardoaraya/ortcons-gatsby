import React from 'react';
import styled from 'styled-components';
// import { Container } from './styles';

const CustomInput = styled.input`
    border:none;
    outline:none;
    border-bottom:solid 2px #222;
    background:transparent;
    height:55px;
    width:100%;
    padding:5px;
`

export default function Input({ value, placeholder }) {
    return (
        <CustomInput value={value} placeholder={placeholder} ></CustomInput>
    );
}
