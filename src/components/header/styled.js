import styled from 'styled-components';

export const HeaderTop = styled.header`
    width:100%;
    height:130px;
    position:fixed;
    z-index:9999;
    transition:.3s;
    top:0;
    left:0;
    background:${ (props) => props.transparent ? 'transparent' : 'rgba(19,18,21)'};
    &.active{
        background:rgba(19,18,21,.85);
        box-shadow:0px 5px 8px -5px rgba(19,18,21,.75);
    }
`

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:150px;
    max-width:1140px;
    margin:0 auto;
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

export const Navigator = styled.nav`
    height:100%;
    width:calc(100% - 250px);
    display:flex;
    flex-direction:row;
    a{
        transition:.3s;
    }
    &.active{
        a{
            font-size:.69em;
        }
    }
`

export const MenuList = styled.ul`
    position:relative;
    width:100%;
    height:130px;
    padding:0;
    display:flex;
    align-items:center;
    list-style:none;
    flex:1;
`

export const MenuItem = styled.li`
    margin:0px;
    height:100%;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:.3s;
    user-select:none;
    cursor: pointer;
    a{
        box-shadow: inset 0 15px 1px -5px transparent;
        padding:10px 25px;
        height:100%;    
        display:block;
        flex:1;
        text-decoration:none;
        color:#FFF;
        text-transform:uppercase;
        font-size:.75em;
        display:flex;
        align-items:center;
        justify-content:center;
        &.active,&:hover{
            box-shadow: inset 0 10px 1px -5px #F6A500;
            color:#F6A500;
        }
    }
`
