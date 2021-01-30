import styled from "styled-components"

export const SectionDevelopment = styled.section`
  min-height: 800px;
  margin-top: 130px;
  background: #f9f9f9;
  @media (max-width: 1140px) {
    margin-top: 80px;
  }
  .bg {
    grid-column: 1/3;
    background: url(${props => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: #131416;
  }
`

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 99;

  &.content {
    grid-column: 3/4;
    padding: 80px 75px;
    @media (max-width: 900px) {
      padding: 45px;
    }
    &.slideOn {
      grid-column: 2/4;
      margin: 0;
      /* box-shadow:0px 0 25px -5px rgba(0,0,0,0.15); */
      @media (max-width: 1140px) {
        grid-column: 1/5;
      }
    }
    p {
      line-height: 36px;
    }
  }
  &.info {
    grid-column: 4/5;
    /* background:#FFF; */
    @media (max-width: 1140px) {
      grid-column: 1/5;
    }
    &.slideOn {
      grid-column: 4/5;
      margin: 0;
      border-left: 4px solid #f6a500;
      /* background:#FFF; */
      .item {
        transform: translate3d(-60px, 0, 0);
        background: #fff;
      }
    }
    ul {
      @media (max-width: 1140px) {
        flex-direction: row;
        padding-bottom: 100px;
      }
    }
    .item {
      @media (max-width: 1140px) {
        grid-column: 1/2;
      }
      margin: 10px;
      width: 100px;
      height: 100px;
      /* background: #131416; */
      border: 4px solid #f6a500;
      align-self: flex-start;
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
        width: 50px;
        height: 50px;
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
  }
`

export const WrapperImage = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131416;
  box-shadow: inset 15px 0px 10px -15px rgba(0, 0, 0, 0.85);
  padding: 15px;
  position: relative;
  &.slideOn {
    grid-column: 2/5;
  }
  &.slideOff {
    grid-column: 2/3;
  }
  @media (max-width: 1140px) {
    grid-column: 1/2;
    min-height: 300px;
    &.slideOn,
    &.slideOff {
      grid-column: 1/4;
    }
  }
  .btn-zoom {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 15px;
    @media (max-width: 1140px) {
      display: none;
    }
  }
`

export const MaxImage = styled.img`
  margin: 0;
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
`

export const MinImage = styled.img`
  display: block;
  margin: 10px auto;
  position: relative;
  cursor: pointer;
  opacity: 0.2;
  transition: 0.3s;
  max-width: ${({ width }) => width + "px" || "80px"};
  height: ${({ height }) => height + "px" || "80px"};
  max-height: 150px;
  &:hover,
  &.active {
    opacity: 1;
  }
  @media (max-width: 1140px) {
    margin: auto 10px;
    max-height: 170px;
    padding-top: 45px;
  }
`

export const ListMin = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: auto;
  max-height: calc(100vh - 130px);
  width: 100%;
  overflow: hidden;
  grid-column: 1/2;
  @media (max-width: 1140px) {
    grid-column: 1/5;
    flex-direction: row;
    overflow-x: scroll;
    height: auto;
    padding: 0;
  }
  overflow-y: scroll;
  background: #131416;
  padding: 50px;
  padding-right: 0;
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
    @media (max-width: 900px) {
      display: none;
    }
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #131416;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #f6a500;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #f6a500;
  }
`

export const SectionMap = styled.section`
  width: 100%;
  background: #f9f9f9;
`
