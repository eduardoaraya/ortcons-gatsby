import React from "react";
import Layout from "../../../components/layout"
import DevelopmentBox from "../../../components/development/DevelopmentBox"
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

const Apartments = () => {
  return (
    <Layout>
      <ApartmentsSecion>
        <Container>
          <Grid>
            <Wrapper className="construction-cover" >
              <Title>Reserva do Tabuleiro</Title>
            </Wrapper>
            <Wrapper className="apartment-list">
              <FlexList flow="row" justifyContent="flex-start" wrap={true}>
              </FlexList>
            </Wrapper>
          </Grid>
        </Container>
      </ApartmentsSecion>
    </Layout>
  )
}

export default Apartments;