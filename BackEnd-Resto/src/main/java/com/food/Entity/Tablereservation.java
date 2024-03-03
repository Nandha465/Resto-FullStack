package com.food.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="reservationdata")
public class Tablereservation {
			@Id
			@GeneratedValue(strategy=GenerationType.AUTO)
			private int id;
			private String name;
			private String phone;
			private String date;
			private String time;
			private int people;
			public int getId() {
				return id;
			}
			public void setId(int id) {
				this.id = id;
			}
			public String getName() {
				return name;
			}
			public void setName(String name) {
				this.name = name;
			}
			public String getPhone() {
				return phone;
			}
			public void setPhone(String phone) {
				this.phone = phone;
			}
			public String getdate() {
				return date;
			}
			public void setdate(String date) {
				this.date = date;
			}
			public String gettime() {
				return time;
			}
			public void settime(String time) {
				this.time = time;
			}
			public double getpeople() {
				return  people;
			}
			public void setpeople(int people) {
				this. people = people;
			}
			public Tablereservation (int id, String name, String phone,String date, String time, int people) {
				super();
				this.id = id;
				this.name = name;
				this.phone = phone;
				this.date = date;
				this.time = time;
				this.people =  people;
			}
			public Tablereservation() {}
		
	}
