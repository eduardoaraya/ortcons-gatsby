import styled from 'styled-components';

export const SectionDevelopment = styled.section`
    min-height:800px;
    margin-top:130px;
`

export const Box = styled.div`
    position:relative;
    width:100%;
    height:auto;
    z-index: 99;
    background:#E5E5E5;
    &.bg{
        grid-column:1/3;
        background:url(${ (props) => props.background});
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
    }
    &.content{
        grid-column:3/4;
        padding:80px 75px;
        p{
            line-height:36px;
        }
    }
    &.info{
        grid-column:4/5;
        /* background:#FFF; */
        .item{
            margin:10px;
            width:100px;
            height:100px;
            /* background: #131416; */
            border:4px solid #F6A500;
            align-self:flex-start;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            border-radius:5px;
            svg,p{
                margin:0;
            }
            svg{
                width:50px;
                height:50px;
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
    }
`