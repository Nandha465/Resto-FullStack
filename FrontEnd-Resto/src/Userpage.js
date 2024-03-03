import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FoodService from './FoodService';
import { Pagination } from '@mui/lab';
import axios from 'axios';
import './Userpage.css';

const Userpage=()=> {
  const nav=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [foods, setFood] = useState([])
  useEffect(() => {
      getAllFoods();
  }, [currentPage,sortBy,sortOrder])

  const getAllFoods = () => {
      axios.get(`http://localhost:8080/reservetable/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`).then((response) => {
      const{content,totalPages}=response.data;   
      setFood(response.data)
      setTotalPages(totalPages);
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const deleteFood = (foodId) => {
    if(window.confirm("Sure to Cancel the reserved Table?")){
     FoodService.deleteFood(foodId).then((response) =>{
      getAllFoods();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const deleteAllFood = () => {
    if(window.confirm("Sure to Delete All Foods?")){
     FoodService.deleteAllFood().then((response) =>{
      getAllFoods();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const LogoutHandler=()=>{
    {
      nav("/home")
    }
  }
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div id='user-img'>
    <div id='contain'>
    <h1 id='user-heading'>Resto.</h1>
    <div id="container">
            <h1>Hey Nandha,</h1>
            <h3>Your Reservations</h3>
  
    <table id="table">
              <thead>
                <tr>
                  
                  <th id='theads' onClick={() => handleSort('name')} >Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th id='theads'>Date</th>
                  <th id='theads'>Time</th>
                  <th id='theads' onClick={() => handleSort('quantity')}>Phone Number {sortBy === 'quantity' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  
                  <th id='theads'>people</th>
                  <th id='theads'>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                foods.content&&foods.content.map(
                    (food) => (
      <tr key={food.id}>
             
             <th id="name"> {food.name}</th>
             <th id="pos"> {food.date}</th>
             <th id="age"> {food.time}</th>
             <th id="phone"> {food.phone}</th>
             <th id="salary"> {food.people}</th>
             <th id="action"> 
             
             <button id="action-del"  onClick = {() => deleteFood(food.id)}> Cancel</button></th>
            
      </tr>
    ))}
              </tbody>
            </table>
            <Pagination className='page'
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
    <button id="logout" className='btn' onClick={LogoutHandler}>Back</button>
        
    </div>
    </div>
    </div>
  )
}

export default Userpage