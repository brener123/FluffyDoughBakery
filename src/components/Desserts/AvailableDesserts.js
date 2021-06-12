//import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import DessertItem from './DessertItem/DessertItem';
import classes from './AvailableDesserts.module.css';


const DUMMY_DESSERTS = [
  {
    id: 'm1',
    name: 'Apple & Blackberry Crumble',
    description: 'Best pia you ever tried!',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Banana Pancake',
    description: 'Our specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Choc Chip Pecan Pie',
    description: 'Part of our rotating desserts and a deal of the day!',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Chocolate Caramel Crispy cake',
    description: 'Melts is your mouth!',
    price: 18.99,
  },
];
// const AvailableDesserts = () => {
//   const [Desserts, setDesserts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [httpError, setHttpError] = useState();

//   useEffect(() => {
//     const fetchDesserts = async () => {
//       const response = await fetch(
//         'https://www.theDessertdb.com/api/json/v1/1/filter.php?c=Dessert'
//       );

//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const responseData = await response.json();

//       const loadedDesserts = [];

//       for (const key in responseData) {
//         loadedDesserts.push({
//           id: key,
//           name: responseData[key].name,
//           description: responseData[key].description,
//           price: responseData[key].price,
//         });
//       }

//       setDesserts(loadedDesserts);
//       setIsLoading(false);
//     };

//     fetchDesserts().catch((error) => {
//       setIsLoading(false);
//       setHttpError(error.message);
//     });
//   }, []);

//   if (isLoading) {
//     return (
//       <section className={classes.DessertsLoading}>
//         <p>Loading...</p>
//       </section>
//     );
//   }

//   if (httpError) {
//     return (
//       <section className={classes.DessertsError}>
//         <p>{httpError}</p>
//       </section>
//     );
//   }
const AvailableDesserts = () => {
  const DessertsList = DUMMY_DESSERTS.map((Dessert) => (
    <DessertItem
      key={Dessert.id}
      id={Dessert.id}
      name={Dessert.name}
      description={Dessert.description}
      price={Dessert.price}
    />
  ));

  return (
    <section className={classes.desserts}>
      <Card>
        <ul>{DessertsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableDesserts;
