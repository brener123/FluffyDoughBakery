//import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import DessertItem from './DessertItem/DessertItem';
import classes from './AvailableDesserts.module.css';


const DUMMY_DESSERTS = [
  {
    id: 'm1',
    name: 'Apple & Blackberry Crumble',
    description: 'Best pie you ever tried!',
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
    description: 'Melts in your mouth!',
    price: 18.99,
  },
];

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
