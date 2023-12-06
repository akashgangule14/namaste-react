import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6570414&lng=73.8084545&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

     //conditional rendering
    // if(listOfRestaurant?.length === 0){
    //     return <Shimmer />;
    // }

    return listOfRestaurant?.length === 0 ? (
        <Shimmer /> 
        ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={ (e) => {
                        setSearchText(e.target.value);
                    } }
                    />
                    <button 
                    onClick={ () => {
                        //console.log(searchText);

                       const filteredRestaurant = listOfRestaurant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn" 
                    onClick={ () => {
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.info.avgRating >= 4
                        );
                        setListOfRestaurant(filteredList);
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant?.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Body;