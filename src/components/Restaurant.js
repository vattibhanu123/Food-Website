const Restaurant = ({ resData }) => {
  return (
    <div className="rest_card">
      <img className="res_img" src={resData.restaurantImg}></img>
      <h2>{resData.restaurantName}</h2>
      <h3> {resData.specialDishes}</h3>
      <h4>{resData.rating}</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  );
};
export default Restaurant;
