import styled from 'styled-components';

export const SectionAbout = styled.section`
    min-height:600px;
    margin-top:130px;
    background: #F9F9F9;
    /* background:rgba(19,18,21); */
    position:relative;
    .box-about{
        height:100%;
        width:50%;
        min-width:600px;
        padding:155px;
        .description{
            line-height:45px;
        }
    }
`

export const ImageBanner = styled.div`
    width:50%;
    min-height:600px;
    display:flex;
    flex:1;
    background:url(${(props) => props.backgroundImage});
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
`




