export const endpoint = 'http://localhost:3000/outliner';
// export const endpoint = 'https://mrr.bike/outliner';


function getOutlinerData(callback) {
  fetch(endpoint, {
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