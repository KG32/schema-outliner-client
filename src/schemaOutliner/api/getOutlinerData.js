import axios from 'axios';

export const endpoint = 'http://localhost:8080/outline?uri=mongodb://localhost:27017&dbName=testDb&collections[]=testCollection&collections[]=testCollection2'; // DEV

async function getOutlinerData(callback) {
  const res = await axios.get(endpoint);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error('getOutlinerData ERR');
  }
}

export default getOutlinerData;
