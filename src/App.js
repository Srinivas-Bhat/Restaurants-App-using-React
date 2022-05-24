
import './App.css';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';
import userInfo from "./data/userInfo.json";
import offers from "./data/offers.json";
import restaurants from "./data/restaurants.json"
import { useState } from 'react';

function App() {

  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState(restaurants);

  const filters = {
              1: "Cost High to Low",
              2: "Cost Low to High",
              3: "Ratings",
              4: "Delivery Time",
              5: "Relevance",
  };

  const updateFilter = (newFilter) => {
    switch(newFilter) {
      case "1": {
        setFilterBy(1);
        data.sort((a, b) => b.costForTwo - a.costForTwo);
        setData([...data]);

        break;
      }

      case "2": {
        setFilterBy(2);
        data.sort((a, b) => a.costForTwo - b.costForTwo);
        setData([...data]);

        break;
      }

      case "3": {
        setFilterBy(3);
        data.sort((a, b) => b.rating - a.rating);
        setData([...data]);

        break;
      }

      case "4": {
        setFilterBy(4);
        data.sort((a, b) => b.deliveryTimings - a.deliveryTimings);
        setData([...data]);

        break;
      }

      case "5": {
        setFilterBy(5);
        data.sort((a, b) => b.offers - a.offers);
        setData([...data]);

        break;
      }

    }
  }
  return (
    <div >
      <Navbar {...userInfo.location}/>
      <Offers offers={offers}/>
      <section className='near-you'>
        <Filter currentFilteredBy={filterBy} updateFilter={updateFilter} filters={filters} />
        <Restaurants restaurants={data}/>
      </section>
    </div>
  );
}

export default App;
