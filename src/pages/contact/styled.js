import styled from "styled-components"

export const SectionContact = styled.section`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-top: 200px;
  background: #4d4e50;
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr 1fr;
    @media (max-width: 1140px) {
      padding: 0 35px;
    }
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
  .contact-title {
    text-transform: uppercase;
    grid-row: 1/2;
    grid-column: 3/5;
    padding: 15px;
    @media (max-width: 900px) {
      grid-column: 1/2;
      grid-row: auto;
    }
  }
  .phrase {
    grid-row: 3/5;
    grid-column: 1/2;
    @media (max-width: 900px) {
      grid-column: 1/2;
      grid-row: auto;
    }
  }
  .person {
    grid-row: 1/5;
    grid-column: 1/2;
    /* border-right:solid 2px #F6A500; */
    @media (max-width: 900px) {
      grid-column: 1/2;
      grid-row: auto;
    }
  }
  .social {
    grid-row: 4/5;
    grid-column: 4/5;
    flex-direction: row-reverse;
    @media (max-width: 900px) {
      grid-column: 1/2;
      grid-row: auto;
      padding: 24px;
    }
    li {
      margin: 0 5px;
      cursor: pointer;
      a {
        &:hover {
          svg {
          }
        }
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .separator {
    font-size: 0.75em;
    h4 {
      text-transform: uppercase;
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  /* background-color:#131416; */
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 0.65em;
    text-align: center;
    margin: 0px;
  }
  @media (max-width: 900px) {
    position: relative;
  }
`
