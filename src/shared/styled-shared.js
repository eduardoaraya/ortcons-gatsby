import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    max-width:1140px;
    margin:0 auto;
`

export const TitleAbout = styled.h1`
    color:#F6A500;
    text-transform:uppercase;
    font-size:${ (props) => props.size ? props.size : '1em'};
    display:flex;
    align-items:center;
    &:before{
        content:'';
        display:block;
        width:100px;
        height:2.5px;
        background:#F6A500;
        margin-right:25px;
    }
`


export const Flex = styled.div`
    position:relative;
    display:flex;
    position:relative;
    height:100%;
`

export const FlexList = styled.ul`
    display:flex;
    position:relative;
    height:100%;
    flex-direction:${props => props.flow};
    padding:0;
    list-style:none;
`


export const Column = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    height:100%;
`

export const FlexCenter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
`

export const FlexBetween = styled.div`
    display:flex;
    justify-content:space-between;
`

export const Button = styled.button`
    background:${ props => props.background};
    border:none;
    color:${ props => props.color};
    border-radius:4px;
    text-transform:uppercase;
    padding:10px 25px; 
    font-size:${ props => props.fontSize ? props.fontSize : '1em'};
    width:${ props => props.width ? props.width : 'auto'};
    cursor: pointer;
    font-weight:bold;
    &.btn-icon{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`

export const Phones = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`

export const Phone = styled.div`
    position:relative;
    z-index:999;
    padding:10px 20px;
    cursor: pointer;
    font-size:.65em;
    font-family:'Raleway','Arial';
    display:flex;
    align-items:center;
    border-radius:5px;
    max-width:170px;
    &.active{
        transition:.3s;
        background:rgba(250,250,250,.32);
        &:hover{
            span,svg{
                color:#FFF;
            }
            background:rgba(70,250,250,.7);
        }
    }
    span{
        color:#FFF;
        margin-left:15px;
        font-weight:bold;
        text-transform:uppercase;
    }

`

export const CallAction = styled.div`
        position:relative;
        height:auto;
        width:365px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        padding:15px 25px;
        max-width:350px;
        margin:0 auto;
        border:${ props => props.border ? props.border : 'none'};
        user-select:none;
        transition:.3s;
        &:hover{
            background:rgba(0,0,0,0.5);
        }
    a{
        height:100%;
        color:#FFF;
        text-decoration:none;
        flex:1;
        text-transform:uppercase;
        font-size:.85em;
        font-weight:bold;
        transition:.3s;
        cursor: pointer;
        
    }
`

export const Box = styled.div`
    position:relative;
    background:url(${(props) => props.backgroundImage ? props.backgroundImage : '#E5E5E5'});
    display:block;
    width:${(props) => props.width};
    height:${(props) => props.height};
    padding:${(props) => props.padding};
    margin:${(props) => props.margin};
`
