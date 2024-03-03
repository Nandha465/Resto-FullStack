package com.food.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.food.Entity.UserSignup;
import com.food.Repository.UserSignupRepository;

@Service
public class UserSignupService {

	
		@Autowired 
		UserSignupRepository repo;
		public Iterable<UserSignup> GetAll(){
			return repo.findAll();
		}
		
	}

	

