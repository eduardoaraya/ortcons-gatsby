import styled from "styled-components"

export const SectionAbout = styled.section`
  min-height: 600px;
  margin-top: 130px;
  background: #f9f9f9;
  /* background:rgba(19,18,21); */
  position: relative;
  @media (max-width: 1140px) {
    margin-top: 80px;
    .wrapper {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
  }
  .box-about {
    height: 100%;
    width: 50%;
    min-width: 600px;
    padding: 155px;
    @media (max-width: 1140px) {
      padding: 75px;
      width: 100%;
    }
    @media (max-width: 900px) {
      min-width: 100%;
      padding: 45px 35px;
    }
    .description {
      line-height: 45px;
    }
  }
`

export const ImageBanner = styled.div`
  width: 50%;
  min-height: 600px;
  min-width: 600px;
  display: flex;
  flex: 1;
  background: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 900px) {
    min-width: 100%;
    width: 100%;
    min-height: 350px;
    background-position: right;
  }
`
