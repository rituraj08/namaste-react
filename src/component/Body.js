import Shimmer from "./Shimmer";
import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const onlineStatus = useOnlineStatus();

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromoted(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62444806999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json : ", json);

    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // Optional Chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("listOfRestaurant : ", listOfRestaurant);

  if (onlineStatus === false) return <h1>Looks like you are offline!</h1>;

  const {loggedInUser, setUserName} = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurant.filter((item) =>
                  item.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            {" "}
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurant(
              listOfRestaurant?.filter((item) => item.info.avgRating > 4.4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
        <div>
          <label>Username : </label>
          <input type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((res) => (
          // basically the restaurantMenu we have added in the router, so here in Link we have added to as that flow only, can make that com
          // as dynamic and also here id can be dynamic

          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res.info.id % 2 === 1 ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
