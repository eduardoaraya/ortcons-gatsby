import styled from 'styled-components';

export const BoxDevelopment = styled.div`
    display:flex;
    flex-direction:row;
    height:100%;
    width:100%;
    flex:1;
    background:#FFF;
    align-items:center;
    margin:25px 0px;
    box-shadow:0px 10px 25px -5px rgba(0,0,0,0.15);
    @media(max-width:1140px){
        max-height:300px;
        overflow:hidden;
    }
`

export const SectionDevelopmtens = styled.section`
    min-height:600px;
    background:#E5E5E5;
    margin-top:130px;
    padding:75px 0px;
    position:relative;
    @media(max-width:1140px){
        margin-top:80px;
        padding:75px 35px;
    }
`

export const Image = styled.img`
    width:50%;
    margin:0;
    position:relative;
  
`

export const Content = styled.div`
    width:100%;
    padding-left:20px;
    display:grid;
    grid-template-columns:100px 1fr;

    .item{
        grid-column:1/2;
        width:80px;
        height:80px;
        margin:10px 0px;
        border-radius:4px;
        border:2px solid #F6A500;
        align-content:center;
        justify-self:center;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius:5px;
            svg,p{
                margin:0;
            }
            svg{
                width:25px;
                height:25px;
                path{
                    stroke:#131416;
                    fill:#F6A500;
                }
            }
            p{
                font-weight:bold;
                color:#131416;
            }
    }
`

export const Info = styled.div`
    grid-column:2/3;
    padding:20px;
    border-left:2px solid #DDD;
    h2,small{
        margin:0px;
        text-transform:uppercase;
        color:#131416;
        margin:10px 0;
        @media(max-width:1140px){
            font-size:.68em;
        }
    }
    small{
        color:#F6A500;
        font-weight:bold;
    }
    p{
        font-size:.851em;
    }
` 