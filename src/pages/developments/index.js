import React from "react"
import Layout from "../../components/layout"
import { SectionDevelopmtens } from "../../styles-pages/developments-styled"
import { Container, Title, FlexList, Button } from "../../shared/styled-shared"
import DevelopmentBox from '../../components/development/DevelopmentBox';

const Developments = () => {
  return (
    <Layout>
      <SectionDevelopmtens>
        <Container>
          <Title>Empreendimentos</Title>
          <FlexList flow="column">
            <DevelopmentBox />
            <DevelopmentBox />
          </FlexList>
        </Container>
      </SectionDevelopmtens>
    </Layout>
  )
}
export default Developments
