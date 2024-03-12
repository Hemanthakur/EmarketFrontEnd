import React from 'react'

export default function Myorders() {
  return (
    <>
    <div className='container'>
                <div className='row mt-3'>
                    <div className='col-md-12 mt-3 mb-3'>
                        <h1 className='login-register-h1'>List of Orders</h1>
                        <div className='col-md-12'>
                            <table className="table" style={{ color: "#FFFF" }}>
                                <thead>
                                    <tr>
                                        <th>sl no </th>
                                        <th>Product Id</th>
                                        <th>Product Name</th>
                                        <th>Qantity</th>
                                        <th>Price</th>
                                        <th>TotalPrice</th>
                                        <th>Status</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                             <tr >
                                                <td>1</td>
                                                <td>5</td>
                                                <td>Apple</td>
                                                <td>60 kg</td>
                                                <td>RS 12</td>
                                                <td>RS 1200</td>
                                                <td>Pending</td>
                                                <td><button type='search' className="btn-primary">Edit</button></td>
                                                
                                                
                                            </tr>
                                        

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
