
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <Header />
      <Header title = "My First ReactApp"/>
      <Header title = "Thanks"/>

      <h1>Hello</h1>
      <h2>Everyone</h2>
      <Footer year = "2006" company = "Airtel"/>
    </div>
  );
}

export default App;
