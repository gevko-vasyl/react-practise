import Header from './components/Header';
import Content from './components/Content';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  body: {
    display: 'flex',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <div className={classes.body}>
        <Menu />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
