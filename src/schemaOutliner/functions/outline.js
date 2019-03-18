function outline(data) {
  const outlinedCollections = [];
  for(let i=0; i<data.length; i++) {
    const collection = data[i];
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
    console.log(schemaKeys);
  }


  return data;
}

export default outline;