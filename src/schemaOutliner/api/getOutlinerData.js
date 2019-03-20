function getOutlinerData(callback) {
  const ep = 'http://localhost:3000/outliner';
  // const ep = 'https://mrr.bike/outliner';
  fetch(ep, {
    method: 'GET'
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        console.error('res !ok');
        callback({err: 'res'});
      }
    })
    .then(response => {
      callback(null, response);
    })
}



export default getOutlinerData;