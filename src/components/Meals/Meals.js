import React, { Fragment } from 'react';

import MealsSummary from './MealsSummary'
import AvaibleMeals from './AvaibleMeals';

const Meals = props => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaibleMeals />
    </Fragment>
  )
}

export default Meals;