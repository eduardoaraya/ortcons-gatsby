import styled from 'styled-components';

export const ContentBanner = styled.div`
    background-image:url(${ props => props.image});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    height:100vh;
    background-color:#222;
    border-bottom:1px solid #E5E5E5;
`

export const WrapperBoxCenter = styled.div`
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding-top:285px;
`


export const BoxCenter = styled.div`
    width: 575px;
    height: 350px;
    border:2px solid #FFF;
    padding:15px 45px;
    background:rgba(0,0,0,0.35);
    .intro{
        h1{
            color:#FFF;
            span{
                display:block;
                margin:10px 0px;
                &.txt-1{
                    text-align:center;
                    font-size:.65em;
                    font-weight:100;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    text-transform: uppercase;
                    line-height: 20px;
                    font-feature-settings: 'pnum' on, 'lnum' on;
                    font-weight: 600;
                    font-size: .45em;   
                    animation:fadeLeft 1s forwards;
                    &:after{
                        position:relative;
                        display:block;
                        content:'';
                        width:10px;
                        height:2px;
                        background:#FFF;
                        left:10px;      
                                   
                    }
                    &:before{
                        position:relative;
                        right:10px;                        
                        display:block;
                        content:'';
                        width:10px;
                        height:2px;
                        background:#FFF;
                        
                    }
                }
                &.txt-2{
                    opacity:0;
                    text-align: center;
                    font-weight: bolder;
                    font-weight: 900;
                    font-size: 1.8em;
                    font-feature-settings: 'pnum' on, 'lnum' on;
                    text-transform: uppercase;
                    animation:fadeLeft 1s .5s forwards;
                }
                &.txt-3{
                    opacity:0;
                    text-align: center;
                    font-weight: 100;
                    line-height: 7px;
                    font-size: 36px;
                    line-height: 20px;
                    letter-spacing: 0.03em;
                    font-feature-settings: 'pnum' on, 'lnum' on;
                    color: #F6A500;
                    margin-top:-21px;
                    animation:fadeLeft 1s 1s forwards;
                }
            }
        }
    }
    .info{
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-direction:row;
        width:100%;
        border-top: 1px solid #FFF;
        border-bottom: 1px solid #FFF;
        height:75px;
        .item{
            flex:1;
            display:flex;
            justify-content:center;
            align-items:center;
            img{
                margin:0;
                margin-right:5px;
            }
            p{
                color:#FFF;
                margin:0;
            }
        }
    }
    .call-action{
        height:45px;
        width:80%;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        padding:0 25px;
        transition:.3s;
        margin:15px auto;
        border-radius:4px;
        cursor: pointer;
        &:hover{
            background:rgba(250,250,250,.5);
            a,svg path{
                color:#FFF;
            }
        }
        .link{
            color:#FFF;
            text-decoration:none;
            flex:1;
            text-transform:uppercase;
            font-size:.85em;
            font-weight:bold;
            transition:.3s;
        }
    }
`

export const BoxBottom = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:205px;
    height:60px;
    .chat-btn{
        background-color:rgba(250,250,250,.25);
        padding:15px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:5px;
        width:50px;
        cursor: pointer;
        height:50px;
        box-shadow:0px 10px 5px -5px rgba(0,0,0,.35);
        transition:.3s;
        &:hover{
            box-shadow:0px 1px 5px -5px rgba(0,0,0,.35);
        }
        svg{
            width:35px;
            height:35px;
        }
    }
`