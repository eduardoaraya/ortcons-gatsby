import React from "react"
import Layout from "../../components/layout"
import { SectionDevelopmtens } from "./styeld"
import { Container, Title, FlexList } from "../../theme/styled"
import DevelopmentBox from "../../components/development/DevelopmentBox";

const Constructions = () => {
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
export default Constructions
