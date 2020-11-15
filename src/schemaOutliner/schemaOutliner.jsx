import React, { Component } from 'react';
import './schemaOutliner.scss';
import getOutlinerData from './api/getOutlinerData';
import CollectionOutline from './components/collectionOutline/collectionOutline';

const epPrefix = 'http://localhost:8080'; // DEV

class SchemaOutliner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collections: [],
      loading: false,
      uri: '',
      dbName: '',
      connected: false,
    }
  }

  async getData() {
    this.setState({ loading: true, collections: [], connected: false }, async () => {
      const { uri, dbName } = this.state;
      const endpoint = `${epPrefix}/outline?uri=${uri}&dbName=${dbName}`;

      try {
        const outlinerData = await getOutlinerData(endpoint);
        this.setState({ collections: outlinerData.outlinedCollections, }, () => {
          this.setState({ loading: false, connected: true });
        });
      } catch(e) {
        alert(e);
        this.setState({ loading: false, connected: false });
      }
    });
  }


  render() {
    return (
      <div id='schemaOutliner'>
        <h1>Schema Outliner <span className='status'></span></h1>
        <div id='controls'>
          <input id='uriInput' value={this.state.uri} onChange={(e) => this.setState({ uri: e.target.value})} placeholder='URI' />
          <input id='dbNameInput' value={this.state.dbName} onChange={(e) => this.setState({ dbName: e.target.value})} placeholder='database' />
          <button onClick={()=>this.getData()}>Outline</button>
        </div>
        {(() => {
          if(this.state.loading) {
            return <p>Loading...</p>
          } else {
            if (this.state.connected) {
              return (
                <div id='collectionsOutlines'>
                  {this.state.collections.map(collection => {
                    return <CollectionOutline key={collection.name} collection={collection} />
                  })}
                </div>
              )
            } else {
              return <p>No connection.</p>
            }
          }
        })()}
      </div>
    )
  }
}


export default SchemaOutliner;
