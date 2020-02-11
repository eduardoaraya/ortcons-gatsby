import React from "react"
import styled from "styled-components"
// import { Container } from './styles';

const CustomInput = styled.input`
  border: none;
  outline: none;
  color: #fff;
  background: #222;
  height: 55px;
  width: 100%;
  padding: 10px;
  margin: 5px 0px;
`

export default function Input({ value, placeholder, ...props }) {
  return (
    <CustomInput
      value={value}
      placeholder={placeholder}
      {...props}
    ></CustomInput>
  )
}
