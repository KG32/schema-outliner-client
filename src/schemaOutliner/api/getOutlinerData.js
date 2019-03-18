function getOutlinerData(callback) {
  const ep = 'http://3bfc4adf.ngrok.io/outliner';
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