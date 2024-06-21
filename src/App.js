import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './components/homePage/HomePage';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <main>
        <HomePage/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
