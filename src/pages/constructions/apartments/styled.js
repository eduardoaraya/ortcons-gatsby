import styled from 'styled-components';

export const ApartmentsSecion = styled.section`
  width: 100%;
  margin-top: 130px;
  background: #222;
`

export const ApartmentBox = styled.div`
  min-width: 200px;
  height: 200px;
  margin: 20px;
  border-radius: 5px;
  background: #e5e5e5;
  box-shadow: 0px 0px 10px -2px rgba(0,0,0, .4);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 750px;
`

export const Wrapper = styled.div`
  width: 100%;
  background: ${(props) => props.background ?? '#e5e5e5'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 600px;

  &.apartment-list {
    grid-column: 2/3;
    padding: 25px 0px;
  }
  &.construction-cover {
    grid-column: 1/2;
    position: relative;
    box-shadow: inset 0px 0px 10px -2px rgba(0,0,0, .4);
    &:before {
      content: '';
      background: rgba(0, 0, 0, 0.4);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
`