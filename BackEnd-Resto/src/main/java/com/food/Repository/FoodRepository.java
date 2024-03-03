package com.food.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.food.Entity.FoodDetails;



public interface FoodRepository extends CrudRepository<FoodDetails,Integer>,PagingAndSortingRepository<FoodDetails, Integer>{
	
}
	


	


	

