package com.food.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.Entity.SignUp;
import com.food.Repository.SignUpRepository;

@Service
public class SignUpService {
	@Autowired 
	SignUpRepository repo;
//	public Iterable<SignUp> GetUserPassService(String username){
//		return repo.findAllUsernamePassword(username);
//	}
	public Iterable<SignUp> GetAll(){
		return repo.findAll();
	}
	
}
