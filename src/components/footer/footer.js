import React from "react"

import { Footer, Logo, Grid } from "./styled"
import {
  Container,
  Column,
  Phone,
  FlexList,
  Flex,
  Button,
} from "../../shared/styled-shared"
import bg from "../../assets/imgs/footer.png"
import logo from "../../assets/imgs/logo.png"

export default function footer() {
  return (
    <Footer backgroundImage={bg}>
      <Container>
        <Grid>
          <Logo src={logo} />
          <Column>
            <div className="separator">
              <h2 className="txt-uppercase orange-color">
                Grandes empreendimentos para grandes realizações.
              </h2>
            </div>
          </Column>
          <Column>
            <div className="separator">
              <h4 className="orange-color">Onde estamos</h4>
              <p className="white-color">
                Rua Nossa Senhora do Rosário - 480 Sala 02 | Palhoça - SC
                CEP 88138-800
              </p>
            </div>
          </Column>
          <Column>
            <Flex className="social">
              <FlexList flow="row">
                <li>
                  <a href="/#">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7381 0H1.93813C1.6464 0 1.36661 0.115893 1.16032 0.322183C0.954027 0.528473 0.838135 0.808262 0.838135 1.1V18.9C0.838135 19.1917 0.954027 19.4715 1.16032 19.6778C1.36661 19.8841 1.6464 20 1.93813 20H11.5181V12.25H8.91813V9.25H11.5181V7C11.4643 6.47176 11.5266 5.93813 11.7009 5.43654C11.8751 4.93495 12.1569 4.47755 12.5266 4.09641C12.8963 3.71528 13.3449 3.41964 13.841 3.23024C14.337 3.04083 14.8685 2.96225 15.3981 3C16.1765 2.99521 16.9544 3.03528 17.7281 3.12V5.82H16.1381C14.8781 5.82 14.6381 6.42 14.6381 7.29V9.22H17.6381L17.2481 12.22H14.6381V20H19.7381C19.8826 20 20.0256 19.9715 20.1591 19.9163C20.2925 19.861 20.4138 19.78 20.516 19.6778C20.6181 19.5757 20.6991 19.4544 20.7544 19.321C20.8097 19.1875 20.8381 19.0445 20.8381 18.9V1.1C20.8381 0.955546 20.8097 0.812506 20.7544 0.679048C20.6991 0.54559 20.6181 0.424327 20.516 0.322183C20.4138 0.220038 20.2925 0.139013 20.1591 0.0837326C20.0256 0.0284524 19.8826 0 19.7381 0Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9631 0H2.71313C1.68188 0 0.838135 0.84375 0.838135 1.875V18.125C0.838135 19.1562 1.68188 20 2.71313 20H18.9631C19.9944 20 20.8381 19.1562 20.8381 18.125V1.875C20.8381 0.84375 19.9944 0 18.9631 0ZM8.33813 16.25H5.83813V7.5H8.33813V16.25ZM7.08813 6.25C6.75661 6.25 6.43867 6.1183 6.20425 5.88388C5.96983 5.64946 5.83813 5.33152 5.83813 5C5.83813 4.66848 5.96983 4.35054 6.20425 4.11612C6.43867 3.8817 6.75661 3.75 7.08813 3.75C7.41966 3.75 7.7376 3.8817 7.97202 4.11612C8.20644 4.35054 8.33813 4.66848 8.33813 5C8.33813 5.33152 8.20644 5.64946 7.97202 5.88388C7.7376 6.1183 7.41966 6.25 7.08813 6.25ZM17.0881 16.25H14.5881V11.25C14.5881 10.9185 14.4564 10.6005 14.222 10.3661C13.9876 10.1317 13.6697 10 13.3381 10C13.0066 10 12.6887 10.1317 12.4543 10.3661C12.2198 10.6005 12.0881 10.9185 12.0881 11.25V16.25H9.58813V7.5H12.0881V9.05125C12.6031 8.34375 13.3931 7.5 14.2756 7.5C15.8306 7.5 17.0881 8.89875 17.0881 10.625V16.25Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8356 6.66525C8.99939 6.66525 7.50088 8.16376 7.50088 10C7.50088 11.8362 8.99939 13.3348 10.8356 13.3348C12.6719 13.3348 14.1704 11.8362 14.1704 10C14.1704 8.16376 12.6719 6.66525 10.8356 6.66525ZM20.8374 10C20.8374 8.61907 20.8499 7.25064 20.7723 5.87221C20.6948 4.27113 20.3295 2.85017 19.1588 1.67938C17.9855 0.506085 16.567 0.14334 14.9659 0.065788C13.585 -0.0117644 12.2166 0.000744113 10.8381 0.000744113C9.4572 0.000744113 8.08878 -0.0117644 6.71035 0.065788C5.10926 0.14334 3.6883 0.508587 2.51751 1.67938C1.34422 2.85267 0.981475 4.27113 0.903923 5.87221C0.82637 7.25314 0.838879 8.62157 0.838879 10C0.838879 11.3784 0.82637 12.7494 0.903923 14.1278C0.981475 15.7289 1.34672 17.1498 2.51751 18.3206C3.69081 19.4939 5.10926 19.8567 6.71035 19.9342C8.09128 20.0118 9.4597 19.9993 10.8381 19.9993C12.2191 19.9993 13.5875 20.0118 14.9659 19.9342C16.567 19.8567 17.988 19.4914 19.1588 18.3206C20.3321 17.1473 20.6948 15.7289 20.7723 14.1278C20.8524 12.7494 20.8374 11.3809 20.8374 10ZM10.8356 15.131C7.99621 15.131 5.70467 12.8394 5.70467 10C5.70467 7.16058 7.99621 4.86903 10.8356 4.86903C13.6751 4.86903 15.9666 7.16058 15.9666 10C15.9666 12.8394 13.6751 15.131 10.8356 15.131ZM16.1767 5.8572C15.5138 5.8572 14.9784 5.32184 14.9784 4.65889C14.9784 3.99594 15.5138 3.46058 16.1767 3.46058C16.8397 3.46058 17.3751 3.99594 17.3751 4.65889C17.3752 4.81631 17.3444 4.97222 17.2842 5.1177C17.2241 5.26317 17.1358 5.39535 17.0245 5.50666C16.9132 5.61798 16.781 5.70624 16.6355 5.76639C16.4901 5.82654 16.3342 5.8574 16.1767 5.8572Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0381 0H1.63813C1.19563 0 0.838135 0.3575 0.838135 0.8V19.2C0.838135 19.6425 1.19563 20 1.63813 20H20.0381C20.4806 20 20.8381 19.6425 20.8381 19.2V0.8C20.8381 0.3575 20.4806 0 20.0381 0ZM16.2206 7.2425C16.2281 7.36 16.2281 7.4825 16.2281 7.6025C16.2281 11.2725 13.4331 15.5 8.32563 15.5C6.75063 15.5 5.29063 15.0425 4.06063 14.255C4.28563 14.28 4.50064 14.29 4.73064 14.29C6.03064 14.29 7.22564 13.85 8.17813 13.105C6.95814 13.08 5.93313 12.28 5.58313 11.18C6.01063 11.2425 6.39563 11.2425 6.83563 11.13C6.20745 11.0024 5.64282 10.6612 5.23768 10.1645C4.83253 9.66771 4.61185 9.04602 4.61313 8.405V8.37C4.98063 8.5775 5.41314 8.705 5.86563 8.7225C5.48524 8.46899 5.17328 8.12553 4.95741 7.72257C4.74155 7.31962 4.62844 6.86963 4.62813 6.4125C4.62813 5.895 4.76314 5.4225 5.00564 5.0125C5.70289 5.87084 6.57296 6.57286 7.5593 7.07291C8.54563 7.57297 9.62615 7.85988 10.7306 7.915C10.3381 6.0275 11.7481 4.5 13.4431 4.5C14.2431 4.5 14.9631 4.835 15.4706 5.375C16.0981 5.2575 16.6981 5.0225 17.2331 4.7075C17.0256 5.35 16.5906 5.8925 16.0131 6.235C16.5731 6.175 17.1131 6.02 17.6131 5.8025C17.2356 6.3575 16.7631 6.85 16.2206 7.2425Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </FlexList>
            </Flex>
          </Column>
          <Column />
          <Column />
          <Column>
            <div className="separator">
              <h4 className="orange-color">Central de vendas</h4>
              <p className="white-color">
                48. 3017.0700
                <br />
                contato@ortconsincorporadora.com.br
              </p>
            </div>
            <div className="separator">
              <h4 className="orange-color">Whatsapp</h4>
              <p className="white-color">48 9987.65432</p>
            </div>
            <div className="separator">
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
            </div>
          </Column>
          <Column>
            <Button
              className="btn-up"
              onClick={() => window.scrollTo(0, 0)}
              color="#000"
              background="#F6A500"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-3.49691e-07 8L1.41 9.41L7 3.83L7 16L9 16L9 3.83L14.59 9.41L16 8L8 -3.49691e-07L-3.49691e-07 8Z"
                  fill="#121315"
                />
              </svg>
            </Button>
          </Column>
          <Column />
          <Column />
          <Column>
            <div className="all-rights-reserved separator">
              <p className="white-color">All Rights Reserved © ORTCONS 2019</p>
            </div>
          </Column>
          <Column>
            <div className="icon-right">
              <svg
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.5 1H1.5V41H41.5V1Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M6.29998 10.1111C6.29998 17.0889 6.29998 36.6 6.29998 36.6L21.1 21.8L6.21109 6.91113L6.29998 36.6L21.1 21.8L35.5 36.2V6.91113"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
          </Column>
        </Grid>
      </Container>
    </Footer>
  )
}
