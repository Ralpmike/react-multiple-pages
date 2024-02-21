import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Instagram = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        const fetchResult = await res.json();
        setData(fetchResult);
      } catch (err) { 
        setError(err.message);
      }
    };

    fetchData();
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //   .then((res) => res.json() )
  //   .then((data) => setData(data))
  }, [id]);
  // console.log(data);

  // console.log(product)

  return (
    <div className="insta-blog">
      {error? <p>{error}</p> : data && (
        <div className="insta-product" key={id}>
          <h2>{data.category}</h2>
          <img src={data.image} alt="" />
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className="cost-rating">
            <p>
              Price: <strong>${data.price}</strong>
            </p>
            <p>
              Count: <strong>{data.rating.count}</strong>
            </p>
            <p>
              Rating: <strong>{data.rating.rate}</strong>
            </p>
          </div>
          <NavLink to="/about">Go to Catalogue</NavLink>
        </div>
      )}
    </div>
  );
};

export default Instagram;