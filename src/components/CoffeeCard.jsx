import { useEffect, useState } from "react";
import Star from "../assets/Star.svg";
import StarFill from "../assets/Star_fill.svg";
import "../styles/coffeeCard.css";

const CoffeeCard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        );
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const handlerFilter = (arr) => {
    setFilters(arr.filter((product) => product.available === true));
  };

 
  console.log("esta es la info filtrada:", filters);
  return (
    <>
      <div className="container-btns">
        <button onClick={()=> setFilters(data)} className='btn-active'>All Products</button>
        <button onClick={() => handlerFilter(data) } className='btn-active'>Available Now</button>
      </div>
      <div className="main-container-card">
      {(filters.length > 0 ? filters : data).map((item, index) => (
        <div className="container-card" key={index}>
          { item.popular ? <h4 className="popular">Popular</h4> : ''}
          <img src={item.image} alt={item.name} className="card-image" />
          
          <div className="container-card-info">
            <div className="container-card-info-child">
              <h4>{item.name}</h4> <h5>{item.price}</h5>
            </div>
            <div className="container-votes">
              <img src={item.rating ? StarFill : Star} alt="" />
              <p>({item.votes} votes)</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default CoffeeCard;

{
  /* <div className="container-card" key={index}>
<img
  src={item.image}
  alt={item.name}
  key={item.id}
  className="card-image"
/>
<div className="container-card-info">
  <div className="container-card-info-child">
    <h4>{item.name}</h4> <h5>{item.price}</h5>
  </div>
  <div className="container-votes">
    <img src={`${item.rating ? StarFill : Star}`} alt="" />
    <p>({item.votes} votes)</p>
  </div>
</div>
</div> */
}
