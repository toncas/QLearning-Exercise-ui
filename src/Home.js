import React, { Component } from 'react';
import Axios from 'axios';
import URL from './config.js';
import MapLink from './components/MapLink.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapList: null
    }
    this.handleRedirectToMapView = this.handleRedirectToMapView.bind(this);
  }

  async componentWillMount() {
    try {
      const res = await Axios.get(`${URL}/q-learn/env`);
      this.setState({ mapList: res.data });
    } catch (error) {
      console.error(String(error));
    }
  }

  handleRedirectToMapView(id) {
    const { history } = this.props;
    return history.push(`/view-map/${id}`);
  }

  render() {
    const { mapList } = this.state;
    return (
      <div className="App">
        <p className="title">Q-Learning Visualization</p>
        <div className="left">
          <p className="heading">Environment Select</p>
          {mapList ? mapList.map((map, index) => <MapLink redirect={this.handleRedirectToMapView} key={index} map={map} />) : null}
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default Home;
