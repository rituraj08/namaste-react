import { useState } from "react";
import { resList } from "./../utils/mockdata";
import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
  const {showItemList, handleClick} = props;

  console.log('showItemList : ', showItemList);

  const handleClick2 = (title) => {
    handleClick(title);
  };
  return (
    <div>
      <div className="accordina-container">
        <div className="accordian-header" onClick={() => handleClick2(props.title)}>
          <span>
            {props.title} `(${resList.length})`
          </span>
          <span>^^</span>
        </div>

        {showItemList && <ItemList key={props.title}/>}
      </div>

      {/* <div className="accordina-container">
        <div className="accordian-header">
          <span>Newly Added `(${resList.length})`</span>
          <span>^^</span>
           
        </div>
         {showItemList && <ItemList />}
      </div>

      <div className="accordina-container">
        <div className="accordian-header">
          <span>Popular `(${resList.length})`</span>
          <span>^^</span>
          
        </div>
         {showItemList && <ItemList />}
      </div> */}
    </div>
  );
};

export default RestaurantCategory;
