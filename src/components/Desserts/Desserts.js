import { Fragment } from 'react';

import DessertsSummary from './DessertsSummary';
import AvailableDesserts from './AvailableDesserts';

const Desserts = () => {
  return (
    <Fragment>
      <DessertsSummary />
      <AvailableDesserts />
    </Fragment>
  );
};

export default Desserts;
