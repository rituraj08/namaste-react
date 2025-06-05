export const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const { name, costForTwo, avgRating, cuisines, sla, cloudinaryImageId } =
    info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />

      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label style={{
          position: "absolute", backgroundColor: "black", color: "white", margin: 2, padding:2, borderRadius: 5}
          }>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
