import React from "react";
import Layout from "../../../components/layout"
import {
  Title,
  FlexList,
  Container
} from "../../../theme/styled"
import {
  ApartmentsSecion,
  ApartmentBox,
  Wrapper,
  Grid
} from "./styled";
import img from "../../../assets/developments/1/Fachada_Noturna.jpg"

const Apartments = () => {
  return (
    <Layout>
      <ApartmentsSecion>
        <Container>
          <Grid>
            <Wrapper className="construction-cover" background={`url('${img}')`}>
              <Title>Reserva do Tabuleiro</Title>
            </Wrapper>
            <Wrapper className="apartment-list">
              <FlexList flow="row" justifyContent="flex-start" wrap={true}>
                <ApartmentBox>
                </ApartmentBox>
                <ApartmentBox>
                </ApartmentBox>
                <ApartmentBox>
                </ApartmentBox>
                <ApartmentBox>
                </ApartmentBox>
                <ApartmentBox>
                </ApartmentBox>
              </FlexList>
            </Wrapper>
          </Grid>
        </Container>
      </ApartmentsSecion>
    </Layout>
  )
}

export default Apartments;