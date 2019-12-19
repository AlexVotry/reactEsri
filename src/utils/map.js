import { loadModules } from "esri-loader";

export function loadMap(element, mapOptions) {
  return loadModules(["esri/Map", "esri/views/MapView", "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery"], {
    css: true
  }).then(([Map, MapView, BasemapToggle, BasemapGallery]) => {
    if (!element) {
      // component or app was likely destroyed
      return;
    }
    // create the Map
    var map = new Map({
      basemap: "topo-vector"
    });
    // show the map at the element
    let view = new MapView({
      map,
      container: element,
      ...mapOptions
    });
    // raster tile basemaps:
    var basemapGallery = new BasemapGallery({
      view: view,
      source: {
        portal: {
          url: "https://www.arcgis.com",
          //*** ADD ***//
          useVectorBasemaps: false  // Load raster tile basemaps
        }
      }
    });
    view.ui.add(basemapGallery, "top-right");
    // var basemapToggle = new BasemapToggle({
    //   view: view,
    //   nextBasemap: "satellite"
    // });
    // view.ui.add(basemapToggle, "top-right");

    // wait for the view to load TODO: may not need this?
    return view.when(() => {
      // return a reference to the view
      return view;
    });
  });
}