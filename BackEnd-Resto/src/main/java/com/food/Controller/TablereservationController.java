package com.food.Controller;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.food.Entity.FoodDetails;
import com.food.Entity.SignUp;
import com.food.Entity.Tablereservation;
import com.food.Entity.UserSignup;
import com.food.Repository.ReserveRepository;
import com.food.Repository.SignUpRepository;
import com.food.Repository.UserSignupRepository;



@RestController
@CrossOrigin("*")
@RequestMapping("/reservetable")

public class TablereservationController {

				@Autowired ReserveRepository repo;
				@PostMapping("/post")
				private String PostUser(@RequestBody Tablereservation s){
					repo.save(s);
					return "saved";
				}
				@GetMapping(value="/get")
			    public Iterable<Tablereservation> getAllTablereservation(){
			        return repo.findAll();
			    }
				
			    @GetMapping(value="/{currentPage}/{itemsPerPage}/{sortBy}/{sortOrder}")
			    public Page<Tablereservation> getData(@PathVariable(value="currentPage") int page,
			                                              @PathVariable(value= "itemsPerPage") int size,
			                                              @PathVariable(value= "sortBy") String field,
			                                              @PathVariable(value= "sortOrder") String direction) {
			    	Pageable paging;
			   if(direction.equals("asc")) {
			   paging=PageRequest.of(page-1, size).withSort(Sort.by(field));
			   }
			   else {
				   paging=PageRequest.of(page-1, size).withSort(Sort.by(field).descending());       
			   }
			   		return  repo.findAll(paging);
			    }	
			    @PostMapping
			    public Tablereservation createTablereservation(@RequestBody Tablereservation food) {
			        return repo.save(food);
			    }

			    @GetMapping("{id}")
			    public ResponseEntity<Optional<Tablereservation>> getTablereservationById(@PathVariable  int id){
			        Optional<Tablereservation> food = repo.findById(id);
			        return ResponseEntity.ok(food);
			    }

			    @PutMapping("{id}")
				public Tablereservation updateFoodDetails(@RequestBody Tablereservation b)
				{
					System.out.println("Changes Made Have Been Successfully Updated");
					return repo.save(b);		
				}
			    @DeleteMapping("{id}")
				public String deleteDetails(@PathVariable int id)
				{
			    	repo.deleteById(id);
					return "Id : "+id+" is deleted";
				}
			    @DeleteMapping
			    public String deleteAllDetails()
			    {
			    	repo.deleteAll();
			    	return "All foods deleted";
			    }
			
		}



	

