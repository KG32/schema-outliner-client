function outline(data) {
  const outlinedCollections = [];
  for(let i=0; i<data.length; i++) {
    const collection = data[i];
    const outlinedCollection = {
      name: collection.name,
      keys: [],
      docsCount: collection.docs.length
    };
    const schemaKeys = {};
    const docs = collection.docs;
    const docsCount = docs.length;
    for(let d=0; d<docsCount; d++) {
      const doc = docs[d];
      for(let key in doc) {
        const existingKeyLog = schemaKeys[key];
        if(existingKeyLog) {
          schemaKeys[key] = existingKeyLog + 1
        } else {
          schemaKeys[key] = 1
        }
      }
    }
    for(let schemaKey in schemaKeys) {
      const count = schemaKeys[schemaKey];
      const percentage = (count/docsCount) * 100;
      const outlinedKey = {keyName: schemaKey, count, percentage: percentage.toFixed(2)};
      outlinedCollection['keys'].push(outlinedKey);
    }
    outlinedCollection.keys.sort((x, y) => {
      return x.percentage - y.percentage;
    });
    outlinedCollections.push(outlinedCollection);
  }

  return outlinedCollections;
}

export default outline;