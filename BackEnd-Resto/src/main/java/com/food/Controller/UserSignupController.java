package com.food.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.food.Entity.UserSignup;
import com.food.Repository.UserSignupRepository;



@RestController
@CrossOrigin
@RequestMapping("/usersignup")
public class UserSignupController {

		
			@Autowired UserSignupRepository repo;
			@PostMapping("/post")
			private UserSignup PostUser(@RequestBody UserSignup s){
				return repo.save(s);
			}
		

		
	}


