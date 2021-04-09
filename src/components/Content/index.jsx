import { createUseStyles } from 'react-jss';
import { routes } from '../routes';

const useStyles = createUseStyles({
  content: {
    display: 'flex',
    flex: 1,
    border: '1px solid black',
  },
});

const Content = () => {
  const classes = useStyles();
  const { pathname } = window.location;
  return (
    <div className={classes.content}>
      {routes.map(({ link, component: Component }) =>
        pathname === link ? <Component key={link} /> : null,
      )}
    </div>
  );
};

export default Content;
