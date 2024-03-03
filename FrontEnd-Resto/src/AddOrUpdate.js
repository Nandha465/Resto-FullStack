import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import FoodService from './FoodService';

const AddOrUpdate=()=> {
  const nav=useNavigate();
  const[name,setname]=useState('');
  const[phone,setphone]=useState('');
  const[foodname,setfoodname]=useState('');
  const[quantity,setquantity]=useState('');
  const[price,setprice]=useState('');
  const {id} = useParams();
    const saveOrUpdateFood = (e) => {
      e.preventDefault();
      if(quantity.length==0||price.length==0||foodname.length==0||name.length==0||phone.length==0){
        alert("Enter All fields")
      }
      else if(phone.length<10){
        alert("Enter Correct Phone Number!")
      }
      
      else if(quantity<1||quantity>10){
        alert("Enter Correct Quantity upto 10!")
      }
      else{
      if (window.confirm("Confirm Details!") === true) {
        e.preventDefault();
          const food = {id, name,phone,foodname, quantity,price}
          if(id){
            FoodService.updateFood(id, food).then((response) => {
                  nav('/home')
              }).catch(error => {
                  console.log(error)
              })
  
          }else{
            FoodService.createFood(food).then((response) =>{
                  console.log(response.data)
                  nav('/home');
              }).catch(error => {
                  console.log(error)
              })
          }
        }
      }
    } 
  
      useEffect(() => {
        FoodService.getFoodById(id).then((response) =>{
              setname(response.data.name)
              setphone(response.data.phone)
              setfoodname(response.data.foodname)
              setquantity(response.data.quantity)
              setprice(response.data.price)
          }).catch(error => {
              console.log(error)
          })
      }, [])
      const title = () => {

        if(id){
            return <h1>Update Food</h1>
        }else{
            return <h1>Add Food</h1>
        }
    }
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
        {title()}
        <p>Enter Food Details</p>
      </div>
      <form>
        <div className="input">
          <input type="text" placeholder="Customer Name" value={name} onChange={(e)=>setname(e.target.value)}  />
        </div>
        <div className="input">
          <input type="text" placeholder="Customer Phone" value={phone}  pattern="[0-9]+"
                   maxLength="10"  onChange={(e)=>setphone(e.target.value)} />
        </div>
        <div className="input">
          <input type="text" placeholder="Customer FoodName" value={foodname} onChange={(e)=>setfoodname(e.target.value)}/>
        </div>
        <div className="input">
          <input type="number" placeholder="Food Quantity" value={quantity}  onChange={(e)=>setquantity(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Food Price" value={price} pattern="[0-9]+"   onChange={(e)=>setprice(e.target.value)} />
        </div>
        
        <input onClick={saveOrUpdateFood} className="e-signup-btn" type="submit" value="Submit" />
      <Link to="/home">  <button className="e-cancel-btn" >Cancel </button></Link>
        </form>
    </div>
  </div>
    </div>
  )
}

export default AddOrUpdate