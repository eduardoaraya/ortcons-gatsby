import styled from 'styled-components';

export const SectionDevelopment = styled.section`
    width:100%;
    min-height:540px;
    background:#222;
    @media(max-width:1140px){
        height:auto;
        min-height:340px;
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
    @media(max-width:1140px){
        height:auto;
        min-height:340px;
    }
`

export const SectionAbout = styled.section`
    width:100%;
    min-height:683px;
    background:#E5E5E5;
    padding:105px 0;
    .wrapper{
        @media(max-width:1140px){
            flex-wrap:wrap;
            padding:75px;
        }
    }
`


export const WrapperAboutText = styled.div`
    padding:45px 10px;
    @media(max-width:1140px){
        flex-wrap:wrap;
        padding:75px;
        height:auto;
        h1{
            font-size:1.5em;
        }
    }
    .about-left{
        font-size:2em;
        line-height: 45px;
        letter-spacing: 0.03em;
        text-transform:uppercase;
    }
    .about-right{
        font-size:.85em;
        letter-spacing: 0.03em;
        @media(max-width:1140px){
         font-size:1em;
        }
    }
    &.right{
        padding-top:105px;
        padding-left:85px;
    }
`