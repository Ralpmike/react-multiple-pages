
import { NavLink } from 'react-router-dom'

const ProductImages = ({data}) => {
  return (
    <div className='product-images'>
        { data ? 
          data.slice(16, 20).map((productImg) => {
            const {image, title, id} = productImg
            return(
              <div key={id} className='images'>
               <img src={image}  alt={id}/>
               <figcaption>{title}</figcaption>
              </div>
            )
          }) : <p>Loading files.....</p>}
        
        <NavLink to="about">View All Images</NavLink> 
    </div>
  )
}

export default ProductImages