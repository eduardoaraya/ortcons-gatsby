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
      /* transition: .3s;
      transform: translate3d(-50px, 0, 0) scale(1.2); */
      box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.15);
    }
    /* .item {
      transform: translate3d(-85px, 0, 0);
    } */
  }
  .details-area {
    position: relative;
    .apartment-list {
      width: 100%;
      transition: .3s;
      position: relative;
      padding-left: 55px;
      @media (max-width: 900px) {
        padding-left: 15px;
      }
      @media (max-width: 390px) {
        padding-left: 5px;
      }
    }
    .close-icon {
      width: 30px;
      height: 30px;
      background: #FFF;
      position: absolute;
      top: 25px;
      left: 5px;
      border-radius: 50%;
      border: solid 2px #ddd;
      z-index: 99;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      div {
        width: 100%;
        height: 2px;
        background: #ddd;
        z-index: 999;
      }
      @media (max-width: 900px) {
        left: inherit;
        right: 35px;
      }
    }
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
    transition: .3s;
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
  padding: 5px 20px;
  width: 80%;
  position: relative;
  /* transform: translate3d(-100px, 0, 0); */
  margin: 10px 0px;
  font-weight: bolder;
  color: #666;
  border: solid 1px #DDD;
  cursor: pointer;
  transition: .3s;
  opacity: 0;
  min-width: 140px;
  &.show {
    opacity: 1;
  }
  &:hover {
    background-color: rgba(250, 250, 250, 0.13);
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.29);
    color: #222;
    &::before {
      background-color: #FFF;
    }
  }
  @media (max-width: 900px) {
    margin: 5px 0px;
    width: 85%;
    padding: 5px 10px;
  }
  @media (max-width: 390px) {
    font-size: .74em;
  }
`
