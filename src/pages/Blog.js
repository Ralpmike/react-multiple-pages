import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setBlog(data);

      } catch (error) {
        console.error(error); // Log the error for debugging
        setError("Failed to fetch data. Please try again later.");

      }
      finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blog) {
    return <p>No data found for the given ID.</p>;
  }

  return (
    <div className="img-blog-display">
      <div className="image">
        <h2>{blog.category}</h2>
        <img src={blog.image} alt={blog.title} />
        <h3>{blog.title}</h3>
        <p>{blog.description}</p>
        <p>Price: <strong>${blog.price}</strong></p>
        <p>Count: <strong>{blog.rating.count}</strong></p>
        <p>Rating: <strong>{blog.rating.rate}</strong></p>
        <NavLink to="/">Go to Homepage</NavLink>
      </div>
    </div>
  );
};

export default Blog;
