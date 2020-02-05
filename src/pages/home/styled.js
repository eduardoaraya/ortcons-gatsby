import styled from 'styled-components';

export const SectionDevelopment = styled.section`
    width:100%;
    min-height:540px;
    background:#222;
    div:first-child{
        border-right:1px solid #E5E5E5;
    }
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

export const TitleAbout = styled.h1`
    color:#F6A500;
    text-transform:uppercase;
    font-size:1em;
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