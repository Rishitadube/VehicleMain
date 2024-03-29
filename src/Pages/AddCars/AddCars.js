import React, { useState } from 'react'
import "./AddCars.css"
export default function AddCars () {
    let [array,setArray] = useState([])
    let [inputdata,setInputdata] = useState({vin:"",make:"",model:"",license:""})


    function data(e) {
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

    let {vin,make,model,license} = inputdata;
    function addinputdata(){
        setArray([...array,{vin,make,model,license}])
        setInputdata({vin:"",make:"",model:"",license:""})
    }
  
  
  function deletedata(i)
  {
    let total = [...array]
    total.splice(i,1)
    setArray(total)
  }
    return (
    <div className='container'>
        <div className="fields">
        <input type="number" value={inputdata.vin || ""} name='vin' placeholder='VIN' onChange={data}/>
        <input type='text' value={inputdata.make || ""} name='make' placeholder='Make' onChange={data}/>
        <input type='text' value={inputdata.model || ""} name='model'placeholder='Model' onChange={data}/>
        <input type='text' value={inputdata.license || ""} name='license' placeholder='License Number' onChange={data}/>
        <button className='add-car' onClick={addinputdata}>Add Car</button>
        </div>
        <div className="tab">
        <table border="5" width="100%">
            <tbody>
                <tr>
                    <th>VIN</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>License</th>
                    <th>Delete</th>
                </tr>
                <tr>
                    <td>MB101</td>
                    <td>Mercedes Benz</td>
                    <td>GLC</td>
                    <td>KA09CN1223</td>
                </tr>
                {
                    array && array.map(
                        (item,i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.vin}</td>
                                    <td>{item.make}</td>
                                    <td>{item.model}</td>
                                    <td>{item.license}</td>
                                    <td><button onClick={()=>deletedata(i)}>Delete</button></td>
                                </tr>
                            )
                        }
                    )
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}
