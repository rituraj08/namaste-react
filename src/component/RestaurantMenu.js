import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
import useRestaurantMenu from "./../hooks/useRestaurantMenu";
import { resList } from "./../utils/mockdata";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const menu = useRestaurantMenu();
  const [showItemList, setShowItemList] = useState(false);

  const obj = {
    Recommended: 0,
    ["Newly Added"]: 1,
    Popular: 2,
  };

  const [showIndex, setShowIndex] = useState(null);

  const handleClick = (title) => {
    console.log("This handleClick is called ", title, obj[title]);
    setShowItemList((prev) => !prev);
    setShowIndex(obj[title]);
  };

  console.log('showIndex : ', showIndex);

  // const [menu, setMenu] = useState(null);
  // const {resId} = useParams();

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   // use in url + resId
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER"
  //   );
  //   const json = await data.json();
  //   setMenu(json.data?.cards[2]?.card?.card?.info);
  // };

  if (menu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = menu;

  return (
    <div className="menu">
      <h1> {name}</h1>
      <h2>
        {cuisines} {costForTwoMessage}
      </h2>

      {/* {resList.map((category) => <RestaurantCategory data={category.info}/>)} */}

      {/* controlled component */}

      <RestaurantCategory
        title="Recommended"
        key={"id1"}
        showItemList={showIndex === 0 ? showItemList : false}
        handleClick={handleClick}
      />
      <RestaurantCategory
        title="Newly Added"
        key={"id12"}
        showItemList={showIndex === 1 ? showItemList : false}
        handleClick={handleClick}
      />
      <RestaurantCategory
        title="Popular"
        key={"id3"}
        showItemList={showIndex === 2 ? showItemList : false}
        handleClick={handleClick}
      />
    </div>
  );
};

export default RestaurantMenu;
