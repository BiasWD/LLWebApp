import './App.css';
import Header from './Components/Header/Header.js'
import Hero from './Components/Hero.js'
import Main from './Components/Main/Main.js'
import Footer from './Components/Footer.js'

function App() {
  return (
    <>
      <div className="layout-container">
      <Header />
      <Hero />
      <Main />
      <Footer />
      </div>
    </>
  );
}

export default App;
