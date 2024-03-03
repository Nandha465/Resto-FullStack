package com.food.Controller;

import java.util.List;
import java.util.Optional;

import javax.xml.crypto.Data;

import org.hibernate.grammars.hql.HqlParser.SortDirectionContext;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//import com.example.demo.Entity.Employees;
//import com.example.demo.Repository.EmployeeRepository;
//import com.example.demo.Service.EmployeeService;
import com.food.Entity.FoodDetails;
import com.food.Repository.FoodRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/foods")
public class FoodController {

	    @Autowired
	    private FoodRepository foodRepository;
	    @GetMapping(value="/get")
	    public Iterable<FoodDetails> getAllFoodDetails(){
	        return foodRepository.findAll();
	    }
	    @GetMapping(value="/{currentPage}/{itemsPerPage}/{sortBy}/{sortOrder}")
	    public Page<FoodDetails> getData(@PathVariable(value="currentPage") int page,
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
	   		return  foodRepository.findAll(paging);
	    }	
	    @PostMapping
	    public FoodDetails createFoodDetails(@RequestBody FoodDetails food) {
	        return foodRepository.save(food);
	    }

	    @GetMapping("{id}")
	    public ResponseEntity<Optional<FoodDetails>> getFoodDetailsById(@PathVariable  int id){
	        Optional<FoodDetails> food = foodRepository.findById(id);
	        return ResponseEntity.ok(food);
	    }

	    @PutMapping("{id}")
		public FoodDetails updateFoodDetails(@RequestBody FoodDetails b)
		{
			System.out.println("Changes Made Have Been Successfully Updated");
			return foodRepository.save(b);		
		}
	    @DeleteMapping("{id}")
		public String deleteDetails(@PathVariable int id)
		{
	    	foodRepository.deleteById(id);
			return "Id : "+id+" is deleted";
		}
	    @DeleteMapping
	    public String deleteAllDetails()
	    {
	    	foodRepository.deleteAll();
	    	return "All foods deleted";
	    }
	
}
