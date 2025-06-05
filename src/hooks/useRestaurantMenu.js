import { useState, useEffect } from "react";
const useRestaurantMenu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // use in url + resId
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER"
    );
    const json = await data.json();

    console.log('json : ', json);

    setMenu(json.data?.cards[2]?.card?.card?.info);

    console.log(json.data?.menu?.cards[2]?.card?.card?.info);
  };

  return menu;
};

export default useRestaurantMenu;
