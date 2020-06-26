import React, {useState} from 'react';
import {fetchCustomerData} from '../api';
import Customer from './Customer'


const Search = () => {

  const [customers, setCustomers] = useState([]);

  const getCustomers = async(e)=> {
    const query = e.target.value.toLowerCase().trim();
    if(!query) {
      setCustomers([]);
      return;
    }
    const customers = await fetchCustomerData();
    const filteredCustomers = customers.filter((customer)=> (
      customer.name.toLowerCase().includes(query) ||
      customer.id.toLowerCase().includes(query) ||
      customer.address.toLowerCase().includes(query) ||
      customer.pincode.toLowerCase().includes(query) ||
      customer.items.some(item => (
        item.toLowerCase().includes(query)
      ))
    ))

    setCustomers(filteredCustomers);
  }

  return (
    <form className="dropdown" autoComplete="off">
      <input 
        type="text" 
        onKeyUp={getCustomers} 
        placeholder="Search users by ID, address, name, items, pincode" />
        <div className="content">
        {customers.length>0 && customers.map(customer => (
            <Customer key={customer.id} customer={customer} />
        ))}
        </div>
        
    </form>
  )
}

export default Search
