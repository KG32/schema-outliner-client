import React, { Component } from 'react';
import getOutlinerData from './api/getOutlinerData';


class SchemaOutliner extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const data = getOutlinerData();
  }


  render() {
    return (
      <div id='schemaOutliner'>
        <h1>Schema Outliner</h1>
      </div>
    )
  }
}


export default SchemaOutliner;