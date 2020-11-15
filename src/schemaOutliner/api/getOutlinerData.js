import axios from 'axios';

async function getOutlinerData(endpoint) {
  const res = await axios.get(endpoint);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error('getOutlinerData ERR');
  }
}

export default getOutlinerData;
