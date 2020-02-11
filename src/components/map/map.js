import React from 'react';
import styled from 'styled-components';

const InframeMap = styled.section`
    position: relative;
    width:100%;
    background:#DDD;
    grid-column:1/3;
    margin:0;
    @media(max-width:1140px){
        grid-column:1/5;
    }
    iframe{
        border:none;
        width:100%;
        height:100%;
        margin:0;
    }
`
const Map = () => {
    return (
        <InframeMap>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7067.55653527195!2d-48.70592664313137!3d-27.662331123393606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527352693cfae73%3A0xcc91bbba304b2c86!2sR.%20Luci%20Vilani%20-%20Alto%20Aririu%2C%20Palho%C3%A7a%20-%20SC%2C%2088132-772!5e0!3m2!1spt-BR!2sbr!4v1581393639903!5m2!1spt-BR!2sbr" />
        </InframeMap>
    );
}

export default Map;