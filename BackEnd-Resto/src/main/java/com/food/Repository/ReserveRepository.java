package com.food.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.food.Entity.Tablereservation;
public interface ReserveRepository extends
JpaRepository<Tablereservation,Integer>,
PagingAndSortingRepository<Tablereservation, Integer>{
	
}

