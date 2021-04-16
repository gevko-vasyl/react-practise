import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    //ЯКЩО МЕТОД ВИКЛИКАНИЙ ЗНАЧИТЬ Є ПОМИЛКА!!
    //ВСТАНОВЛЮЄМО STATE
    this.setState({ hasError: true });
    // ТАКОЖ МОЖНА ВІДПРАВИТИ ЗВІТ ПРО ПОМИЛКУ НА АНАЛІТИЧНИЙ СЕРВІС
    // logErrorToMySrevice(error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>Something went wrong with counters, please try again later</h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
