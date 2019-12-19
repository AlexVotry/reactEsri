import React from 'react';

import Map from './esriMap/Map';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const MapWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;
const Main = props => {

  return (
    <Container>
      <MapWrapper>
        <Map />
      </MapWrapper>
    </Container>
  )
}

export default Main;