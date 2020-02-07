import styled from 'styled-components';
import { Link } from 'gatsby';

export const SectionDevelopment = styled.section`
    width:100%;
    min-height:540px;
    background:#222;
`

export const Box = styled.div`
    position:relative;
    display:block;
    width:100%;
    height:540px;
    background-image:url(${(props) => props.backgroundImage});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    &.filter-black:before{
        position: absolute;
        display:block;
        content:'';
        width:100%;
        height:100%;
        background:rgba(0,0,0,.54);
        transition:.4s;
    }
`

export const SectionAbout = styled.section`
    width:100%;
    min-height:683px;
    background:#E5E5E5;
    padding:105px 0;
`


export const WrapperAboutText = styled.div`
    padding:45px 10px;
    .about-left{
        font-size:2em;
        line-height: 45px;
        letter-spacing: 0.03em;
        text-transform:uppercase;
    }
    .about-right{
        font-size:.85em;
        letter-spacing: 0.03em;
    }
    &.right{
        padding-top:105px;
        padding-left:85px;
    }
`