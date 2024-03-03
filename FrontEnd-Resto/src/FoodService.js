import axios from 'axios'

const URL = 'http://localhost:8080/reservetable';
const url='/get?page=${currentPage}&size=${itemsPerPage}'
class FoodService{

    getAllFoods(){
        return axios.get(URL)
    }
    getFoodsPage(){
        return axios.get(URL+url);
    }

    createFood(food){
        return axios.post(URL,food)
    }

    getFoodById(foodId){
        return axios.get(URL + '/' + foodId);
    }

    updateFood(foodId, food){
        return axios.put(URL + '/' +foodId, food);
    }

    deleteFood(foodId){
        return axios.delete(URL + '/' + foodId);
    }
    deleteAllFood(foodId){
        return axios.delete(URL);
    }
}

export default new FoodService();