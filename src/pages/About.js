
import { NavLink } from "react-router-dom"


const About = ({ data, handleProduct }) => {
  return (
    <div className='about-blog'>
      {data ?
        data.map((productImg) => {
          const { image, title, id } = productImg
          return (
            <div key={id} className='images'>
              <NavLink to={`/instagram/${id}`} onClick={() => handleProduct(id)}>
              <img src={image} alt={id} />
              <p>{title.slice(0,40)}...</p>
            </NavLink>
            </div>
          )
        }) : <p>Loading files.....</p>}
    </div>
  )
}

export default About