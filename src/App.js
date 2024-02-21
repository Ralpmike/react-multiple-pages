import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Instagram from './pages/Instagram';
import Nav from './components/Nav';
import Footer from './pages/Footer';
import ErrorPage from './pages/ErrorPage';



function App() {
  
  const [navState, setNavState]  = useState(false);
  const [data, setData] = useState([]);
  
  const [blog, setBlog] = useState([]) ;

  const handleClick = (id) => {
    if(id){
    //  setBlog((prev) => [...prev, data[id]])
    setBlog([data[id - 1]]);
    console.log(id)
    }
  }

  const[product, setProduct] = useState([])

  const handleProduct = (id) =>{

    if(id) {
       setProduct([data.find(product => product.id === id)]); //setProduct([data[id - 1]])
      
       console.log(`product id is ${id}`)
      }
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
    <BrowserRouter>
      <Nav navState={navState} setNavState={setNavState}/>
      <Routes>
        <Route path='/' element={<Home data={data} handleClick={handleClick}/>} />
        <Route path='about' element={<About data={data} handleProduct={handleProduct}/>} />
        <Route path='blog/:id' element={<Blog blog={blog} />} />
        <Route path='instagram/:id' element={<Instagram  product={product} />} />

        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
