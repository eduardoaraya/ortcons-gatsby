import styled from "styled-components"

export const ContentBanner = styled.div`
  height: 100vh;
  overflow:hidden;
  background-color:#222;
  @media (max-width: 900px) {
    height: auto;
  }
  border-bottom: 1px solid #e5e5e5;
  position:relative;
  &:before{
    content:'';
    display:block;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.75);
    z-index:1;
    position:absolute;
    top:0;
    left:0;
  }
`

export const WrapperBoxCenter = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 285px;
  z-index:9;
  @media (max-width: 900px) {
    padding-top: 155px;
  }
`

export const BoxCenter = styled.div`
  width: 575px;
  height: 350px;
  border: 2px solid #fff;
  @media(max-width:900px){
    border:none;
  }
  padding: 15px 45px;
  background: rgba(0, 0, 0, 0.35);
  @media (max-width: 900px) {
    width: 100%;
    height: 300px;
    padding: 15px;
  }
  .intro {
    h1 {
      color: #fff;
      span {
        display: block;
        margin: 10px 0px;
        &.txt-1 {
          text-align: center;
          font-size: 0.65em;
          font-weight: 100;
          display: flex;
          justify-content: center;
          align-items: center;
          text-transform: uppercase;
          line-height: 20px;
          font-feature-settings: "pnum" on, "lnum" on;
          font-weight: 600;
          font-size: 0.45em;
          animation: fadeLeft 1s forwards;
          &:after {
            position: relative;
            display: block;
            content: "";
            width: 10px;
            height: 2px;
            background: #fff;
            left: 10px;
          }
          &:before {
            position: relative;
            right: 10px;
            display: block;
            content: "";
            width: 10px;
            height: 2px;
            background: #fff;
          }
        }
        &.txt-2 {
          opacity: 0;
          text-align: center;
          font-weight: bolder;
          font-weight: 900;
          font-size: 1.8em;
          font-feature-settings: "pnum" on, "lnum" on;
          text-transform: uppercase;
          animation: fadeLeft 1s 0.5s forwards;
          @media (max-width: 900px) {
            font-size: 1.3em;
          }
        }
        &.txt-3 {
          opacity: 0;
          text-align: center;
          font-weight: 100;
          line-height: 7px;
          font-size: 36px;
          line-height: 20px;
          letter-spacing: 0.03em;
          font-feature-settings: "pnum" on, "lnum" on;
          color: #f6a500;
          margin-top: -21px;
          animation: fadeLeft 1s 1s forwards;
        }
      }
    }
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    height: 75px;
    .item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        margin: 0;
        margin-right: 5px;
      }
      p {
        color: #fff;
        margin: 0;
      }
    }
  }
  .call-action {
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 25px;
    transition: 0.3s;
    margin: 15px auto;
    border-radius: 4px;
    cursor: pointer;
    a {
      color: #fff;
      text-decoration: none;
    }
    @media (max-width: 900) {
      flex-wrap: wrap;
    }
    &:hover {
      background: rgba(250, 250, 250, 0.5);
      a,
      svg path {
        color: #fff;
      }
    }
    &.txt-3 {
      opacity: 0;
      text-align: center;
      font-weight: 100;
      line-height: 7px;
      font-size: 36px;
      line-height: 20px;
      letter-spacing: 0.03em;
      font-feature-settings: "pnum" on, "lnum" on;
      color: #f6a500;
      margin-top: -21px;
      animation: fadeLeft 1s 1s forwards;
    }
  }
`

export const BoxBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 205px;
  height: 60px;
  @media (max-width: 900px) {
    margin: 25px auto;
    justify-content: flex-end;
    padding:0 20px;
  }
  .chat-btn {
    background-color: rgba(250, 250, 250, 0.25);
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 50px;
    cursor: pointer;
    height: 50px;
    box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.35);
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 1px 5px -5px rgba(0, 0, 0, 0.35);
    }
    svg {
      width: 35px;
      height: 35px;
    }
  }
`


export const Dots = styled.div`
  z-index:9;
  position:relative;
  bottom:35px;
  left:0;
  margin:10px;
  max-width:100px;
  ul{
    align-items:center;
    justify-content:center;
    li{
      margin:0;
      flex:1;
      display:flex;
      align-items:center;
      justify-content:center;
      transition:.3s;
      cursor: pointer;
      &:hover,&.active{
        transform:scale(1.5)
      }
    }
  }
`

export const BannerImage = styled.img`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  animation:fade .5s forwards;
  display:none;
  /* @media(max-width:1250px){
    height:auto;
  } */
  &.active{
    display:block;
  }
  @keyframes fade {
    from{
      opacity:0;
      transform:translate3d(20px,0,0);
    }
    to{
      opacity:1;
      transform:translate3d(0,0,0);
    }
  }
`
