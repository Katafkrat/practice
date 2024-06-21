import AppHeader from './components/appHeader/AppHeader'; 
import AppFooter from './components/appFooter/AppFooter';
import MovieContainer from './components/movieContainer/MovieContainer';

import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader/>
      <body>
        <MovieContainer/>
      </body>
      <AppFooter/>
    </div>
  );
}

export default App;
