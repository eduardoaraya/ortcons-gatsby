import styled from 'styled-components';

export const SectionDevelopment = styled.section`
    min-height:800px;
    margin-top:130px;
    .bg{
        grid-column:1/3;
        background:url(${ (props) => props.background});
        background-position:center;
        background-repeat:no-repeat;
        background-size:cover;
        background:#131416;
    }
`

export const Box = styled.div`
    position:relative;
    width:100%;
    height:auto;
    z-index: 99;
    background:#E5E5E5;
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

export const WrapperImage = styled.div`
    width:100%;
    height:100%;
    grid-column:2/3;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#131416;
    box-shadow:inset 15px 0px 10px -15px rgba(0,0,0,0.85);
    padding:15px;
    position: relative;
    .btn-zoom{
        position:absolute;
        bottom:25%;
        right:15px;
    }
`

export const MaxImage = styled.img`
    margin:0;
`

export const MinImage = styled.img`
    flex:1;
    display:block;
    margin:10px auto;
    position:relative;
    cursor: pointer;
    opacity:.2;
    transition:.3s;
    &:hover,&.active{
        opacity:1;
    }
`

export const ListMin = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin:0;
    height:auto;
    max-height:calc(100vh - 130px);
    width:100%;
    overflow:hidden;
    grid-column:1/2;
    overflow-y:scroll;
    background:#131416;
    padding:50px;
    padding-right:0;
    /* width */
    &::-webkit-scrollbar {
     width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
    background: #131416;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
    background: #F6A500;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #F6A500;
    }
`