import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import logo from "../../assets/imgs/logo.png"
import {
  HeaderTop,
  Logo,
  Navigator,
  MenuList,
  MenuItem,
  Container,
  Mobile,
} from "./styled"

import { Phones, Phone } from "../../shared/styled-shared"

const Header = ({ transparent }) => {
  const [fixed, setFixed] = useState(false)
  const [mobile, setMobile] = useState(false)

  function handleScrollHeader() {
    if (window.scrollY > 100) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", e => handleScrollHeader())
    return () => window.removeEventListener("scroll", handleScrollHeader)
  }, [])

  const toggleMenu = () => {
    setMobile(!mobile)
  }

  return (
    <HeaderTop transparent={transparent} className={fixed && "active"}>
      <Container>
        <Logo src={logo} />
        <Navigator className={mobile ? "open" : ""}>
          <MenuList>
            <MenuItem>
              <Link activeClassName="active" to="/home">
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link activeClassName="active" to="/constructions">
                Empreendimentos
              </Link>
            </MenuItem>
            <MenuItem>
              <Link activeClassName="active" to="/about">
                A Ortcons
              </Link>
            </MenuItem>
            <MenuItem>
              <Link activeClassName="active" to="/contact">
                Contato
              </Link>
            </MenuItem>
          </MenuList>
          <Phones className="phones">
            <Phone onClick={() => document.location.href = 'tel:  48. 3017.0700'}>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.2627 17.3637L16.1755 13.2763C15.8095 12.9103 15.2298 12.9103 14.864 13.2763L13.7354 14.4049C13.6133 14.527 13.4302 14.527 13.3081 14.4355C11.8444 13.1545 10.4717 11.7819 9.19065 10.2873C9.09909 10.1654 9.09909 9.98228 9.22117 9.86021L10.3498 8.7316C10.5329 8.54849 10.6242 8.33525 10.6242 8.06058C10.6242 7.81643 10.5329 7.57248 10.3498 7.38936L6.26261 3.36324C5.89658 2.99721 5.31712 2.99721 4.95109 3.36324L1.90098 6.41374C1.62651 6.68822 1.53495 7.1458 1.74839 7.51183C5.04245 13.612 10.0141 18.5839 16.1143 21.8779C16.2364 21.939 16.389 22 16.5415 22C16.7855 22 17.0295 21.9084 17.2126 21.7255L20.2627 18.6754C20.4458 18.4923 20.5372 18.2789 20.5372 18.0042C20.5372 17.7602 20.4456 17.5466 20.2627 17.3637Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeMiterlimit="10"
                />
                <path
                  d="M12.6915 4.71702C15.7954 4.71702 18.3116 7.23325 18.3116 10.3372"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.0828 1C18.0235 1 22.0287 5.00519 22.0287 9.94589"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span> 48. 3017.0700</span>
            </Phone>
            <Phone className="active" onClick={() => document.location.href = 'https://api.whatsapp.com/send?phone=5548998765432'}>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.733 3.36027C15.8528 1.48698 13.3527 0.454858 10.6886 0.453838C5.1998 0.453838 0.732686 4.89939 0.73041 10.3637C0.729727 12.1104 1.18823 13.8154 2.05971 15.3183L0.646973 20.4538L5.92591 19.0757C7.38042 19.8653 9.01797 20.2814 10.6847 20.282H10.6887C10.6891 20.282 10.6884 20.282 10.6887 20.282C16.177 20.282 20.6447 15.836 20.6469 10.3716C20.6479 7.72356 19.6131 5.23346 17.733 3.36027ZM10.6887 18.6083H10.6854C9.2002 18.6076 7.74354 18.2106 6.47275 17.46L6.17042 17.2815L3.03784 18.0994L3.87403 15.0598L3.67722 14.7482C2.84877 13.4367 2.4111 11.9208 2.41178 10.3644C2.4136 5.82261 6.12648 2.12758 10.6921 2.12758C12.9027 2.12848 14.9809 2.98643 16.5435 4.54334C18.1062 6.10024 18.9664 8.16981 18.9655 10.3708C18.9637 14.9129 15.2507 18.6083 10.6887 18.6083ZM15.2288 12.4389C14.9799 12.3149 13.7566 11.7159 13.5286 11.6333C13.3004 11.5507 13.1346 11.5094 12.9686 11.7573C12.8028 12.0053 12.326 12.5629 12.1807 12.7282C12.0357 12.8935 11.8904 12.9142 11.6417 12.7902C11.3928 12.6662 10.5912 12.4048 9.64073 11.5611C8.90106 10.9046 8.4017 10.0935 8.25645 9.84559C8.11132 9.59765 8.24108 9.4637 8.36561 9.34018C8.47751 9.22924 8.61444 9.05099 8.73886 8.90639C8.86327 8.7618 8.90482 8.65845 8.98769 8.49323C9.07067 8.32801 9.02912 8.1833 8.96686 8.05944C8.90471 7.93547 8.40705 6.71659 8.19965 6.22082C7.99772 5.73796 7.7926 5.80323 7.63984 5.79575C7.49482 5.78861 7.32886 5.78703 7.16301 5.78703C6.99716 5.78703 6.7275 5.84901 6.4995 6.09696C6.2715 6.3449 5.62871 6.94403 5.62871 8.16278C5.62871 9.38166 6.52033 10.5592 6.64463 10.7244C6.76904 10.8897 8.39919 13.3909 10.8952 14.4635C11.4889 14.7187 11.9524 14.8711 12.3138 14.9852C12.9098 15.1737 13.4522 15.1472 13.881 15.0834C14.3591 15.0122 15.3531 14.4842 15.5605 13.9057C15.7678 13.3274 15.7678 12.8316 15.7057 12.7282C15.6434 12.625 15.4775 12.563 15.2288 12.4389Z"
                  fill="white"
                />
              </svg>
              <span>Atendimento</span>
            </Phone>
          </Phones>
        </Navigator>
      </Container>
      <Mobile onClick={() => toggleMenu()} className={mobile ? "active" : ""}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48pt"
          height="48pt"
          viewBox="0 0 48 48"
          version="1.1"
        >
          <g id="surface10314045">
            <path d="M 6 22 L 42 22 L 42 26 L 6 26 Z M 6 10 L 42 10 L 42 14 L 6 14 Z M 6 34 L 42 34 L 42 38 L 6 38 Z M 6 34 " />
          </g>
        </svg>
      </Mobile>
    </HeaderTop>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Header
