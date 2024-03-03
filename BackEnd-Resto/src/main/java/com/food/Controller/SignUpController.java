package com.food.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.food.Entity.SignUp;
import com.food.Repository.SignUpRepository;

@RestController
@CrossOrigin
@RequestMapping("/signup")
public class SignUpController {

		@Autowired SignUpRepository repo;
		@PostMapping("/post")
		private SignUp PostUser(@RequestBody SignUp s){
			return repo.save(s);
		}
	}
