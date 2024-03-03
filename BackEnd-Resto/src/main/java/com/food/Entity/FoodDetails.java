package com.food.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="fooddetails")
public class FoodDetails {

		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int id;
		private String name;
		private String phone;
		private String foodname;
		private int quantity;
		private double price;
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
		public String getFoodname() {
			return foodname;
		}
		public void setFoodname(String foodname) {
			this.foodname = foodname;
		}
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		public double getPrice() {
			return price;
		}
		public void setPrice(double price) {
			this.price = price;
		}
		public FoodDetails (int id, String name, String phone,String foodname, int quantity, double price) {
			super();
			this.id = id;
			this.name = name;
			this.phone = phone;
			this.foodname = foodname;
			this.quantity = quantity;
			this.price = price;
		}
		public FoodDetails () {}
	

	
}
