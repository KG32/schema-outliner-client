function getOutlinerData() {
  const ep = 'http://3bfc4adf.ngrok.io/outliner';
  fetch(ep, {
    method: 'GET'
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        console.error('res !ok');
      }
    })
    .then(response => {
      console.log(response);
    })
}



export default getOutlinerData;