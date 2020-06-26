import axios from 'axios';

const URL = 'http://www.mocky.io/v2/5ba8efb23100007200c2750c';

export const fetchCustomerData = async() => {
  try{
    const customers = await axios.get(URL);
    return customers.data;
  }catch(err){
    return [];
  }
  
}
