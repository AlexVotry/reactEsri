// NOTE
// This is a "special" react component that does not strictly play by
// React's rules.
//
// Conceptually, this component creates a "portal" in React by
// closing its render method off from updates (by simply rendering a div and
// never accepting re-renders) then reconnecting itself to the React lifecycle
// by listening for any new props (using componentWillReceiveProps)

// React imports
import React from "react";

// ESRI ArcGIS API
import { loadMap } from "../../utils/map";

// Styled Components
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

// Component
const Map = props => {
  // set an ID for the map to attach to
  const containerID = "map-view-container";
  const mapConfig = {
    center: [-118.80500, 34.02700], // longitude, latitude
    zoom: 13
  }

  // load map with config properties
  loadMap(containerID, mapConfig).then(() => {
  });

  // Compnent template
  return <Container id={containerID}></Container>;
};

export default Map;
