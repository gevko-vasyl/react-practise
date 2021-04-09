import { createUseStyles } from 'react-jss';
import { routes } from '../routes';

const useStyles = createUseStyles({
  menu: {
    display: 'flex',
    border: '1px solid black',
    flexDirection: 'column',
  },
});

const Menu = () => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <p>Menu</p>
      {routes.map(({ link, label }) => (
        <a key={link} href={link}>
          {label}
        </a>
      ))}
    </div>
  );
};

export default Menu;
