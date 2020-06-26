import React from 'react'

const Customer = ({customer: {name,id,items,address,pincode}}) => {
  return (
    <div className="card">
      <p>{name}</p>
      <p>{id}</p>
      <p>{address}</p>
      <p>{pincode}</p>
    </div>
  )
}

export default Customer
