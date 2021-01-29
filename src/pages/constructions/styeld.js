import styled from "styled-components"

export const DevelopmentBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  flex: 1;
  background: #fff;
  align-items: center;
  margin: 25px 0px;
  box-shadow: 0px 10px 25px -5px rgba(0, 0, 0, 0.15);
  @media (max-width: 1140px) {
    max-height: 300px;
    overflow: hidden;
  }
  @media (max-width: 900px) {
    max-height: 100%;
    flex-direction: column;
  }
  &.hide-info {
    .default-img {
      transform: translate3d(-100px, 0, 0);
      box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.15);
    }
  }
  .apartment-list {
    width: 100%;
    transition: .3s;
  }
  .content-construction {
    transition: .3s;
  }
`



export const SectionDevelopmtens = styled.section`
  min-height: 600px;
  background: #e5e5e5;
  margin-top: 130px;
  padding: 75px 0px;
  position: relative;
  @media (max-width: 1140px) {
    margin-top: 80px;
    padding: 75px 35px;
  }
`

export const Image = styled.img`
  width: 50%;
  margin: 0;
  position: relative;
  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 100%;
  padding-left: 20px;
  display: grid;
  grid-template-columns: 100px 1fr;

  .item {
    grid-column: 1/2;
    width: 80px;
    height: 80px;
    margin: 10px 0px;
    border-radius: 4px;
    border: 2px solid #f6a500;
    align-content: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    svg,
    p {
      margin: 0;
    }
    svg {
      width: 25px;
      height: 25px;
      path {
        stroke: #131416;
        fill: #f6a500;
      }
    }
    p {
      font-weight: bold;
      color: #131416;
    }
  }
`

export const Info = styled.div`
  grid-column: 2/3;
  padding: 20px;
  border-left: 2px solid #ddd;
  h2,
  small {
    margin: 0px;
    text-transform: uppercase;
    color: #131416;
    margin: 10px 0;
    @media (max-width: 1140px) {
      font-size: 0.68em;
    }
  }
  small {
    color: #f6a500;
    font-weight: bold;
  }
  p {
    font-size: 0.851em;
  }
`
export const Apartment = styled.div`
  padding: 20px;
  text-transform: uppercase;
  width: 100%;
  position: relative;
  transform: translate3d(-100px, 0, 0);
  margin: 10px 0px;
  font-weight: bolder;
  color: #666;
  border-bottom: solid 1px #DDD;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background-color: rgba(250, 250, 250, 0.13);
    color: #222;
    &::before {
      background-color: #FFF;
    }
  }
  &::before {
    transition: .3s;
    content: '';
    padding: 20px;
    z-index: 99;
    position: absolute;
    left: -50px;
    top: 15px;
    background-color: rgba(0, 0, 0, 0.73);
    border-radius: 50%;
    border: solid 1px #DDD;
    opacity:0.5;
  }
`
