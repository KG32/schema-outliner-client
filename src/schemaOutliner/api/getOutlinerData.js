function getOutlinerData(callback) {
  const ep = 'http://6cc4c67c.ngrok.io/outliner';
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