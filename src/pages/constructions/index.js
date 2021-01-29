import React from "react";
import Layout from "../../components/layout";
import { SectionDevelopmtens } from "./styeld";
import { Container, Title, FlexList } from "../../theme/styled";
import DevelopmentBox from "../../components/development/DevelopmentBox";
import img from "../../assets/developments/1/Fachada_Noturna.jpg";

const dataMock = {
  title: 'Reserva do tabuleiro',
  subtitle: 'Apartamentos',
  description: `Localizado de frente para a Serra do Tabuleiro em Palhoça/SC, é o
                encontro perfeito do estilo de vida urbano com a natureza,
                garantindo a qualidade de vida que você merece.`,
  image: img,
  apartments: [
    {
      title: 'Apartment title',
      image: ''
    },
    {
      title: 'Apartment title',
      image: ''
    },
    {
      title: 'Apartment title',
      image: ''
    },
    {
      title: 'Apartment title',
      image: ''
    }
  ]
}

const Constructions = () => {
  return (
    <Layout>
      <SectionDevelopmtens>
        <Container>
          <Title>Empreendimentos</Title>
          <FlexList flow="column">
            <DevelopmentBox {...dataMock} />
            <DevelopmentBox {...dataMock} />
            <DevelopmentBox {...dataMock} />
            <DevelopmentBox {...dataMock} />
          </FlexList>
        </Container>
      </SectionDevelopmtens>
    </Layout>
  )
}
export default Constructions
