import React from "react"
import { Link } from "gatsby"

import { ContentBanner, BoxCenter, WrapperBoxCenter, BoxBottom } from "./styled"
import { Container } from "../../shared/styled-shared"

import banner from "../../assets/imgs/banner1.png"

import icon1 from "../../assets/imgs/icon1.png"
import icon2 from "../../assets/imgs/icon2.png"
import icon3 from "../../assets/imgs/icon3.png"

export default function Banner() {
  return (
    <ContentBanner image={banner}>
      <Container>
        <WrapperBoxCenter>
          <BoxCenter>
            <div className="intro">
              <h1>
                <span className="txt-1 f-r">Reserva do</span>
                <span className="txt-2 f-r">Tabuleiro</span>
                <span className="txt-3 f-s">Santa Catarina</span>
              </h1>
            </div>
            <div className="info">
              <div className="item">
                <img src={icon3} />
                <p>1 Vaga</p>
              </div>
              <div className="item">
                <img src={icon2} />
                <p>2 Dorm</p>
              </div>
              <div className="item">
                <img src={icon1} />
                <p>74 m²</p>
              </div>
            </div>
            <div className="call-action">
              <Link className="link" to="/developments">
                Conheça o Empreendimento
              </Link>
              <svg
                className="icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                  fill="white"
                />
              </svg>
            </div>
          </BoxCenter>
          <BoxBottom>
            <div></div>
            <div className="chat-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM16 12H4V10H16V12ZM16 9H4V7H16V9ZM16 6H4V4H16V6Z"
                  fill="white"
                />
              </svg>
            </div>
          </BoxBottom>
        </WrapperBoxCenter>
      </Container>
    </ContentBanner>
  )
}
