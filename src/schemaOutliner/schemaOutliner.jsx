import React, { Component } from 'react';
import getOutlinerData from './api/getOutlinerData';
import outline from './functions/outline'


class SchemaOutliner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {}
    }
  }

  componentDidMount() {
    getOutlinerData((err, data) => {
      if(!err) {
        const outlinedData = outline(data);
        this.setState({outlinedData});
      } else {
        console.error(err);
      }
      this.setState({loading: false});
    });
  }


  render() {
    return (
      <div id='schemaOutliner'>
        <h1>Schema Outliner</h1>
        {this.state.loading && <p>Loading...</p>}

      </div>
    )
  }
}


export default SchemaOutliner;