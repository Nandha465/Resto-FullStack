package com.food.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name="usersignupdata",uniqueConstraints=@UniqueConstraint(columnNames= {"phone"}))
public class UserSignup {
			
			@Id
			@GeneratedValue(strategy=GenerationType.AUTO)
			private int id;
			private String username;
			private String password;
			private String phone;
			private String email;
			public int getId() {
				return id;
			}
			public void setId(int id) {
				this.id = id;
			}
			
			public String getphone() {
				return phone;
			}
			public void setphone(String phone) {
				this.phone = phone;
			}
			public String getUsername() {
				return username;
			}
			public void setUsername(String username) {
				this.username = username;
			}
			public String getPassword() {
				return password;
			}
			public void setPassword(String password) {
				this.password = password;
			}
			public String getEmail() {
				return email;
			}
			public void setEmail(String email) {
				this.email = email;
			}
			
			
		

		
	}

	

