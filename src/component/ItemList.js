import { useDispatch } from "react-redux";
import { resList } from "./../utils/mockdata";
import { addItem } from "../utils/cartSlice";

const ItemList = () => {

  const dispatch = useDispatch()
  const clickHandler = (item) => {

    dispatch(addItem(item));

  };

  return (
    <div>
      {resList.map((item) => {
        return (
          <div className="accordian-itemlist">
            <span>
              {item.info.name} {item.info.costForTwo}
            </span>
            <button onClick={() => clickHandler(item)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
