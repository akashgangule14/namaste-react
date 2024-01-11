import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {resData} = props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla
    } = resData?.info;
  
      return (
          <div className="m-4 p-4 w-[250px] rounded-lg" style={ {backgroundColor:"#d1d1e0"} }>            
                  <img 
                      className="rounded-lg" 
                      alt="logo"
                      src={CDN_URL+ cloudinaryImageId} />
                  <h3 className="font-bold py-4 text-lg">{name}</h3>
                  <h4>{cuisines}</h4>
                  <h4>{avgRating} stars</h4>
                  <h4>{costForTwo}</h4>
                  <h4>{sla.slaString}</h4>
          </div>
      )
  };

  export default RestaurantCard;