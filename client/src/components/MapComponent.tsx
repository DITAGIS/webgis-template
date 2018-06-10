import * as React from 'react';
import EsriMap = require('esri/Map');
import MapView = require('esri/views/MapView');

type Props = {
};
type States = {

};

const classes = {
  container: 'mapDiv'
};

class LoginComponent extends React.Component<Props, States> {
  private mapDiv: HTMLDivElement;

  componentDidMount() {
    const map = new EsriMap({ basemap: 'osm' });
    const view = new MapView({
      map,
      container: this.mapDiv
    });
  }

  render() {
    return (
      <div className={classes.container}
        ref={
          (element: HTMLDivElement) => this.mapDiv = element
        }
      >
      </div>
    );
  }
}

export default LoginComponent;