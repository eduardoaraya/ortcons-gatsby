import styled from 'styled-components';

export const HeaderTop = styled.header`
    width:100%;
    height:130px;
    position:fixed;
    z-index:9999;
    transition:.3s;
    &.active{
        background:rgba(0,0,0,.85);
        /* height:100px;    */
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
    height:100%;
    padding:0;
    display:flex;
    align-items:center;
    list-style:none;
    flex:1;
`

export const MenuItem = styled.li`
    padding:10px 15px;
    a{
        text-decoration:none;
        color:#FFF;
        text-transform:uppercase;
        font-size:.75em;
    }
`
