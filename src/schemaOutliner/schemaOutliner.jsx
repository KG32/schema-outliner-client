import React, { Component } from 'react';
import './schemaOutliner.scss';
import getOutlinerData, {endpoint} from './api/getOutlinerData';
import outline from './functions/outline'
import CollectionOutline from './components/collectionOutline/collectionOutline'


class SchemaOutliner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      collections: [],
      source: ''
    }
  }

  componentDidMount() {
    getOutlinerData((err, data) => {
      if(!err) {
        const outlinedData = outline(data);
        this.setState({collections: outlinedData});
      } else {
        console.error(err);
      }
      this.setState({loading: false});
    });
  }


  render() {
    return (
      <div id='schemaOutliner'>
        <h1>Schema Outliner <span style={{fontSize: '12px'}}>({endpoint})</span></h1>
        {(() => {
          if(this.state.loading) {
            return <p>Loading...</p>
          } else {
            return (
              <div id='collectionsOutlines'>
                {this.state.collections.map(collection => {
                  return <CollectionOutline key={collection.name} collection={collection} />
                })}
              </div>
            )
          }
        })()}
      </div>
    )
  }
}


export default SchemaOutliner;
