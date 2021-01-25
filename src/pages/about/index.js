import React from "react"
import Layout from "../../components/layout"

import { SectionAbout, ImageBanner } from "./styled"
import { Flex, TitleAbout, Box } from "../../theme/styled"

import banner from "../../assets/imgs/banner-about.jpg"
import FormRequestWorking from "../../components/form-request-working/FormRequestWorking"

const About = () => {
  return (
    <Layout transparentHeader={false}>
      <SectionAbout>
        <Flex className="wrapper">
          <Box className="box-about">
            <TitleAbout className="black-color" size="2.5em">
              Sobre nós
            </TitleAbout>
            <p className="description">
              A Ortcons Incorporadora é uma empresa que surge com o compromisso
              de construir empreendimentos de médio e alto padrão com
              excelência, eficiência e responsabilidade, levando à comunidade
              catarinense novas oportunidades para adquirir imóveis da mais alta
              qualidade por valores compatíveis e acessíveis. De olho no que há
              de melhor quando o assunto é ‘construção’, a empresa investe
              fortemente em tecnologia e expertise na área da incorporação
              imobiliária, para que seus empreendimentos correspondam ao que
              cada um de seus compradores e investidores merece – do
              planejamento à entrega.
            </p>
          </Box>
          <ImageBanner backgroundImage={banner}></ImageBanner>
        </Flex>
      </SectionAbout>
      <FormRequestWorking></FormRequestWorking>
    </Layout>
  )
}

export default About
