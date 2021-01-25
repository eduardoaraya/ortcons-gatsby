import styled from "styled-components"

export const SectionDevelopment = styled.section`
  width: 100%;
  min-height: 540px;
  background: #222;
  @media (max-width: 1140px) {
    height: auto;
    min-height: 340px;
  }
  .wrapper {
    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
`

export const Box = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 540px;
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &.filter-black:before {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.54);
    transition: 0.4s;
  }
  @media (max-width: 1140px) {
    height: auto;
    min-height: 340px;
  }
  @media (max-width: 900px) {
    height: auto;
    min-height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SectionAbout = styled.section`
  width: 100%;
  min-height: 683px;
  background: #e5e5e5;
  padding: 105px 0;
  @media (max-width: 900px) {
    padding: 15px 0;
  }
  .wrapper {
    @media (max-width: 1140px) {
      flex-wrap: wrap;
      padding: 15px 45px;
    }
    .right {
      @media (max-width: 900px) {
        padding: 15px;
      }
    }
  }
`

export const WrapperAboutText = styled.div`
  padding: 45px 10px;
  @media (max-width: 1140px) {
    height: auto;
    h1 {
      font-size: 1.5em;
    }
  }
  .about-left {
    font-size: 2em;
    line-height: 45px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  .about-right {
    font-size: 0.85em;
    letter-spacing: 0.03em;
    @media (max-width: 1140px) {
      font-size: 1em;
    }
  }
  &.right {
    padding-top: 105px;
    padding-left: 85px;
  }
`
