import React, { Component } from 'react';
import Axios from 'axios';
import URL from './config.js';

import './styles/MapViewer.css';

class MapViewer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      env: {},
    };
    this.renderTable = this.renderTable.bind(this);
  }

  async componentWillMount() {
    const { match } = this.props;
    const { id } = match.params;

    try {
      const { data } = await Axios.get(`${URL}/q-learn/env/${id}`);
      await this.setState({ env: data });
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  renderTable(grid, exit) {
    if (grid) {
      return grid.map((row, rowi) => (
        <tr>
          {row.map((col, coli) => (
            <td className={`${exit[0] === rowi && exit[1] === coli ? 'exit' : null} map-grid_${col} map-viewer-cell`} />
          ))}
        </tr>
      ));
    }
  }

  render() {
    const { env } = this.state;
    const { map, name, exit } = env;
    return (
      <div className="map-viewer">
        <p className="title">{name}</p>
        <div className="map-viewer-table">
          <table>
            {this.renderTable(map, exit)}
          </table>
        </div>
      </div>
    );
  }
}

export default MapViewer;
