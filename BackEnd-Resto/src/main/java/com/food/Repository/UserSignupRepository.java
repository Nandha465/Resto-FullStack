package com.food.Repository;





import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.food.Entity.UserSignup;

@Repository
public interface UserSignupRepository extends CrudRepository<UserSignup,Integer>{

	
		@Query("select cre.password from SignUp cre where cre.username=?1")
		Iterable<UserSignup> findAllUsernamePassword( String username);
	}

	

