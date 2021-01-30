import React from "react"
import { Link } from "gatsby"

import Banner from "../../components/banner/banner"

import {
  SectionDevelopment,
  Box,
  SectionAbout,
  WrapperAboutText,
} from "./styled";

import {
  Container,
  Flex,
  Button,
  CallAction,
  FlexCenter,
  TitleAbout,
} from "../../theme/styled"

import Rectangle1 from "../../assets/imgs/Rectangle1.png"
import Rectangle2 from "../../assets/imgs/Rectangle2.png"
import Layout from "../../components/layout"
import { navigate } from "@reach/router"

export default function Home() {
  // const navigation  = useNavigation();
  return (
    <Layout transparentHeader={true}>
      <Banner></Banner>
      <SectionDevelopment>
        <Flex className="wrapper">
          <Box className="filter-black" backgroundImage={Rectangle1}>
            <FlexCenter>
              <CallAction border="solid 2px #FFF">
                <Link to="constructions">Nome do empreendimento</Link>
                <svg
                  className="icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="white" />
                </svg>
              </CallAction>
            </FlexCenter>
          </Box>
          <Box backgroundImage={Rectangle2}></Box>
        </Flex>
      </SectionDevelopment>
      <SectionAbout>
        <Container>
          <Flex className="wrapper">
            <Box>
              <WrapperAboutText>
                <TitleAbout>Sobre nós</TitleAbout>
                <p className="about-left">
                  A Ortcons Incorporadora é uma empresa que surge com o{" "}
                  <span className="orange-color bolder">compromisso</span> de
                  construir empreendimentos de médio e alto padrão com
                  excelência.
                </p>
              </WrapperAboutText>
            </Box>
            <Box>
              <WrapperAboutText className="right">
                <p className="about-right">
                  De olho no que há de melhor quando o assunto é ‘construção’, a
                  empresa investe fortemente em tecnologia e expertise na área
                  da incorporação imobiliária, para que seus empreendimentos
                  correspondam ao que cada um de seus compradores e investidores
                  merece – do planejamento à entrega.
                </p>
                <Button
                  onClick={() => navigate('/about')}
                  className="btn btn-icon"
                  background="#F6A500"
                  color="#FFF"
                  width="200px"
                  fontSize=".85em"
                >
                  Saiba Mais
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
                </Button>
              </WrapperAboutText>
            </Box>
          </Flex>
        </Container>
      </SectionAbout>
    </Layout>
  )
}
