package com.food.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.food.Entity.UserSignup;
import com.food.Service.UserSignupService;


@RestController
@CrossOrigin
@RequestMapping("/userlogin")
public class UserLoginController {
	

			@Autowired 
			UserSignupService ser;
			@GetMapping("/get")
			private Iterable<UserSignup> GetUsers(){
				return ser.GetAll();
			}
		}

		


	

