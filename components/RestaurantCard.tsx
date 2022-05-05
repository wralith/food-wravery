// import restaurants from "../pages/api/restaurants.json";

// Dummy

const RestaurantCard = (props : {product : string}) => {
  // Todo fix width problem dynamically with math!

  return (
    <div className="card w-full bg-base-100 shadow-xl lg:w-[31.5%] border border-gray-900/70">
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
