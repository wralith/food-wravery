// import restaurants from "../pages/api/restaurants.json";

// Dummy

const RestaurantCard = (props : {product : string}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl lg:w-[31.5%]">
      <div className="card-body">
        <h2 className="card-title">X Restaurant!</h2>
        <p>Delicious!!</p>
      </div>
      <figure>
        <img
        className="w-full"
          src={`https://api.lorem.space/image/${props.product}?w=400&h=225`}
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default RestaurantCard;
