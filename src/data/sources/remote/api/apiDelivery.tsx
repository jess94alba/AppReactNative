import axios from 'axios';
const ApiDelivery = axios.create({
baseURL: 'http://192.16.10.201:3000/api',
headers: {
'Content-Type': 'application/json'
}
});
export {ApiDelivery};