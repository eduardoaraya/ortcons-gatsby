import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`

export const TitleAbout = styled.h1`
  color: #f6a500;
  text-transform: uppercase;
  font-size: ${props => (props.size ? props.size : "1em")};
  display: flex;
  align-items: center;
  &.black-color {
    color: #131416;
  }
  &:before {
    content: "";
    display: block;
    width: 100px;
    height: 2.5px;
    background: #f6a500;
    margin-right: 25px;
  }
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  position: relative;
  height: 100%;
`

export const FlexList = styled.ul`
  display: flex;
  margin: 0;
  position: relative;
  height: 100%;
  flex-direction: ${props => props.flow};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'no-wrap'};
  padding: 0;
  list-style: none;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "inherit"};
`

export const Column = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
`

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  background: ${props => props.background};
  border: none;
  color: ${props => props.color};
  border-radius: 4px;
  text-transform: uppercase;
  padding: 10px 25px;
  font-size: ${props => (props.fontSize ? props.fontSize : "1em")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.5px;
  &.min {
    font-size: 0.65em;
    padding: 5px 12.5px;
  }
  svg {
    margin: 0;
  }
  &.btn-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      path {
        /* stroke:#131416;
                fill:#F6A500; */
        transition: 0.4s;
      }
    }
  }
  &:hover {
    color: #f6a500;
    background-color: #131416;
    svg {
      path {
        stroke: #131416;
        fill: #f6a500;
        transition: 0.4s;
      }
    }
  }
`

export const Phones = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media(max-width:1105px){
    display:none;
  }
`

export const Phone = styled.div`
  user-select:none;
  outline:none;
  position: relative;
  z-index: 999;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 0.65em;
  font-family: "Raleway", "Arial";
  display: flex;
  align-items: center;
  border-radius: 5px;
  max-width: 200px;
  width:100%;
  &.active {
    transition: 0.3s;
    background: rgba(250, 250, 250, 0.32);
    &:hover {
      span,
      svg {
        color: #fff;
      }
      background: rgba(70, 250, 250, 0.7);
    }
  }
  span {
    color: #fff;
    margin-left: 15px;
    width:100px;
    font-weight: bold;
    text-transform: uppercase;
  }
`

export const CallAction = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 350px;
  margin: 0 auto;
  border: ${props => (props.border ? props.border : "none")};
  user-select: none;
  transition: 0.3s;
  padding: 15px 25px;
  a {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: rgba(250, 250, 250, 0.5);
    a,
    svg path {
      color: #fff;
    }
  }
  a {
    height: 100%;
    color: #fff;
    text-decoration: none;
    flex: 1;
    text-transform: uppercase;
    font-size: 0.85em;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
  }
`

export const Box = styled.div`
  position: relative;
  background: url(${props => props.backgroundImage ? props.backgroundImage : "#E5E5E5"});
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 657px 1fr;
  @media (max-width: 1140px) {
    grid-template-columns: 1fr;
  }
  grid-auto-rows: auto;
  width: 100%;
  height: 100%;
  position: relative;
  background: ${props => (props.background ? props.background : "transparent")};
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: bolder;
  color: #131416;
`
