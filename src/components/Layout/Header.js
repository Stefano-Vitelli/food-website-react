import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return ( 
    <Fragment>
      <header className={classes.header}>
        <h1> React Meals </h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="quality food" />
      </div>
    </Fragment>
   );
}
 
export default Header;