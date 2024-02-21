
import { NavLink } from "react-router-dom";
import "../styles/HomeCardStyles.css"

const HomeCard = ({data}) => {


  
  return (
    <div className="homecard-container">
      <h1>Navigating my most viewed blogs:</h1>
      {data ? data.slice(0, 5).map((product) => {
        const { image, category, description, title, id } = product;

        return (
          <div key={id} className="homecard-item">
            <img src={image} alt={category }/>
            <div className="carditem-text">
              <h2 >{title}</h2>
              <p >{description.slice(0, 102)}......</p>

              <NavLink to={`blog/${id}`}>View</NavLink>
            </div>
          </div>
        );
      }) : <p>Loading.......</p>}
    </div>
  );
};

export default HomeCard;
