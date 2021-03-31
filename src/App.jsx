import Header from './components/Header';
import Content from './components/Content';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <div className="body">
      <Menu />
      <Content />
    </div>
    <Footer />
  </div>
);

export default App;
