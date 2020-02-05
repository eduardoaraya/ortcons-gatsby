import styled from 'styled-components';


export const Footer = styled.footer`
    width:100%;
    height:auto;
    background:#4D4E50;
    background-image:url(${props => props.backgroundImage});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
`

export const Logo = styled.img`
    width:195.35px;
    height:56px;
    transition:.3s;
    &.active{
        width:100px;
        height:26px;
    }
`

export const Grid = styled.div`
    display:grid;
    grid-template-columns:1fr 1.5fr 1.5fr 200px;
    grid-template-rows:200px 250px 286px;
    padding-top:105px;
    .social{
        flex-direction:row-reverse;
        li{
            margin:0 5px;
            cursor: pointer;
            a {
                &:hover{
                    svg{
                    }
                }
                svg{
                    width:30px;
                    height:30px;
                }
            }
        }
    }
    .separator{
        padding:20px;
        h4,h2{
            font-size:.75em;
            text-transform:uppercase;
        }
        h2{
            font-weight:normal;
        }
        p{
            font-size:.75em;
        }
    }
    .btn-up{
        padding:0px;
        width:50px;
        height:50px;
        position: absolute;
        bottom:0;
        right:0;
    }
    .all-rights-reserved{
        position:absolute;
        bottom:0;
    }
    .icon-right{
        position:absolute;
        bottom:35px;
        right:0;
    }
`