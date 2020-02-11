import styled from "styled-components"

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  background: #4d4e50;
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Logo = styled.img`
  width: 195.35px;
  height: 56px;
  transition: 0.3s;
  &.active {
    width: 100px;
    height: 26px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 200px;
  grid-template-rows: 200px 250px 286px;
  padding-top: 105px;
  @media (max-width: 1140px) {
    display: flex;
    flex-direction: column;
    padding: 105px 35px 0 35px;
  }
  .social {
    @media (max-width: 1140px) {
      display: flex;
      flex-direction: row;
      padding: 20px;
    }
    flex-direction: row-reverse;
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
    padding: 20px;
    h4,
    h2 {
      font-size: 0.75em;
      text-transform: uppercase;
    }
    h2 {
      font-weight: normal;
    }
    p {
      font-size: 0.75em;
    }
  }
  .btn-up {
    @media (max-width: 1140px) {
      position: absolute;
      margin: 25px;
    }
    padding: 0px;
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .all-rights-reserved {
    @media (max-width: 1140px) {
      position: relative;
    }
    position: absolute;
    bottom: 0;
  }
  .icon-right {
    @media (max-width: 1140px) {
      margin: 25px;
    }
    position: absolute;
    bottom: 15px;
    right: 0;
  }
`
